import React from "react"
import { Link, graphql } from "gatsby"
import "../assets/css/main.scss"
import Layout from "../components/layout"
import { Card, Container } from "react-bootstrap"
import { ArticleSubtitle } from "../components/articleSubtitle"

const IndexPage = ({ data }) =>
  (
    <Layout>
      <Container className="d-flex flex-row justify-content-around flex-wrap flex-fill">
        {data.allMarkdownRemark.edges.map(document => {
          const { slug, title, intro } = document.node.frontmatter;
          return (
            <Card className="article my-3 mx-1 shadow col-lg-3 col-md-5 col-12 rounded" key={slug}>
              <Card.Body>
                <Card.Title className="mt-3">
                  <Link
                    to={`/${slug}`}
                    title={title}
                  >
                    {title}
                  </Link>
                </Card.Title>
                <Card.Text>{intro}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white">
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
          intro
        }
      }
    }
  }
}
`
