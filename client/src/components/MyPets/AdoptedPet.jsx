import React from "react";

function AdoptedPet({ myPetData }) {
  return myPetData && myPetData?.adopted == true ? (
    <div className="adopted-pet saved">
      <div>{myPetData.name}</div>
      <div className="img-div">
        <img
          className="my-pet-img"
          alt={myPetData.name}
          src={myPetData?.imgUrl}
        ></img>
      </div>
    </div>
  ) : (
    <div className="adopted-pet saved">No Adopted Pets</div>
  );
}

export default AdoptedPet;
