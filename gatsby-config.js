module.exports = {
	siteMetadata: {
		bio: 'Eat 🍔 Sleep 😴 Code 💻 Repeat 🔁',
		title: `Suyash Patil`,
		author: `Suyash Patil`,
		description: `Personal blog of Suyash Patil`,
		domain: 'suyashpatil.me',
		siteUrl: `https://blogs.suyashpatil.me`,
		repo: 'suyashpatil78/blog',
		social: {
			website: 'https://suyashpatil.me',
			github: 'https://github.com/suyashpatil78',
			email: 'mailto:patilsuyash545@gmail.com',
			stackoverflow: 'https://stackoverflow.com/users/20093123/suyashpatil',
			linkedin: 'https://www.linkedin.com/in/suyash-patil',
		},
	},
	plugins: [
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/pages`,
				name: `pages`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
					`gatsby-remark-external-links`,
				],
			},
		},
		`gatsby-plugin-image`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Suyash's Blog`,
				short_name: `Suyash`,
				start_url: `/`,
				background_color: `#121212`,
				theme_color: `#1d1d1d`,
				display: `minimal-ui`,
				icon: `static/favicon.png`,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `salmon`,
			},
		},
		{
			resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
			options: {
				devMode: false,
			},
		},
		'gatsby-plugin-catch-links',
		'gatsby-plugin-sitemap',
	],
};
