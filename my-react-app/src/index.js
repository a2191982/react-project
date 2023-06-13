import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPageHeader from "./LandingPageHeader";
import LandingPageBody from "./Body";
import AsFeaturedIn from "./FeaturedIn";
import LandingPageFooter from "./LandingPageFooter";
import reportWebVitals from "./reportWebVitals";
import Membership from "./LandingPageEnd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LandingPageHeader />
    <LandingPageBody />
    <AsFeaturedIn />
    <LandingPageFooter />
    <Membership />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
