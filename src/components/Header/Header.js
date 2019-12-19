import React, { Component } from 'react';
import './Header.scss';

class Header extends Component{
    render(){
        const {text} = this.props;
        const{headerTitle, subTitle, heroBtn, heroBtnLink} = text;
        return(
            // <header className="header" style={heroStyle}>
            <header className="header" >
                <h1 className="sectionTitle">{headerTitle}</h1>
                <h2 className="sectionTitle">{subTitle}</h2>
                
            </header>
        )
    }
}

export default Header;