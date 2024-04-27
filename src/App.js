import './App.css';
import React from 'react';
import Header from "./components/Header"
import Stats from './components/Stats';
import Sidebar from './components/Sidebar';
import Payment from './components/Payment';
import ToggleProvider from './components/ToggleProvider';

function App() {
  
  return (
    < >
      <Sidebar/>
    <div className="App">
      <Header/>
      <div className="toggleapp">
          <ToggleProvider  />
      </div>
      <div className="stats-paymentapp">
          <Stats />
          <Payment/>
      </div>
    </div>
    </>
  );
}

export default App;
