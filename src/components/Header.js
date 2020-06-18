import React, { useEffect, useState, useContext } from "react";
import "../styles/App.css";
import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Steps from "../components/Steps";
import Form from "../components/Form";
import axios from "axios";
import UserContext from "../contexts/users";
import { useHistory } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar />
      <div className="sub-header-container">
        <div className="container">
          <SubHeader />
        </div>
      </div>
      <div className="steps-container">
        <div className="container">
          <Steps />
        </div>
      </div>
    </>
  );
}

export default Header;
