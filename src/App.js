import React from 'react';
import Dashboard from './Components/dashboard/Dashboard';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ReadLater from './Components/ReadLater/ReadLater';


function App() {
  return (
    <Router>
     <Header/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/readLater" element={<ReadLater/>} />
        </Routes>
      <Footer/>
     </Router>
  );
}
export default App;
