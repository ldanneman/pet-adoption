import React, { useState, useEffect } from "react";
import AddPetForm from "./AddPetForm";
import "./admin.css";
import axios from "axios";
import { BACK_PORT } from "../../Global/var";
import { useHistory } from "react-router-dom";
import UsersDashboard from "./UsersDashboard";

function Admin() {
  let history = useHistory();
  const token = localStorage.getItem("auth-token");
  const [check, setCheck] = useState(null);
  useEffect(() => {
    axios
      .get(`${BACK_PORT}/check/admin`, { headers: { "auth-token": token } })
      .then(function (response) {
        setCheck(response?.status);
      })
      .catch(function (error) {
        setCheck(error?.response?.status || "theError");
      });
  }, [check, token]);

  if (check) {
    return check == 200 ? (
      <div className="dashboard">
        <div className="add-pet-form">
          Add a Pet
          <AddPetForm />
        </div>
        <div className="users-dashboard">
          <UsersDashboard />
        </div>
      </div>
    ) : (
      <div>{history.push("/err404")}</div>
    );
  } else {
    return <div>{null}</div>;
  }
}

export default Admin;
