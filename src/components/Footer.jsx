import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import { getTheme } from '../utils/theme';

const Footer = () => {
	const { theme } = useContext(ThemeContext);
	const { muted } = getTheme(theme);
	return (
		<footer
			css={{
				fontFamily: 'Zilla Slab',
				color: muted,
				display: 'grid',
				gridTemplateColumns: 'auto 1fr',
				gridGap: 16,
				['@media (min-width: 768px)']: {
					marginLeft: -32,
				},
			}}
		>
			Made with ❤️ by Suyash Patil
		</footer>
	);
};

export default Footer;
