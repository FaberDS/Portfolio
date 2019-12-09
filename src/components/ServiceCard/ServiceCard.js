import React from 'react'
import './ServiceCard.css';
const ServiceCard = (props) => {
    const {icon, serviceTitle, serviceSubtitle} = props
    return (
        <div className="serviceCard">
            <span><i className={icon}></i></span>
            <h4>{serviceTitle}</h4>
            <p>{serviceSubtitle}</p>
        </div>
    )
}

export default ServiceCard;
