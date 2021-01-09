import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import SignInModal from "../components/SignIn/SignInModal";

const NavBar = () => {
  const [isLogedIn, setIsloggedIn] = useState(null);
  useEffect(() => {
    const userInfo = localStorage.getItem("user-info");
    // const userArray = userInfo.split(",");
    // console.log("mmm", userArray);
    setIsloggedIn(userInfo ? userInfo : null);
  }, [isLogedIn]);

  const handleSignOut = () => {
    localStorage.clear();
    setIsloggedIn(null);
    window.location.href = "http://localhost:3000/";
  };

  return isLogedIn ? (
    <SignedIn onSignOut={handleSignOut} isLogedIn={isLogedIn} />
  ) : (
    <SignedOut />
  );
};

const SignedIn = ({ onSignOut, isLogedIn }) => {
  let userarray = isLogedIn.split(",");
  console.log("zzz", userarray);
  return (
    <Navbar className="justify-content-around main-navbar">
      <Nav.Item>
        <Button id="blue4">
          <Link className="link" to="/">
            Home
          </Link>
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button id="blue3">
          <Link className="link" to="/searchpage">
            Our Dogs
          </Link>
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button id="blue2">
          <Link className="link" to="/aboutus">
            About Us
          </Link>
        </Button>
      </Nav.Item>
      {userarray[3] == "admin" && (
        <Nav.Item>
          <Button id="blue6">
            <Link className="link" to="/admin">
              Admin
            </Link>
          </Button>
        </Nav.Item>
      )}
      <Nav.Item>
        <Button id="blue" type="submit" onClick={onSignOut}>
          Sign Out
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button id="user-button">
          <Link id="black-link" className="link" to="/mypets">
            {userarray[1]}
          </Link>
        </Button>
      </Nav.Item>
    </Navbar>
  );
};

const SignedOut = () => {
  return (
    <Navbar>
      <Nav.Item>
        <SignInModal />
      </Nav.Item>
    </Navbar>
  );
};
export default NavBar;
