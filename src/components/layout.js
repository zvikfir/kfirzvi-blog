import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row } from "react-bootstrap"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container id="layout" className="d-flex flex-column">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
