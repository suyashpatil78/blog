import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FiGithub, FiMail } from 'react-icons/fi';
import { FaGlobe, FaStackOverflow } from 'react-icons/fa';
import Button from './Button';
import { rhythm } from '../utils/typography';
import { getTheme } from '../utils/theme';
import ThemeContext from './ThemeContext';

const SIDEBAR_QUERY = graphql`
	{
		site {
			siteMetadata {
				author
				bio
				social {
					website
					github
					email
					stackoverflow
				}
			}
		}
	}
`;

const Sidebar = () => {
	const data = useStaticQuery(SIDEBAR_QUERY);
	const { author, bio, social } = data.site.siteMetadata;
	const { theme } = useContext(ThemeContext);
	const { muted } = getTheme(theme);
	const borderStartingColor = theme === 'light' ? 'hsla(0, 0%, 0%, 0.1)' : 'hsla(0, 0%, 100%, 0.1)';
	return (
		<nav
			css={{
				borderRight: '1px solid',
				margin: '24px 0',
				padding: '16px 64px',
				alignSelf: 'start',
				borderImage: `linear-gradient(to bottom, ${borderStartingColor}, hsla(0, 0%, 0%, 0)) 1 100%`,
				['@media (max-width: 992px)']: {
					borderBottom: '1px solid',
					borderImage: `linear-gradient(to right, ${borderStartingColor}, hsla(0, 0%, 0%, 0)) 1 100%`,
					borderImageSlice: 1,
					padding: `16px 0 ${rhythm(2)} 0`,
					margin: '24px 32px',
				},
			}}
		>
			<div
				css={{
					['@media (max-width: 576px)']: {
						display: 'grid',
						gridTemplateColumns: 'auto auto',
						gridGap: 16,
						alignItems: 'center',
						justifyContent: 'start',
					},
				}}
			>
				<h3>{author}</h3>
			</div>
			<p className="muted" css={{ color: muted }}>
				{bio}
			</p>
			<div
				css={{
					display: 'grid',
					gridGap: 16,
					gridTemplateColumns: 'repeat(4, auto)',
					justifyItems: 'center',
					justifyContent: 'start',
				}}
			>
				<Button
					title="Website"
					aria-label="Link to my website"
					as="a"
					circular
					href={social.website}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGlobe />
				</Button>
				<Button
					title="GitHub"
					aria-label="Link to my GitHub"
					as="a"
					circular
					href={social.github}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FiGithub />
				</Button>
				<Button
					title="Stackoverflow"
					aria-label="Link to my Stackoverflow"
					as="a"
					circular
					href={social.stackoverflow}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaStackOverflow />
				</Button>
				<Button
					title="Email"
					aria-label="Email me"
					as="a"
					circular
					href={social.email}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FiMail />
				</Button>
			</div>
		</nav>
	);
};

export default Sidebar;
