import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from './components/page/Overview';
import SideNav from './components/sidenav/sidenav';
import TopNav from './components/topnav/topnav';
import Configuration from './components/configuration/Configuration';
import Datacollection from './components/datacollection/datacollection';
import Analytics from './components/analytics/analytics';
import Monitoring from './components/monitoring/Monitoring';
import Security from './components/security/security';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className='wrapper'>
          <SideNav />
          <main className='mainBlock'>
            <TopNav />
            <div className='main_content'>
              <Routes>
                <Route path="/" element={<Overview/>}></Route>
                 <Route path="/configuration" element={<Configuration/>}></Route>
                 <Route path="/datacollection" element={<Datacollection/>}></Route>
                 <Route path="/analytics" element={<Analytics/>}></Route>
                 <Route path="/monitoring" element={<Monitoring/>}></Route>
                 <Route path="/security" element={<Security/>}></Route>
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </React.Fragment>
  );
}
export default App;