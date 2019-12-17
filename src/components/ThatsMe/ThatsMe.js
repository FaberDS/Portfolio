import React, { Component } from "react";
import "./ThatsMe.scss";
import CompanyDetail from '../CompanyDetails/CompanyDetails';

class ThatsMe extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { ID, history } = this.props;
    console.log(history)
    return (
    
      <div className="thatsMe" id={ID}>
        <div className="row">
          <div className="Column-1-3">
            <div id="vision" className="note">
              <p>My vision: </p>
              loremMollit cupidatat eiusmod aliqua ad velit laboris eu laboris
              irure. Adipisicing enim sunt anim esse non do dolore. Eu aliquip
            </div>
            <div className="besideColumn">
              nulla incididunt ut do ea. Ullamco consequat eiusmod aute
              cupidatat
            </div>
          </div>

          <div className="Column-2-3">
            <div className="content">
              Exercitation adipisicing ad excepteur qui. Est voluptate velit
              reprehenderit pariatur do dolor enim in dolore occaecat. Deserunt
              commodo ullamco minim aute non et sit sit fugiat ullamco nostrud.
              Eu mollit velit ut dolore incididunt quis do occaecat nisi qui
              amet nisi ex laboris. Sunt ullamco ad velit quis magna duis
              incididunt eiusmod officia eu. Pariatur laborum exercitation nulla
              fugiat aliquip proident aute ipsum dolor et magna. Exercitation
              aliquip id ex eiusmod quis tempor voluptate et irure dolor. Id non
              ullamco esse irure tempor amet. Irure ut nulla qui reprehenderit
              enim. Ipsum esse ex laboris minim mollit. Nostrud officia ut
              veniam proident veniam voluptate adipisicing dolor ea minim
              excepteur nostrud. Id et culpa mollit duis minim eiusmod dolore.
              Minim id labore excepteur pariatur eu nulla elit exercitation
              commodo occaecat commodo. Consequat tempor excepteur incididunt do
              esse dolore commodo occaecat do incididunt nostrud eu nulla
              laborum. Amet esse aute commodo in anim exercitation sunt
              consectetur. Cillum laboris duis mollit deserunt magna deserunt
              sit. Tempor minim excepteur id dolor consequat amet. Amet deserunt
              aliqua ex ut sunt ex aliqua irure. Nisi deserunt et dolore commodo
              velit minim cupidatat ea quis eiusmod duis ea adipisicing
              incididunt. Eiusmod adipisicing laboris eiusmod adipisicing dolore
         
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThatsMe;
