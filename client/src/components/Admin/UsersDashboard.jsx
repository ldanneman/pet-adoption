import React, { useEffect, useState } from "react";
import { BACK_PORT } from "../../Global/var";
import axios from "axios";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

function UsersDashboard() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("auth-token");
  useEffect(() => {
    axios
      .get(`${BACK_PORT}/data/users`, { headers: { "auth-token": token } })
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        Swal.fire("Oops...", error.response.data, "error");
      });
  }, [token]);

  const onConfirm = (userId, petId) => {
    axios
      .post(
        `${BACK_PORT}/posts/user-adopted`,
        {
          userId,
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
        Swal.fire("Perfect!", "Pet Adopted", "success");
      })
      .catch(function (error) {
        Swal.fire("Oops...", error.response.data, "error");
      });
    window.location.reload();
  };

  return (
    <div>
      <div className="user-grid">
        <div className="grid-item">USERS</div>
        <div className="grid-item">ADOPTION REQUEST</div>
        <div className="grid-item">CONFIRM</div>
        <div className="grid-item">ADOPTED PET</div>
        <div className="grid-item">ROLE</div>
      </div>
      {users.map((user) => (
        <div key={user._id} className="user-grid">
          <div className="grid-item">{user.name}</div>
          {user.adoptionRequest ? (
            <div className="grid-item">{user?.adoptionRequest}</div>
          ) : (
            <div className="grid-item">--</div>
          )}
          {user.adoptionRequest ? (
            <div className="grid-item">
              <Button
                id="yellow"
                onClick={() => onConfirm(user._id, user.petId)}
              >
                Confirm
              </Button>
            </div>
          ) : (
            <div className="grid-item">--</div>
          )}
          {user.adoptedPet ? (
            <div className="grid-item">{user?.adoptedPet}</div>
          ) : (
            <div className="grid-item">--</div>
          )}
          <div className="grid-item">{user?.role}</div>
        </div>
      ))}
    </div>
  );
}

export default UsersDashboard;
