
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import Header from './components/Header/Header';
import React, { useState } from 'react';
import routes12 from './Routs';
import {useLocation,Navigate, Route, Routes} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../src/components/Logincomp/Login';
import Forgot from "../src/components/Login/Forgot"

import Signup2 from "./components/Login/Signup2"





const getRoutes = (route) => {
  return route.map((prop, key) => {
    
      return (
        <Route path={prop.path} element={prop.component} key={key} exact />
      );
  
  });
};
 const getCurrentRouteName = (currentPath) => {
  const matchingRoute = routes12.find((route) => currentPath.startsWith(route.path));
  return matchingRoute ? matchingRoute.name : "Home"; // Default name if no match is found
};



function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();
  const [isLoggedIn2, setIsLoggedIn] = useState(true);
   console.log(isLoggedIn);
  return (
    <div className="App">
      
    
      
    {isLoggedIn ? (
     <>
     <Sidebar/>
    <Header name ={getCurrentRouteName(window.location.pathname)}></Header>
   <Routes>
    {getRoutes(routes12)}
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
   </Routes>
     </>

    ):(
      <>
      <Routes>
    <Route path="/login" element=<Login></Login> exact />
    <Route path="/register" element=<Signup2/> exact />
    <Route path="/forgot" element=<Forgot/> exact />
    <Route path="*" element={<Navigate to="/login" replace />} />
   </Routes>
      </>
    )}
    


    </div>
  );
}

export default App;
