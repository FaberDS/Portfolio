import React,{Component} from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import ServiceSection from './components/ServiceSection/ServiceSection';
import Header from './components/Header/Header';
import Knowledge from './components/Knowledge/Knowledge';
import txt from './const/content';
import base from './basicFunctionality/Actions';
import ThatsMe from './components/ThatsMe/ThatsMe';
const sections = txt.navigationSections;
class App extends Component{
  render(){
    return (
      <div className="app">
        <header className="app-header" id="app-header">
          <Navigation {...txt}
                      sections={sections}/>
          <Header text={txt}/>
        </header>
        <ThatsMe ID={txt.navigationSections[0]}/>
        <ServiceSection {...txt} ID={txt.navigationSections[1]}/>
        <Knowledge {...txt} ID={txt.navigationSections[2]} />
        <Footer {...txt}/>
        <div id="backTopBtn" className="btn"><i className="fas fa-chevron-up"></i></div>
      </div>
    );
  }
  componentDidMount(){
    document.getElementById('backTopBtn').addEventListener('click', ()=> base.scrollToTop())

  }
}
window.addEventListener('scroll', ()=>{
  base.recognizeScrolling(document.getElementById('backTopBtn'))
})

export default App;
