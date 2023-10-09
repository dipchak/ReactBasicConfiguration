import { useEffect } from 'react';

//import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import axios from './config/axios';
import Toaster from './helper/Toaster';

import Layout from './components/layout/layout.js';

import HomePage from './pages/home/home';




function RouteWrapper(component) {
  return (
    
      <Layout>
       {component}
      </Layout>
  );
}



function App() {

  const checkapi = async () => {
    await axios.get('/').then(({ data }) => {
      Toaster("Toaster is running", "success")
      console.log(data)
    }).catch((error) => {
      Toaster(error.toString(), "error")
    })
  }

  useEffect(() => {
    checkapi()
  }, [])


  return (
    <div className="App"> 
        <Routes>
          <Route path="/" element={RouteWrapper(  <HomePage/>  )} /> 
        </Routes>
    </div>
  );
}

export default App;














