const slugify = require("slugify");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
        {
          articles: allStrapiArticle {
            edges {
              node {
                strapiId
                title
              }
            }
          }
        }
      `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog articles pages.
  const articles = result.data.articles.edges
  articles.forEach((article, index) => {
    let articleUrl = slugify(article.node.title, { locale: 'he' });
    articleUrl = articleUrl === '' ? article.node.title.replace(/\s/g, '-') : articleUrl;
    createPage({

      path: `/article/${articleUrl}`,
      component: require.resolve("./src/templates/article.js"),
      context: {
        id: article.node.strapiId,
      },
    })
  })
}