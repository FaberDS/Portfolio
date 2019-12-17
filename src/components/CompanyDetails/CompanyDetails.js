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
    const { logo, linkTo, title, subtext, fromDate, toDate } = this.props;
    return (
      <div className="companyDetails" onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
        <a href={linkTo}>
          <img src={logo}></img>
        </a>
        
        <div className={ this.state.displayText ? "detailsText hide" : "detailsText"} >
          <a href={linkTo}><h3 className=" detailTitle">{title}</h3></a>
          <span className="">{fromDate}</span>
          <span className="">{toDate}</span>
          <div className=" detailSubtextContainer">
            <span className=" detalSubtext">{subtext}</span>
          </div>
        </div>
      </div>
    );
  }


}

export default CompanyDetails;
