const path = require(`path`);
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/layouts/post.js`);
  const result = await graphql(
    `
      query queryCMSPage {
        allDatoCmsNews(sort: { fields: [date], order: DESC }) {
          edges {
            node {
              id
              title
            }
            next {
              title
            }
            previous {
              title
            }
          }
        }
      }
    `
  );

  result.data.allDatoCmsNews.edges.forEach(post => {
    const slugifiedTitle = slugify(post.node.title, { lower: true });
    const next = post.next && post.next.title;
    const previous = post.previous && post.previous.title;
    createPage({
      path: `articles/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: post.node.id,
        next,
        previous,
      },
    });
  });
};
