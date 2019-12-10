import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import ServiceSection from './components/ServiceSection/ServiceSection';
import Header from './components/Header/Header';
import txt from './const/content';
import base from './basicFunctionality/Actions';
const sections = txt.navigationSections;
class App extends Component{
  render(){
    return (
      <div className="app">
        <header className="app-header" id="app-header">
          <Navigation logoTitle={txt.logoTitle}
                      sections={sections}/>
          <Header text={txt}/>
        </header>
        <ServiceSection {...txt}/>
        <Footer />
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
