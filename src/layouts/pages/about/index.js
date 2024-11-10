import About from "pages/About";
import DrivenResults from "../../../pages/About/sections/DrivenResults";
import WhatWeOffer from "../../../pages/About/sections/WhatWeOffer";
import MeetTheTeam from "../../../pages/About/sections/MeetTheTeam";
import ClientsAndPartners from "pages/About/sections/ClientsAndPartners";
import Footer from "pages/Home/sections/Footer";

export default function AboutPage() {
  return (
    <>
      <About />
      <DrivenResults />
      <WhatWeOffer />
      <MeetTheTeam />
      <ClientsAndPartners />
      <Footer />
    </>
  );
}
