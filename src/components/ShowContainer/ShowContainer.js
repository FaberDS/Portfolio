import React from 'react'
import './ShowContainer.scss';
export default function ShowContainer(props) {
    const{sectionTitle} = props;
    return (
        <div className="showContainer" id={sectionTitle}>
            <h2 className="sectionTitle" >{sectionTitle}</h2>
        </div>
    )
}
