import React, { Component } from "react";
import "./CompanyDetails.scss";


class CompanyDetails extends Component {
    constructor() {
        super();
    
        this.state = { displayText: true };
      } 
      
    hoverOn = (event)=>{
        this.setState((prev)=> ({displayText: !prev.displayText}))
    }
    hoverOff = (event)=>{
        this.setState((prev)=> ({displayText: !prev.displayText}))
    }
  render() {
    const { logo, linkTo, title, subtext, fromDate, toDate, isWork, thematicArea, Img,position,historyDetails} = this.props;
    return (
      <div className="companyDetails" onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
        <a href={linkTo}>
          <img src={logo}></img>
        </a>
        
        <div className={ this.state.displayText ? "detailsContainer hide" : "detailsContainer"} >
          <div className="companyImgContainer">
           <a href={linkTo}><img src={Img} alt={title + " Profile Image"}></img></a>
          </div>
          <div className="detailsTextContainer">
            <div className="detailsTextHeadline">
              <a href={linkTo}><h3 className=" detailTitle">{title}</h3></a>
              <span className="timePeriode">
                <i className="fas fa-calendar-alt"></i>
                <span className="">{fromDate}</span>
                <span className="text-seperator">-</span>
                <span className="">{toDate}</span>
              </span>
              
            </div>
           
              <div className=" detailSubtextContainer">
                  <p className="detailLabel">{ isWork ?  historyDetails.position : historyDetails.title}:</p>
                  <p>{position}</p>
                  <p className="detailLabel">{ historyDetails.thematicArea}:</p>
                  <p>{thematicArea}</p>
              </div>
              <p className=" detailSubtext">{subtext}</p>
          </div>
        </div>
      </div>
    );
  }


}

export default CompanyDetails;
