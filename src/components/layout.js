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
    <Container id="layout">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer className="text-center my-3">
        ©
        {` `}
      כל הזכויות שמורות 
      {` `}
      {new Date().getFullYear()},
        נבנה עם
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        {` `}
        ועם <a href="https://strapi.io/">Strapi</a>
      </footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
