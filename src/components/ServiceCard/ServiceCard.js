import React from 'react'
import './ServiceCard.scss';
const ServiceCard = (props) => {
    const {icon, serviceTitle, serviceSubtitle} = props
    return (
        <div className="serviceCard">
            <div className="cardIcon"><i className={icon}></i></div>
            <div className="cardContent">
                <p>{serviceTitle}</p>
                <span>{serviceSubtitle}</span>
            </div>
        </div>
    )
}

export default ServiceCard;
