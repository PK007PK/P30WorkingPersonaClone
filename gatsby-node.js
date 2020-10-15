const path = require(`path`);
const slugify = require('slugify');

async function createBlogPages({ graphql, actions }) {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/layouts/post.js`);
  const result = await graphql(
    `
      {
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

  const posts = result.data.allDatoCmsNews.edges;
  posts.forEach(post => {
    const slugifiedTitle = slugify(post.node.title, { lower: true });
    const nextArticle = post.next && post.next.title;
    const previousArticle = post.previous && post.previous.title;
    createPage({
      path: `articles/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: post.node.id,
        nextArticle,
        previousArticle,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  await Promise.all([createBlogPages({ graphql, actions })]);
};
