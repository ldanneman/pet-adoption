import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "react-bootstrap";
import CloudinaryUploader from "./CloudinaryUploader";
import { BACK_PORT } from "../../Global/var";
import Swal from "sweetalert2";

function AddPetForm() {
  const [imgName, setImgName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    const newData = data;
    newData["imgUrl"] = imgUrl;
    axios
      .post(`${BACK_PORT}/data/add`, newData)
      .then(function (response) {
        e.target.reset();
        setImgName("");
        setImgUrl("");
        Swal.fire("Added...", "Pet Added Successfully!", "success");
      })
      .catch(function (error) {
        Swal.fire("Oops...", error.response.data, "error");
      });
  };
  const uploadedImage = (image) => {
    let imageName = image.info.original_filename;
    let imageUrl = image.info.url;
    setImgName(imageName);
    setImgUrl(imageUrl);
  };

  useEffect(() => {}, [imgUrl]);

  return (
    <>
      <div>
        <div>
          <CloudinaryUploader uploadedImage={uploadedImage} />
        </div>
        <div>{imgName}</div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" ref={register({ required: true })} />
        {errors.name && <span role="alert">Name is required</span>}
        <br />
        <label htmlFor="breed">Breed:</label>
        <input name="breed" type="text" ref={register({ required: true })} />
        {errors.breed && <span role="alert">Breed is required</span>}
        <br />
        <label htmlFor="age">Age:</label>
        <input name="age" type="number" ref={register({ required: true })} />
        {errors.age && <span role="alert">Age is required</span>}
        <br />
        <label htmlFor="weight">Weight:</label>
        <input name="weight" type="number" ref={register} />
        <br />
        <label htmlFor="height">Height:</label>
        <input name="height" type="number" ref={register} />
        <br />
        <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          ref={register}
        />
        <label htmlFor="male">Male</label>{" "}
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          ref={register}
        />
        <label htmlFor="female">Female</label>
        <br />
        <input
          type="radio"
          id="neutered"
          name="neutered"
          value="Neutered"
          ref={register}
        />
        <label htmlFor="neutered">Neutered</label>{" "}
        <input
          type="radio"
          id="notNeutered"
          name="neutered"
          value="Not Neutered"
          ref={register}
        />
        <label htmlFor="notNeutered">Not Neutered</label>
        <br />
        <input
          type="radio"
          id="petFriendly"
          name="petfriendly"
          value="Pet Friendly"
          ref={register}
        />
        <label htmlFor="petFriendly">Pet Friendly</label>{" "}
        <input
          type="radio"
          id="notPetFriendly"
          name="petfriendly"
          value="Not Pet Friendly"
          ref={register}
        />
        <label htmlFor="notPetFriendly">Not Pet Friendly</label>
        <br />
        <input
          type="radio"
          id="hasShots"
          name="shots"
          value="Shots up to Date"
          ref={register}
        />
        <label htmlFor="hasShots">Shots up to Date</label>{" "}
        <input
          type="radio"
          id="noShots"
          name="shots"
          value="Shots Not up to Date"
          ref={register}
        />
        <label htmlFor="noShots">Shots not up to Date</label>
        <br />
        <input
          type="radio"
          id="isTrained"
          name="trained"
          value="House Trained"
          ref={register}
        />
        <label htmlFor="isTrained">House Trained</label>{" "}
        <input
          type="radio"
          id="notTrained"
          name="trained"
          value="Not House Trained"
          ref={register}
        />
        <label htmlFor="notTrained">Not House Trained</label>
        <br />
        <input
          type="radio"
          id="goodWithKids"
          name="kids"
          value="Good with Kids"
          ref={register}
        />
        <label htmlFor="goodWithKids">Good with Kids</label>{" "}
        <input
          type="radio"
          id="notGoodWithKids"
          name="kids"
          value="Not Good with Kids"
          ref={register}
        />
        <label htmlFor="notGoodWithKids">Not Good With Kids</label>
        <br />
        <input
          type="radio"
          id="isFriendly"
          name="friendly"
          value="People Friendly"
          ref={register}
        />
        <label htmlFor="isFriendly">People Friendly</label>{" "}
        <input
          type="radio"
          id="notFriendly"
          name="friendly"
          value="Not People Friendly"
          ref={register}
        />
        <label htmlFor="notFriendly">Not People Friendly</label>
        <br />
        <label htmlFor="description">Description:</label>
        <br />
        <textarea id="description" name="description" ref={register}></textarea>
        <br />
        <Button id="blue7" type="submit">
          Add Pet
        </Button>
      </form>
    </>
  );
}

export default AddPetForm;
