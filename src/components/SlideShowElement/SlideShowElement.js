import React from 'react'
import './SlideShowElement.scss';
export default function SlideShowElement(props) {
    return (
        <div className="SlideShowElement">
            {props.content}
            <div class="mySlides fade">
                <div className="numbertext">1 / 3</div>
                <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" />
                <div className="text">Caption Text</div>
            </div>
        </div>
    )
}
