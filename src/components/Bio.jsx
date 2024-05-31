import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getTheme } from '../utils/theme';
import ThemeContext from './ThemeContext';

const Bio = () => {
	const data = useStaticQuery(graphql`
		query BioQuery {
			site {
				siteMetadata {
					author
					social {
						website
						github
					}
				}
			}
		}
	`);

	const { author, social } = data.site.siteMetadata;
	const { theme } = useContext(ThemeContext);
	const { color, secondary } = getTheme(theme);
	return (
		<div
			css={{
				display: `grid`,
				gridTemplateColumns: 'auto auto',
				alignItems: 'start',
				a: {
					borderBottomColor: color,
					'&:hover, &:focus': {
						borderBottomStyle: 'solid',
						borderBottomColor: color,
					},
				},
				['@media (max-width: 576px)']: {
					gridTemplateColumns: 'auto',
				},
			}}
		>
			<div css={{ fontSize: 16, color: secondary }}>
				<p>
					Personal blog of <a href={social.website}>{author}</a>. I’m a{' '}
					<a href={social.github}>software engineer</a> working mostly on frontend. I also play chess in my free time.
				</p>
			</div>
		</div>
	);
};

export default Bio;
