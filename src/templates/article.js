import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Card } from "react-bootstrap"
import { ArticleSubtitle } from "../components/articleSubtitle"
import { Helmet } from "react-helmet"

export default function Article({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Helmet>
        {`<script>
          window.MathJax = {
            tex: {
              inlineMath: [['$', '$']]
            },
            svg: {
              fontCache: 'global'
            }
          }
          </script>`}
        <div id="fb-root"></div>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=719431901980076&autoLogAppEvents=1"
          nonce="sQdAREkp"
        ></script>
        <title>{`${data.site.siteMetadata.title} - ${frontmatter.title}`}</title>
        <script
          type="text/javascript"
          id="MathJax-script"
          async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
        ></script>
      </Helmet>
      <Card className="p-4 article-card">
        <Card.Title as="h1" className="mb-5 article-title">
          {frontmatter.title}
        </Card.Title>
        <Card.Subtitle as="h5" className="d-flex flex-row">
          <div className="pr-3">
            <ArticleSubtitle article={frontmatter} />
          </div>
        </Card.Subtitle>
        <hr />
        <Card.Body className="article-body">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Card.Body>
      </Card>
      <div
        className="fb-comments"
        data-href="https://blog.kfirzvi.co.il/"
        data-numposts="5"
        data-width=""
      ></div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        authors {
          name
        }
      }
    }
  }
`
