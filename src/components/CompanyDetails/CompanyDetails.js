import React, { Component } from "react";
import "./CompanyDetails.scss";


class CompanyDetails extends Component {
    constructor() {
        super();
    
        this.state = { displayText: true };
      } 
      
    hoverOn = (event)=>{
        console.log("hovered");
        this.setState((prev)=> ({displayText: !prev.displayText}))
        console.log(this.state);
    }
    hoverOff = (event)=>{
        console.log("hovered out");
        this.setState((prev)=> ({displayText: !prev.displayText}))
        console.log(this.state);
    }
  render() {
    const { logo, linkTo, title, subtext, fromDate, toDate, Img,position,historyDetails} = this.props;
    console.log("Test")
    console.log(position)
    console.log(historyDetails)
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
                <i class="fas fa-calendar-alt"></i>
                <span className="">{fromDate}</span>
                <span className="text-seperator">-</span>
                <span className="">{toDate}</span>
              </span>
              
            </div>
           
              <div className=" detailSubtextContainer">
                <span className="detailSubject">{historyDetails.position}:</span>
                <span>{position}</span>
                <p className=" detailSubtext">{subtext}</p>
              </div>
          </div>
        </div>
      </div>
    );
  }


}

export default CompanyDetails;
