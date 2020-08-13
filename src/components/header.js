import React from "react"
// import LogoImg from "../images/logo.png"
import { Image, Jumbotron, Row, Col } from "react-bootstrap"
import HeadshotImage from "../images/headshot.png";
import { Link } from "gatsby";

const Header = () => (
  <Jumbotron as="header" className="d-flex flex-column align-items-center header-jumbo">
    <Row>
      <h1>Welcome!</h1>
    </Row>
    <Row>
      <Col className='offset-lg-2 m-4 d-flex justify-content-center align-items-center' xs={12} lg={4}>
        <Link to="/"><Image src={HeadshotImage} width={200} roundedCircle id="logo-img" /></Link>
      </Col>
      <Col className='d-flex justify-content-center align-items-center' xs={12} lg={6}>
        <p className='text-xs-center text-sm-left'>I'm Kfir Zvi, a Software Engineer from Israel.
          <br />
          I take interest mostly in Python, Node.JS and React.
          <br />
          Feel free to contact me for any suggestions you may have regarding the blog, or any other business proposals or collaborations.
          <br />
          <a href="mailto:zvikfir10@gmail.com">Email me</a>
        </p>
      </Col>
    </Row>
  </Jumbotron>
)

export default Header
