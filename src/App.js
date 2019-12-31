import React, { Component } from "react";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import Header from "./components/Header/Header";
import Knowledge from "./components/Knowledge/Knowledge";
import txt,{icons} from "./const/content";
import base from "./basicFunctionality/Actions";
import ThatsMe from "./components/ThatsMe/ThatsMe";
import paraImg from "./images/laptop.jpeg";
import paraImgMobil from "./images/laptopMobil.jpeg";
import codeImg from "./images/code.jpeg";
import paraImg3 from "./images/phone.jpeg";
import ComponentContainer from "./components/ComponentContainer/ComponentContainer";
import SlideShowContainer from "./components/SlideShowContainer/SlideShowContainer";
import ShowContainer from "./components/ShowContainer/ShowContainer";
import IconCard from "./components/IconCard/IconCard";
import { isCompositeComponent } from "react-dom/test-utils";
import ContactSection from "./components/ContactSection/ContactSection";
const sections = txt.navigationSections;
const width= window.screen.width;
let headerImg = width <= 600 ? paraImgMobil : paraImg;

const paralexStyle = {
  backgroundImage: `url(${paraImg})`,
  minHeight: "100vh",
  height: "100%"
};
const paralexStyle2 = {
  backgroundImage: `url(${codeImg})`,
  minHeight: "20vh",
  height: "200px !important"
};
const paralexStyle3 = {
  backgroundImage: `url(${paraImg3})`,
  minHeight: "10vh",
  height: "200px !important",
};
const paralexStyle4 = {
  backgroundImage: `url(${codeImg})`,
  minHeight: "20vh",
  height: "200px !important",
  backdropFilter: "hue-rotate(120deg)",
  filter: "hue-rotate(90deg)"
};

class App extends Component {
  render() {
        return (
      <div className="app">
        <Navigation {...txt} sections={sections} />
        <div className="paralex" style={paralexStyle}>
          <header className="app-header" id="landingPage">
            <Header text={txt} />
          </header>
        </div>

        <ThatsMe ID={txt.navigationSections[0]} {...txt} />
        <div className="paralex" style={paralexStyle4}></div>
        <SlideShowContainer projects={txt.showCase.projects} txt={txt} />
        <div className="paralex" style={paralexStyle2}></div>
        <ComponentContainer {...txt} ID={txt.navigationSections[1]} />

        <div className="paralex" style={paralexStyle3}>
          <ServiceSection {...txt} ID={txt.navigationSections[2]} />
        </div>

        <Knowledge {...txt} ID={txt.navigationSections[3]} />
        <div className="paralex" style={paralexStyle4}></div>
        <ContactSection {...txt.Contact} />
        <Footer {...txt} />
        <IconCard link="" icon={icons.upArrow} id="backTopBtn"/>
        
      </div>
    );
  }
  componentDidMount() {
    document
      .getElementById("backTopBtn")
      .addEventListener("click", () => base.scrollToTop());
  }
}
window.addEventListener("scroll", () => {
  base.recognizeScrolling(document.getElementById("backTopBtn"), "topNavBar");
});
document.addEventListener("resize", event => {
  console.log(event);
});

export default App;
