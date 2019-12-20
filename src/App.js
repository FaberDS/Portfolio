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
import codeImg from "./images/code.jpeg";
import paraImg3 from "./images/phone.jpeg";
import  ComponentContainer from './components/ComponentContainer/ComponentContainer';
import SlideShowContainer from "./components/SlideShowContainer/SlideShowContainer";
import ShowContainer from "./components/ShowContainer/ShowContainer";
const sections = txt.navigationSections;
const paralexStyle = {
  backgroundImage: `url(${paraImg})`,
  minHeight: "100vh",
  height: "100%"
};
const paralexStyle2= {
  backgroundImage: `url(${codeImg})`,
  minHeight: "20vh",
  height: "200px !important"
};
const paralexStyle3 = {
  backgroundImage: `url(${paraImg3})`,
  minHeight: "10vh",
  height: "200px !important"
};
          const paralexStyle4= {
            backgroundImage: `url(${codeImg})`,
            minHeight: "20vh",
            height: "200px !important",
            backdropFilter: "hue-rotate(120deg)"
          };
          let _slides = [{
            imageUrl: "https://i.ytimg.com/vi/MxwjEacvrtY/hqdefault.jpg",
            caption: "Allan Allan Al Al Allan"
          }, {
            imageUrl: "https://pbs.twimg.com/profile_images/2576554888/s8vftzr3j0a9r703xdfn.jpeg",
            caption: "Steve Steve Steve"
          }];
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
    
          <ThatsMe ID={txt.navigationSections[0] }{...txt} />
          <div className="paralex" style={paralexStyle4}></div>
          <SlideShowContainer slides={_slides}/>
          <div className="paralex" style={paralexStyle2}></div>
        <ComponentContainer {...txt} ID={txt.navigationSections[1]}/>
        
        <div className="paralex" style={paralexStyle3}>
        <ServiceSection {...txt} ID={txt.navigationSections[2]} />
        </div>

        
        <Knowledge {...txt} ID={txt.navigationSections[3]} />
        <div className="paralex" style={paralexStyle4}></div>
          <ShowContainer {...txt.Contact}/>
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
document.addEventListener("resize", (event)=>{
  console.log(event)
})


export default App;
