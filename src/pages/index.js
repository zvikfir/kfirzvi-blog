import React from "react"
import { Link, graphql } from "gatsby"
import "../assets/css/main.scss"
import Layout from "../components/layout"
import { Card, Container } from "react-bootstrap"
import { ArticleSubtitle } from "../components/articleSubtitle"
import { Helmet } from 'react-helmet'

const IndexPage = ({ data }) =>
  (
    <Layout>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        {/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap" rel="stylesheet"></link> */}
      </Helmet>
      <Container className="d-flex flex-row justify-content-around flex-wrap flex-fill">
        {data.allMarkdownRemark.edges.map(document => {
          const { slug, title } = document.node.frontmatter;
          return (
            <Card className="article my-3 mx-1 shadow col-lg-3 col-md-5 col-12 rounded" key={slug}>
              <Card.Body>
                <Card.Title className="mt-3 article-title">
                  <Link
                    to={`/${slug}`}
                    title={title}
                  >
                    {title}
                  </Link>
                </Card.Title>
              </Card.Body>
              <Card.Footer className="bg-white article-footer">
                <ArticleSubtitle article={document.node.frontmatter} />
              </Card.Footer>
            </Card>
          )
        })
        }
      </Container>
    </Layout >
  )

export default IndexPage

export const pageQuery = graphql`
query IndexQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark (sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          slug
          authors {
            name
          }
        }
      }
    }
  }
}
`
