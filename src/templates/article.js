import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';

export const query = graphql`
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
    }
  }
`

const Article = ({ data }) => {
  const article = data.strapiArticle

  return (
    <Layout>
      <p>{article.content}</p>
    </Layout>
  );
}

export default Article
