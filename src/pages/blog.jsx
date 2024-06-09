import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import { object } from 'prop-types';

import ThemeProvider from '../components/ThemeProvider';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import BlogInfo from '../components/BlogInfo';
import { rhythm } from '../utils/typography';

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;
  const emptyQuery = ""
  const [post, setPost] = useState({
    filteredPost: [...posts],
    query: emptyQuery,
  });

  const handleInputChange = (event) => {
    const query = event.target.value
    const posts = data.allMarkdownRemark.edges || []

    const filteredPost = posts.filter(post => {
      const { description, title, tags } = post.node.frontmatter;

      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags
          .join("")
          .toLowerCase()
          .includes(query.toLowerCase()))
      )
    });

    // if (filteredPost?.length === 0) {
    //   return setPost({
    //     query,
    //     filteredPost: [posts[0]],
    //   })
    // }

    setPost({
      query,
      filteredPost,
    })
  }

  return (
    <ThemeProvider>
      <section
        css={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          alignContent: 'start',
          height: '100%',
          minHeight: '100vh',
          maxWidth: 1200,
          margin: '0 auto',
          ['@media (max-width: 992px)']: {
            gridTemplateColumns: 'auto',
            justifyItems: 'center',
          },
        }}
      >
        <Sidebar />
        <Layout location={location}>
          <Seo />
          <input
            type="text"
            aria-label="Search"
            placeholder="Type to filter posts..."
            onChange={handleInputChange}
            style={{
              marginBottom: rhythm(1.2),
              padding: rhythm(0.25),
              borderRadius: 2,
              border: '1px solid #d1d1d1',
              width: '100%',
            }}
          />
          {post.filteredPost.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            const link = (
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            );
            return (
              <div key={node.fields.slug}>
                <BlogInfo
                  timeToRead={node.frontmatter.time || node.timeToRead}
                  date={node.frontmatter.date}
                />
                <h3
                  css={{
                    marginTop: rhythm(1 / 4),
                    marginBottom: rhythm(0.5),
                  }}
                >
                  {link}
                </h3>
                <p
                  css={{ marginBottom: rhythm(1.5) }}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            );
          })}
          {
            post.filteredPost.length === 0 && (
              <h4
                css={{
                  marginTop: rhythm(1 / 4),
                  marginBottom: rhythm(0.5),
                }}
              >
                Oh no, looks like we couldn’t find any posts! Maybe try tweaking your search term a bit?
              </h4>
            )
          }
        </Layout>
      </section>
    </ThemeProvider>
  );
};

BlogIndex.propTypes = {
  data: object.isRequired,
  location: object.isRequired,
};

export const pageQuery = graphql`
	query {
		allMarkdownRemark(
			filter: { frontmatter: { title: { ne: "About" } } }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
						external
						time
					}
					timeToRead
				}
			}
		}
	}
`;

export default BlogIndex;
