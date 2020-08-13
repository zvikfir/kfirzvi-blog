import React from "react"
import PropTypes from "prop-types"
import { Container } from "react-bootstrap"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <Container id="layout">
      <Header />
      <main>{children}</main>
      <footer className="text-center my-3">
        All rights reserved {new Date().getFullYear()} ©, Built with
        {` `}
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
      </footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
