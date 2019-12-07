import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component{
  render(){
    const {sections, logoTitle } = this.props;
    const navLinks = sections.map((section, i) => <li key={i}><a href={'#' + section}>{section}</a></li>)
    return (
      <nav>
        <h2 className="logo">{logoTitle}</h2>
        <ul>
          {navLinks}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
