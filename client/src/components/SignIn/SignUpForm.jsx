import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "react-bootstrap";
import { BACK_PORT } from "../../Global/var";
import Swal from "sweetalert2";

function SignUpForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    axios
      .post(`${BACK_PORT}/user/register`, data)
      .then(function (response) {
        window.location.reload();
      })
      .catch(function (error) {
        Swal.fire("Oops...", error.response.data, "error");
      });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="s-label" htmlFor="name">
        Name:
      </label>
      <input name="name" ref={register({ required: true })} />
      {errors.name && <span>This field is required</span>}
      <br />
      <label className="s-label" htmlFor="email">
        Email:
      </label>
      <input name="email" type="email" ref={register({ required: true })} />
      {errors.email && <span>This field is required</span>}
      <br />
      <label className="s-label" htmlFor="password">
        Password:
      </label>
      <input
        name="password"
        type="password"
        ref={register({ required: true })}
      />
      {errors.password && <span>This field is required</span>}
      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default SignUpForm;
