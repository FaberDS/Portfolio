import React, { Component } from 'react';
import './Header.scss';
// const background ="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80";
// // const background="../../../images/heroImage.jpg";
// const heroStyle ={
//     "backgroundImage": `url( ${background})`,
//     "backgroundSize": "cover"
// }
class Header extends Component{
    render(){
        const {text} = this.props;
        const{headerTitle, subTitle, heroBtn, heroBtnLink} = text;
        return(
            // <header className="header" style={heroStyle}>
            <header className="header" >
                <h1>{headerTitle}</h1>
                <h2>{subTitle}</h2>
                
            </header>
        )
    }
}

export default Header;