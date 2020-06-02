import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism"

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

  const preTagRenderer = ({ language, value }) => (
    <SyntaxHighlighter language={"python"} style={darcula} showLineNumbers>
      {value}
    </SyntaxHighlighter>
  )

  return (
    <Layout>
      <ReactMarkdown
        source={article.content}
        renderers={{
          code: preTagRenderer,
        }}
      />

      {/* <p>{article.content}</p> */}
    </Layout>
  )
}

export default Article
