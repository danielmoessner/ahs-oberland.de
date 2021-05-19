const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create the animal pages
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { collection: { eq: "article" } } }) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `);
  result.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `aktuelles/${node.frontmatter.slug}/`,
      component: path.resolve(`./src/templates/article.jsx`),
      context: {
        slug: node.frontmatter.slug,
        id: node.id,
      },
    });
  });
};

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type PageYamlMeta @infer {
      title: String,
      description: String,
      image: File @fileByRelativePath,
    }
  `);
};
