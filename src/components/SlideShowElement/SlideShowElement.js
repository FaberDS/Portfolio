import React from 'react'
import './SlideShowElement.scss';
export default function SlideShowElement(props) {
    console.log("SlideElement");
    console.log(props);
    return (

        <div className="SlideShowElement">
            <div class="mySlides fade">
                <div className="numbertext">1 / 3</div>
                <img src={props.imageUrl} />
                <div className="text">{props.caption}</div>
            </div>
        </div>
    )
}
