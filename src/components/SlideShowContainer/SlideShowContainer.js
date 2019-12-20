import React from "react";
import "./SlideShowContainer.scss";
import SlideShowElement from "../SlideShowElement/SlideShowElement";

var hasOwn = {}.hasOwnProperty;

function classNames() {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!classNames");
  console.log(arguments);
  var classes = "";

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!arg) continue;

    var argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classes += " " + arg;
    } else if (Array.isArray(arg)) {
      classes += " " + classNames.apply(null, arg);
    } else if (argType === "object") {
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes += " " + key;
        }
      }
    }
  }

  return classes.substr(1);
}

class SlideShowContainer extends React.Component {
  constructor() {
    super();
    this.state = { activeIndex: 0 };
  }
  jumpToSlide(index) {
    this.setState({ activeIndex: index });
  }
  render() {
      console.log("Slide")
      console.log(this.props)
    return (<div className="slideshow">
        
        <ul className="slideshow-slides">
          {
            this.props.slides.map(
                (slide, index) => (
                    <li className={ classNames({ active: index == this.state.activeIndex }) }>
                        <figure>
                        <img src={ slide.imageUrl } />
                        { slide.caption ? <figcaption>{ slide.caption }</figcaption> : null }
                        </figure>
                    </li>
            ))
          }
        </ul>
        <ul className="slideshow-dots">
          {
            this.props.slides.map((slide, index) => (
              <li className={ (index == this.state.activeIndex) ? 'active': '' }>
                <a onClick={ (event)=> this.jumpToSlide(index) }>{ index + 1 }</a>
              </li>
            ))
          }
        </ul>

    </div>
    );
  }
}
export default SlideShowContainer;
