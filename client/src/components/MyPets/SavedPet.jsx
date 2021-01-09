import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { BACK_PORT } from "../../Global/var";
import Swal from "sweetalert2";

function SavedPet({ myPetData, setState, state }) {
  const token = localStorage.getItem("auth-token");
  const onClick = () => {
    if (myPetData) {
      const petId = myPetData._id;
      axios
        .post(
          `${BACK_PORT}/posts/user-request-adoption`,
          {
            petId,
          },
          {
            headers: {
              "auth-token": token,
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          Swal.fire(
            "Adoption Requested",
            "we will review your request shortly",
            "success"
          );
        })
        .catch(function (error) {
          Swal.fire("Oops...", error.response.data, "error");
        });
    } else {
      Swal.fire("Oops...", "Try Again", "error");
    }
    setState((state) => state + 1);
  };

  const onDelete = () => {
    const petId = myPetData._id;
    axios
      .post(
        `${BACK_PORT}/posts/user-unsave-pet`,
        {
          petId,
        },
        {
          headers: {
            "auth-token": token,
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        Swal.fire("Removed", "Pet Successfully Removed", "success");
      })
      .catch(function (error) {
        Swal.fire("Oops...", error.response.data, "error");
      });
    setState((state) => state + 1);
  };

  useEffect(() => {}, [state, myPetData]);

  return myPetData &&
    myPetData !== null &&
    myPetData !== "NoPet" &&
    myPetData.adopted !== true ? (
    <>
      <div className="saved-pet saved">
        My Saved Pets
        <div className="img-div">
          <img
            className="my-pet-img"
            alt="my pet"
            src={myPetData?.imgUrl}
          ></img>
        </div>
        <div>
          <Button onClick={onClick}>Adopt Me</Button>
          <Button onClick={onDelete}>Remove Pet</Button>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="saved-pet saved">No Saved Pets</div>
    </>
  );
}

export default SavedPet;
