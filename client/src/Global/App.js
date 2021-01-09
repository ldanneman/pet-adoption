import React, { useState, useEffect } from "react";
import "./App.css";
import MainSignedOut from "../components/SignIn/MainSignedOut";
import NavBar from "./Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchPage from "../components/SearchPage/SearchPage";
import PetPage from "../components/PetPage/PetPage";
import MyPets from "../components/MyPets/MyPets";
import err404 from "./err404";
import Admin from "../components/Admin/Admin";
import axios from "axios";
import { BACK_PORT } from "./var";
import PetDataContext from "./Context/context";
import { Spinner } from "react-bootstrap";
import ServerDown from "./ServerDown";
import AboutUs from "../components/About/AboutUs";

function App() {
  const [petData, setPetData] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("auth-token");
  useEffect(() => {
    axios
      .get(`${BACK_PORT}/data`, { headers: { "auth-token": token } })
      .then(function (response) {
        setPetData(response.data);
      })
      .catch(function (error) {
        setError(error?.response?.data || "theError");
      });
  }, [token]);

  return petData ? (
    <div className="App">
      <PetDataContext.Provider value={{ petData }}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/" component={MainSignedOut} exact />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/searchpage" component={SearchPage} />
            <Route path="/mypets" component={MyPets} />
            <Route path="/admin" component={Admin} />
            <Route exact path="/pets/:_id" component={PetPage} />
            <Route path="/serverdown" component={ServerDown} />
            <Route component={err404} />
          </Switch>
        </BrowserRouter>
      </PetDataContext.Provider>
    </div>
  ) : (
    <div className="center">
      {!error ? (
        <Spinner
          id="spinner"
          className="spinner"
          animation="grow"
          variant="primary"
        />
      ) : (
        ""
      )}
      <BrowserRouter>
        <NavBar />
        <Switch>
          {error ? (
            <Route path="/" component={ServerDown} />
          ) : (
            <Route path="/" component={MainSignedOut} />
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
