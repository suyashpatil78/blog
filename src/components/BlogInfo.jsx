import React, { useContext } from 'react';
import { number, string } from 'prop-types';

import { getTheme } from '../utils/theme';
import ThemeContext from './ThemeContext';

const BlogInfo = ({ timeToRead, date }) => {
	const { theme } = useContext(ThemeContext);
	const { muted } = getTheme(theme);
	return (
		<div className="muted" css={{ display: 'flex', alignItems: 'center', color: muted }}>
			<small css={{ marginRight: 4 }}>
				{date} • {timeToRead} min read
			</small>
		</div>
	);
};

BlogInfo.propTypes = {
	timeToRead: number,
	date: string.isRequired,
};

export default BlogInfo;
