import React from "react";
import { Tab, Col, Row, Nav } from "react-bootstrap";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

function SignIn() {
  return (
    <div>
      <div className="container sign-in">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Col>
            <Row sm={3}>
              <Nav variant="pills" className="flex-row">
                <Nav.Item>
                  <Nav.Link eventKey="first">Sign In</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
            <Row sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="sign-in-div">
                    <div className="inputs">
                      <SignInForm />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="sign-up">
                    <SignUpForm />
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Row>
          </Col>
        </Tab.Container>
      </div>
    </div>
  );
}

export default SignIn;
