import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({ description, lang, meta, title, ogImage: ogImageProp }) {

	const { site, ogImageDefault } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						siteUrl
						domain
					}
				}
				ogImageDefault: file(absolutePath: { regex: "/assets/og-image/" }) {
					childImageSharp {
						gatsbyImageData(layout: FIXED, height: 630, width: 1200)
					}
				}
			}
		`,
	);

	const metaDescription = description || site.siteMetadata.description;
	const ogImage =
		ogImageProp ||
		site.siteMetadata.siteUrl.concat(
			ogImageDefault.childImageSharp.gatsbyImageData.images.fallback.src,
		);
	const ogTitle = title || site.siteMetadata.title;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={ogTitle}
			titleTemplate={title && `%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: ogTitle,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: 'og:image',
					content: ogImage,
				}
			].concat(meta)}
		>
			<meta property="og:site_name" content="SuyashPatil"></meta>
			<script
				src="https://js.sentry-cdn.com/2f3037e5c8e616140a6864aa7890c6e1.min.js"
				crossorigin="anonymous"
			></script>
			<script>
				{`
					window.sentryOnLoad = function () {
						Sentry.init({
							tracesSampleRate: 1.0,
							replaysSessionSampleRate: 0.1,
							replaysOnErrorSampleRate: 1.0,
						});
					}
				`}
			</script>
			<script async src="https://www.googletagmanager.com/gtag/js?id=G-367953D6BZ"></script>
			<script>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-367953D6BZ');
				`}
			</script>
		</Helmet>
	);
}

Seo.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
};

Seo.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string,
	ogImage: PropTypes.string,
};

export default Seo;
