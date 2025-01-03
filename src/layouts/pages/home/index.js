/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Kit 2 React pages
import Home from "pages/Home";

import ContactUs from "../../../pages/Home/sections/ContactUs";
import Footer from "pages/Home/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Home />
      {/* <DrivenResults />
      <WhatWeOffer />
      <ClientsAndPartners />
      <MeetTheTeam /> */}
      <ContactUs />
      <Footer />
    </>
  );
}
