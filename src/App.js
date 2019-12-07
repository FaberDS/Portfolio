import React from 'react';
// import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import txt from './const/content';
const sections = txt.navigationSections;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation logoTitle={txt.logoTitle}
                    sections={sections}/>
        <Header text={txt}/>
       
      </header>
    </div>
  );
}

export default App;
