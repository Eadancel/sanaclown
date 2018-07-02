/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require ('path');
const { createFilePath } = require('gatsby-source-filesystem')


exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;
  const blogPostTemplate = path.resolve (`src/templates/blog-post.js`);

  return graphql (
    `{
        allMarkdownRemark(filter: {frontmatter: {layout: {eq: "blog"}}}) {
            totalCount
            edges {
              node {
                frontmatter {
                  title
                  categoria
                  thumbnail
                  description
                  date (formatString: "MMMM DD, YYYY", locale: "es")
                  parent
                  path
                  layout
                }
                id
                html
                fields {
                    slug
                  }
              }
            }
          }
  }`
  ).then (result => {
    if (result.errors) {
      return Promise.reject (result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;


    posts.forEach((edge,index) => {
        const id = edge.node.id;

        createPage({
          path: edge.node.fields.slug,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.layout)}.js`
          ),
          context: {
            id,
            prev: index === 0 ? null : posts[index - 1].node,
            next: index === posts.length - 1 ? null : posts[index + 1].node,
          },
        })
      })


  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
    const { createNodeField } = boundActionCreators

    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode })
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }