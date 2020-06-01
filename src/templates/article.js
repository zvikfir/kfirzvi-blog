import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"

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
      {/* <ReactMarkdown source={article.content} unwrapDisallowed={true} disallowedTypes={['paragraph']}/> */}
      <ReactMarkdown source={article.content} />

      {/* <p>{article.content}</p> */}
    </Layout>
  )
}

export default Article
