import React, { Component } from "react";
import "./ThatsMe.scss";

class ThatsMe extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { ID, history,logo,thatsMe,navigationSections} = this.props;
    const introLines = thatsMe.intro.split('.').map(i => <p>{i}.</p>);
    return (
    
      <div className="thatsMe" id={ID}>
          <h2>{navigationSections[0]}</h2>
        
        <div className="row">
          <div className="Column-1-3 column">
            <div id="logo" className="note">
             <img src={logo}/>
            </div>
            <div id="vision" className="besideColumn">
             <p>{thatsMe.vision}</p>
            </div>
          </div>

          <div className="Column-2-3 column">
            <div className="content">
              <p className="intro">
                {introLines}
              </p>
              <p className="main">
                {thatsMe.main}
              </p>
              <p className="poente">
                {thatsMe.poente}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThatsMe;
