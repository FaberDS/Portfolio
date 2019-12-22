import React, { Component } from 'react';
import macaron from '../../images/pngs/macaron.png';
import {icons} from '../../const/content';
import parse from 'html-react-parser';
import './ComponentDetailsGastro.scss'

class ComponentDetailsGastro extends Component {
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
      
    const { logo, linkTo, title, subtext, fromDate, toDate, restaurantRating, hotelRating, Img,position,historyDetails} = this.props;
    const renderStars = (rating) =>{
        let result =[];
        for(let j=0;j<rating;j++){
            result.push(<i className={icons.star}></i>)
        }
        return result;
    }
    const stars = renderStars(hotelRating);
    const renderMac = (rating) =>{
        let result= [];
        for(let j=0; j<rating;j++){
            result.push(<img src={macaron} alt="Michelin Macaron"></img>)
        }
        return result;
    }
    let macaraons =null;
    if(typeof restaurantRating === 'number'){
        macaraons = renderMac(restaurantRating);
    }else{
        macaraons = restaurantRating;
    }
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
                  <p className="detailLabel">{historyDetails.position}:</p>
                  <p>{position}</p>
                  <p className="detailLabel">{ historyDetails.restaurantRating}:</p>
                  <p className="restaurantRating">{macaraons}</p>
                  <p className="detailLabel">{ historyDetails.hotelRating}:</p>
                  <p className="hotelRating">{stars}</p>
              </div>
              <p className=" detailSubtext">{subtext}</p>
          </div>
        </div>
      </div>
    );
  }


}

export default ComponentDetailsGastro
