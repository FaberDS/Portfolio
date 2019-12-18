import React, { Component } from "react";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import Header from "./components/Header/Header";
import Knowledge from "./components/Knowledge/Knowledge";
import txt from "./const/content";
import base from "./basicFunctionality/Actions";
import ThatsMe from "./components/ThatsMe/ThatsMe";
import paraImg from "./images/laptopC.png";
import paraImg2 from "./images/phone.jpeg";
import  ComponentContainer from './components/ComponentContainer/ComponentContainer';
const sections = txt.navigationSections;
const paralexStyle = {
  backgroundImage: `url(${paraImg})`,
  minHeight: "100vh",
  height: "100%"
};
const paralexStyle2 = {
  backgroundImage: `url(${paraImg2})`,
  minHeight: "10vh",
  height: "200px !important"
};
class App extends Component {
  render() {
    console.log(paraImg);
    return (
      <div className="app">
        <Navigation {...txt} sections={sections} />
        <div className="paralex" style={paralexStyle}>
          <header className="app-header" id="app-header">
            <Header text={txt} />
          </header>
        </div>
        {/* <div>
            <h1>Life long learning</h1>
        </div> */}
          {/* <ThatsMe ID={txt.navigationSections[0] }{...txt} /> */}
        <ComponentContainer {...txt}/>
        <div className="paralex" style={paralexStyle2}>
        <ServiceSection {...txt} ID={txt.navigationSections[1]} />
        </div>

        
        <Knowledge {...txt} ID={txt.navigationSections[2]} />
        <Footer {...txt} />
        <div id="backTopBtn" className="btn">
          <i className="fas fa-chevron-up"></i>
        </div>
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


export default App;
