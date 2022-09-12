import React from "react";
import { Container, Row } from "react-bootstrap";
// import logo from '../../images/logo.png';
import logowhite from '../../images/logo-whitebg.png'
import './style.css'

export default function ComingSoon() {
    return (
        <Container>
            <Row>
                {/* <img className="logo-image" src={logo} alt="logo" /> */}
                <img className="logo-image" src={logowhite} alt="logo" />
            </Row>
            <Row>
                <h1>Coming Soon ...</h1>
            </Row>
        </Container>
    )
}