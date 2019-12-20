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
    const {sections, contactMailAddress,logoTitle ,contactMailSubject} = this.props;
 
    const navLinks = sections.map((section, i) => <a onClick={this.closeMobileNavbar} href={'#'+section}>{section}</a>)
    return (
      <nav id="topNavBar">
        <h2 className="logoTitle"><a href="#landingPage">{logoTitle}</a></h2>
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
