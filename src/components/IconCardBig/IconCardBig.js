import React from 'react';
import './IconCardBig.scss';
function IconCardBig(props) {
    const {title, icon, link} = props;
    return (
        <div className="IconCardBig">
            <a href={link}>
                <div className="cardIcon"><i className={icon}></i></div>
                <div className="cardContent">
                    <p>{title}</p>
                    <span></span>
                </div>
            </a>
        </div>
    )
}

export default IconCardBig;
