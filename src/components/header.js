import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoImg from "../images/logo.png"
import { Container, Row, Image, Jumbotron } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <Jumbotron as="header" className="d-flex flex-column align-items-center header-jumbo">
    {/* <header className="d-flex flex-column align-items-center"> */}
    <Link to="/">
      <Image id="logo-img" src={LogoImg} />
    </Link>
    <h1>{siteTitle}</h1>
  </Jumbotron>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
