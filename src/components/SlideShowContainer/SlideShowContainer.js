import React from "react";
import "./SlideShowContainer.scss";
import SlideShowElement from "../SlideShowElement/SlideShowElement";
import Button from "../Button/Button";
import txt from "../../const/content";
import ProjectDetail from "../ProjectDetail/ProjectDetail";

var hasOwn = {}.hasOwnProperty;

class SlideShowContainer extends React.Component {
  constructor(props) {
    super();
  
    this.state = { 
      activeIndex: 0,
      showDetails: false
    };
    this.txt= props.txt;
  }
  jumpToSlide = event=>{
    this.setState({ activeIndex: event.target.id });
    
  };
  showDetails = (event)=>{
    this.setState(prevState=>({
      showDetails : !prevState.showDetails
    }))
  }
  render() {
    const dots = this.props.projects.map((project, index) => {
      const isActive = index== this.state.activeIndex;
      return (
      <li
        className={isActive? "active" : ""}
        key={index}
      >
        <span onClick={this.jumpToSlide} id={index}>{isActive ? "\u25C9": "\u25CE"} </span>
      </li>
    )},this);
    const slides = this.props.projects.map((project, index) => {
      const isActive = index== this.state.activeIndex;
      
      return (
        <div
          className={isActive ? "active " : ""}
          key={index}
          index={index}
        >
          <div className="slideImage" style={{backgroundImage: 'url('+project.imageUrl+')'}}>
          <div className="btnSlide slideLeftArrowContainer">
            <i class="fas fa-angle-left"></i>
          </div>
          <div className="btnSlide slideRightArrowContainer">
            <i class="fas fa-angle-right"></i>
          </div>
          </div>
          <div className="slideInformation">
            <div className="slideShowDots">
              {dots}
            </div>
            <div className="projectTitle">
              <h3>{project.caption ? <figcaption>{project.caption}</figcaption> : null}</h3>
            </div>
            {this.state.showDetails 
              ? <Button _content={this.txt.btnTxt.showLess} _icon={this.txt.icons.roundMinus} _onClick={this.showDetails} _class="showDetailsBtn" />
              : <Button _content={this.txt.btnTxt.showMore} _icon={this.txt.icons.roundPlus} _onClick={this.showDetails} _class="showDetailsBtn" />
            }
            
            {this.state.showDetails 
              ? <ProjectDetail details={project.details} labels={this.txt.showCase.projectDetailsInfoLabels} />
              : ""}
          </div>
          
        </div>
      );
    }, this);
   
    // console.log("slides");
    // console.log(slides);
    // console.log("dots")
    // console.log(dots)
    return (
      <div className="SlideShowContainer" id={this.txt.showCase.sectionTitle}>
        <h2>{this.txt.showCase.sectionTitle}</h2>

        <div className="slideShowBox">
          <div className="slideShowSlides">{slides}</div>
          {/* <div className="slideShowDots">{dots}</div> */}
        </div>
      </div>
    );
  }
}
export default SlideShowContainer;
