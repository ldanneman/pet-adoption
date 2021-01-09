import React, { useState, useEffect } from "react";
import "./MyPets.css";
import SavedPet from "./SavedPet";
import AdoptedPet from "./AdoptedPet";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { BACK_PORT } from "../../Global/var";
import axios from "axios";

function MyPets() {
  const [state, setState] = useState(1);
  const [myPetData, setMyPetData] = useState(null);
  const token = localStorage.getItem("auth-token");
  useEffect(() => {
    axios
      .get(`${BACK_PORT}/data/mypet`, { headers: { "auth-token": token } })
      .then(function (response) {
        setMyPetData(response?.data);
      })
      .catch(function (error) {});
  }, [token, state]);

  const [value, setValue] = useState(1);

  const handleChange = (selectedValue) => setValue(selectedValue);

  return (
    <>
      <ToggleButtonGroup
        type="radio"
        name="radio"
        value={value}
        onChange={handleChange}
      >
        <ToggleButton value={2}>Adopted Pets </ToggleButton>
        <ToggleButton value={1}>Saved Pet </ToggleButton>
      </ToggleButtonGroup>
      <div>My Pets</div>
      <div>
        {value === 1 ? (
          <SavedPet myPetData={myPetData} state={state} setState={setState} />
        ) : (
          <AdoptedPet myPetData={myPetData} />
        )}
      </div>
    </>
  );
}

export default MyPets;
