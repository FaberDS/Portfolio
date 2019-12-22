import React from 'react';
import './IconCard.scss';
function IconCard(props) {
    const {link, icon} = props;
    const id = props.id ? props.id : "";
    return (
        <div className="IconCard" id={id}>
            {link 
                ? <a href={link} target="_blank" rel="noopener noreferrer"><i className={icon}></i></a>
                :<i className={icon}></i>
            }
        </div>
    )
}

export default IconCard;
