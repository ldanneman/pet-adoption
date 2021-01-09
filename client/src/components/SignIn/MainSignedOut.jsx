import React, { useContext } from "react";
import { Card, Carousel } from "react-bootstrap";
import "./signin.scss";
import PetDataContext from "../../Global/Context/context";
import { Link } from "react-router-dom";

function MainSignedOut() {
  const { petData } = useContext(PetDataContext);
  return (
    (petData && (
      <>
        <div className="container">
          <div className="welcome">Welcome To Pet Adoption Inc!!</div>
          <div id="main-cards" className="cards">
            <Card id="img-card">
              <Card.Body>
                <Carousel>
                  {petData.map((pet) => (
                    <Carousel.Item>
                      <Link to={"/pets/" + pet._id}>
                        <img
                          className="pet-c-image"
                          src={pet.imgUrl}
                          alt={pet.name}
                        />
                        <Carousel.Caption className="c-caption">
                          <h3>{pet.name}</h3>
                        </Carousel.Caption>
                      </Link>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Card.Body>
            </Card>
            <Card id="txt-card">
              <Card.Body>
                <Card.Title id="main-right-title">
                  Meet your new companion!
                </Card.Title>
                <Card.Text id="main-right-text">
                  <p>
                    We strive to provide good homes to all animals in our care.
                  </p>
                  <p>Looking to adopt? </p>
                  <p>
                    You've come to the right place! Take a look around and help
                    one of our friends in need find a good home.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </>
    )) ||
    null
  );
}

export default MainSignedOut;
