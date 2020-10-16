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
  posts.forEach((post, i) => {
    const slugifiedTitle = slugify(post.node.title, { lower: true });
    const nextArticle = post.next && post.next.title;
    const previousArticle = post.previous && post.previous.title;
    const prev = posts[i - 1];
    const next = posts[i + 1];
    createPage({
      path: `blog/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: post.node.id,
        nextArticle,
        previousArticle,
        prev,
        next,
      },
    });
  });
}

async function paginate({ graphql, actions, component }) {
  const data = await graphql(
    `
      {
        allDatoCmsNews {
          totalCount
        }
      }
    `
  );

  const { totalCount } = data.data.allDatoCmsNews;
  const pages = Math.ceil(totalCount / 4);

  Array.from({ length: pages }).forEach((_, i) => {
    actions.createPage({
      path: `blog/${i + 1}`,
      component,
      context: {
        skip: i * 4,
        currentPage: i + 1,
        pages,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  await Promise.all([
    createBlogPages({ graphql, actions }),
    paginate({
      graphql,
      actions,
      component: path.resolve('./src/pages/paginatedBlog.js'),
    }),
  ]);
};
