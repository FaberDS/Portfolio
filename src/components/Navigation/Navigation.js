import React, { Component } from 'react';
import './Navigation.scss';
class Navigation extends Component{
  constructor(props){
    super(props);
    
  }
  closeMobileNavbar(event){
    document.getElementById('nav-check').checked=false;
  }
  render(){
    const {sections, contactMailAddress,logoTitle,logoTitleLong ,contactMailSubject} = this.props;
 
    const navLinks = sections.map((section, i=0) => <a onClick={this.closeMobileNavbar} kex={i++} href={'#'+section}>{section}</a>)
    return (
      <nav id="topNavBar">
        <div className="logoContainer">
          <h2 className="logoTitle"><a href="#landingPage">{logoTitle}</a></h2>
          <h2 className="logoTitleLong"><a href="#landingPage">{logoTitleLong}</a></h2>
          
        </div>
        <input type="checkbox" id="nav-check"/>

        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          {navLinks}

        </div>
      </nav>
    );
  }
}

export default Navigation;
