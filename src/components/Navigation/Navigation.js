import React, { Component } from 'react';
import './Navigation.scss';

class Navigation extends Component{
  render(){
    const {sections, contactMailAddress,logoTitle ,contactMailSubject} = this.props;
 
    const navLinks = sections.map((section, i) => <li key={i}><a href={section!=='Contact me' ? '#' + section : 'mailto:'+contactMailAddress + '?subject=' +contactMailSubject}>{section}</a></li>)
    return (
      <nav id="topNavBar">
        <h2 className="logo">{logoTitle}</h2>
        <ul>
          {navLinks}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
