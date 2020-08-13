import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Card } from "react-bootstrap"
import { ArticleSubtitle } from "../components/articleSubtitle"
import { Helmet } from 'react-helmet'

export default function Article({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Helmet>
        <script>
          {`window.MathJax = {
            tex: {
              inlineMath: [['$', '$']]
            },
            svg: {
              fontCache: 'global'
            }
          }`}
        </script>
        <script type="text/javascript" id="MathJax-script" async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
        </script>
      </Helmet>
      <Card className="p-4">
        <Card.Title as="h1" className="mb-5">
          {frontmatter.title}
        </Card.Title>
        <Card.Subtitle as="h5" className="d-flex flex-row">
          <div className="pr-3">
            <ArticleSubtitle article={frontmatter} />
          </div>
        </Card.Subtitle>
        <hr />
        <Card.Body>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Card.Body>
      </Card>
    </Layout >
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        authors {
          name
        }
        intro
      }
    }
  }
`
