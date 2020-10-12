import React from "react"
// import LogoImg from "../images/logo.png"
import { Image, Jumbotron, Row, Col } from "react-bootstrap"
import HeadshotImage from "../images/headshot.jpg"
import { Link } from "gatsby"

const Header = () => (
  <Jumbotron
    as="header"
    className="d-flex flex-column align-items-center header-jumbo"
  >
    <Row xs={12}>
      <h1 className="text-center">Welcome!</h1>
    </Row>
    <Row>
      <Col className="d-flex offset-lg-2 align-items-center" xs={12} lg={3}>
        <Link to="/">
          <Image
            src={HeadshotImage}
            width={"70%"}
            style={{ borderRadius: "50%", float: "right" }}
            id="logo-img"
          />
        </Link>
      </Col>
      <Col
        className="d-flex m-auto m-lg-0 justify-content-center align-items-center"
        xs={8}
        lg={4}
      >
        <Row>
          <p className="text-center text-lg-left text-lg-left about-me-paragraph">
            I'm Kfir Zvi, a Software Engineer from Israel.
            <br />
            I take interest in a lot of areas in computer science, but currently
            I mostly deal with Python mainly for data-centric applications, and
            Full Stack technologies in JS.
            <br />
            Feel free to contact me for any suggestions you may have regarding
            the blog, or any other business proposals or collaborations.
            <br />
            <a href="mailto:zvikfir10@gmail.com">Email me</a>
          </p>
        </Row>
        <Row></Row>
      </Col>
    </Row>
  </Jumbotron>
)

export default Header
