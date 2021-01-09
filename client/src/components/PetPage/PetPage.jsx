import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import PetDataContext from "../../Global/Context/context";
import "./PetPage.css";
import axios from "axios";
import { BACK_PORT } from "../../Global/var";
import Swal from "sweetalert2";

function PetPage() {
  const { petData } = useContext(PetDataContext);
  const params = useParams()._id;
  let selectedPet = petData.find((x) => x._id == params);

  const token = localStorage.getItem("auth-token");
  const addPet = () => {
    axios
      .post(
        `${BACK_PORT}/posts/user-save-pet`,
        {
          params,
        },
        {
          headers: { "auth-token": token, "Content-Type": "application/json" },
        }
      )
      .then(function (response) {
        Swal.fire("Hooray!!", "Pet Saved Successfully", "success");
      })
      .catch(function (error) {
        Swal.fire("Oops...","Try That Again", "error");
      });
  };

  return (
    <>
      <div className="container m-5">
        <div className="grid-container">
          <div className="pet-img grid">
            <img
              className="d-block c-image"
              src={selectedPet.imgUrl}
              alt="First slide"
            />
          </div>
          <div className="details grid">
            <div class="grid-container-details">
              <div class="tone title gridd">Name:</div>
              <div class="ttwo title gridd">Breed:</div>
              <div class="tthree title gridd">Age:</div>
              <div class="tfour title gridd">Weight:</div>
              <div class="tfive title gridd">Height:</div>

              <div class="one gridd">{selectedPet.name}</div>
              <div class="two gridd">{selectedPet.breed}</div>
              <div class="three gridd">{selectedPet.age} Years Old</div>
              <div class="four gridd">{selectedPet.weight}cm</div>
              <div class="five gridd">{selectedPet.height}kg</div>
            </div>
          </div>
          <div className="description grid">{selectedPet?.description}</div>
          <div className="adopt-me grid">
            <Button
              id="blue5"
              className="adopt-button"
              type="submit"
              onClick={addPet}
            >
              Add to Cart
            </Button>
          </div>
          <div className="misc grid">
            <div class="grid-container-misc">
              <div class="m1">{selectedPet.neutered}</div>
              <div class="m2">{selectedPet.shots}</div>
              <div class="m3">{selectedPet.trained}</div>
              <div class="m4">{selectedPet.petfriendly}</div>
              <div class="m5">{selectedPet.friendly}</div>
              <div class="m6">{selectedPet.kids}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PetPage;
