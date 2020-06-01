import React from "react"
import { Link, graphql } from "gatsby"
import "../assets/css/main.scss"

import Layout from "../components/layout"
import { Card, Container, Row } from "react-bootstrap"

const IndexPage = ({ data }) => (
  <Layout>
    <Container className="d-flex flex-row justify-content-around flex-wrap flex-fill">
      {data.allStrapiArticle.edges.map(document => (
        <Card className="article my-3 mx-1 shadow col-lg-3 col-md-5 col-12">
          <Card.Body>
            <Card.Title>
              <Link
                to={`/article/${document.node.strapiId}`}
                title={document.node.title}
              >
                {document.node.title}
              </Link>
            </Card.Title>
            <Card.Text>{document.node.intro}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          strapiId
          title
          intro
          content
        }
      }
    }
  }
`
