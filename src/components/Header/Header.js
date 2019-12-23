import React, { Component } from "react";
import "./Header.scss";
import txt from "../../const/content";
const Typer = ({ speed = 200, children }) => {
  const [idx, setidx] = React.useState(0);
  React.useEffect(() => {
    const timer = window.setInterval(() => setidx(v => v + 1), speed);
    return () => window.clearInterval(timer);
  });

  return <div>{children.substr(0, idx)}</div>;
};

class Header extends Component {
  constructor(props) {
    super(props);
    let timesToReplace = txt.headLines.alteringHeadlines.length;
    var headersNotReplaced = new Array(timesToReplace);
    for (var i = 0; i < headersNotReplaced.length; ++i) {
      headersNotReplaced[i] = true;
    }

    this.state = {
      replacedFirst: false,
      replacedSecond: false,
      alteringHeadlines: txt.headLines.alteringHeadlines,
      textIdx: 0
    };
  }

  render() {
      const text = txt.headLines.alteringHeadlines[this.state.textIdx % txt.headLines.alteringHeadlines.length];
    const headerText = (
      <Typer speed={100}>{text}</Typer>
    );
    return (
      <header className="header">
        <h1 className="sectionTitle">{headerText}</h1>
      </header>
    );
  }
  componentDidMount() {
      if(this.state.replacedFirst ===false || this.state.replacedSecond ===false ){
        this.timeout= setInterval(()=>{
            let currentIdx =this.state.textIdx;
            this.setState({textIdx: currentIdx+1})
            if(this.state.textIdx === txt.headLines.alteringHeadlines.length-1){
                clearInterval(this.timeout)
            }
        },6000);
      }
   
    if(this.state.textIdx===0){
        this.setState({replacedFirst:true})
    }else if(this.state.textIdx===1){
        this.setState({replacedSecond:true})
    }
  }
  componentDidUnMount(){
      clearInterval(this.timeout)
  }
}

export default Header;
