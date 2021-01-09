import dogData from "../dogData";
import { Card } from "react-bootstrap";
import "./SearchPage.css";

function DogCardsDisplayed() {
  return dogData.map((item) => (
    <Card
      style={{
        backgroundColor: "red",
      }}
      key={item.id}
    >
      <div>
        <Card.Img
          style={{
            backgroundColor: "red",
          }}
          variant="top"
          src={item.imgUrl}
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <div className="d-flex">
            <div>
              <b>Breed:</b> {item.breed}
            </div>
            <div>
              <b>Age:</b> {item.age}
            </div>
            <div>
              <b>Weight:</b> {item.weight}kg
            </div>
            <div>
              <b>Height:</b> {item.height}cm
            </div>
          </div>
        </Card.Body>
      </div>
    </Card>
  ));
}

export default DogCardsDisplayed;
