import React, { useState, useContext, useMemo } from "react";
import { Nav, Navbar, Button, Card } from "react-bootstrap";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import AdvSearchModal from "./AdvSearchModal";
import PetDataContext from "../../Global/Context/context";

function SearchBar({ onSearch }) {
  const onSub = (e) => {
    onSearch(e.target.value.toLowerCase());
  };

  return (
    <Navbar className="d-block">
      <form>
        <Nav className="search-nav">
          <Nav.Item>
            <input
              onChange={onSub}
              className="search-input"
              placeholder="Search"
              name="search"
            />
          </Nav.Item>
          <Nav.Item>
            <Button
              variant="outline-light"
              className="search-button"
              type="submit"
            >
              Search
            </Button>
          </Nav.Item>
          <Nav.Item>{/* <AdvSearchModal /> */}</Nav.Item>
        </Nav>
      </form>
    </Navbar>
  );
}

function DogCardsDisplayed({ petData }) {
  return petData.map((item) => (
    <Card key={item.id} id="card">
      <Link
        style={{ textDecoration: "none" }}
        className="links"
        to={"/pets/" + item._id}
      >
        <div>
          <Card.Img className="card-image" variant="top" src={item.imgUrl} />
          <Card.Body>
            <Card.Title className="black">{item.name}</Card.Title>
            <div className="d-flex black">
              <div>
                <b>Breed:</b> {item.breed}
              </div>
              <div>
                <b>Age:</b> {item.age}
              </div>
              <div>
                <b>Weight:</b> {item.weight}lb
              </div>
              <div>
                <b>Height:</b> {item.height}in
              </div>
            </div>
          </Card.Body>
        </div>
      </Link>
    </Card>
  ));
}

function SearchPage() {
  const { petData } = useContext(PetDataContext);

  const [filter, setFilter] = useState("");

  const filteredData = useMemo(() => {
    if (filter == "") return petData;
    return petData.filter(
      (item) =>
        item.name.toLowerCase().includes(filter) ||
        item.breed.toLowerCase().includes(filter)
    );
  }, [petData, filter]);

  return (
    <div>
      <SearchBar onSearch={(searchTerm) => setFilter(searchTerm)} />
      <div className="d-flex flex-wrap sp-body">
        <DogCardsDisplayed petData={filteredData} />
      </div>
    </div>
  );
}

export default SearchPage;
