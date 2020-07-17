import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Card, Image } from "react-bootstrap"
import { ArticleSubtitle } from "../components/articleSubtitle"
import anonymousPicture from "../images/anonymousPicture.svg"

export const query = graphql`
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      authors {
        name
        picture {
          publicURL
        }
      }
      created_at
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

  const authorImageSrc =
    Boolean(article.authors.length) && article.authors[0].picture
      ? article.authors[0].picture.publicURL
      : anonymousPicture

  return (
    <Layout>
      <Card className="p-4">
        <Card.Title as="h1" className="mb-5">
          {article.title}
        </Card.Title>
        <Card.Subtitle as="h5" className="d-flex flex-row">
          <div>
            <Image
              src={authorImageSrc}
              style={{ width: 75, height: 75 }}
              className="rounded-circle"
            />
          </div>
          <div className="pr-3">
            <ArticleSubtitle article={article} />
          </div>
        </Card.Subtitle>
        <hr />
        <Card.Body>
          <ReactMarkdown
            source={article.content}
            renderers={{
              code: preTagRenderer,
            }}
          />
        </Card.Body>
      </Card>
    </Layout>
  )
}

export default Article
