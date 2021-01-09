import React from "react";

function MyAccount() {
  const userInfo = localStorage.getItem("user-info");
  const userArray = userInfo.split(",");
  return <div className="account-div">Name: {userArray[1]}</div>;
}

export default MyAccount;
