import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Signup2 from './Signup2'
import Form from './Form'
import Forgot from './Forgot'
import Signup from './Signup2'
import Mylogin from './Mylogin'


export const Mycomp = () => {
    return (
        <div>
           
            <BrowserRouter >
               <Navbar isLoggedIn= {true} role="manager" /> 
               
               <Routes>
               <Route path="/" element={<Form />}></Route>
               <Route path="signup" element={<Signup2 />}></Route>
               <Route path="forgot" element={<Forgot />}></Route>
               <Route path="signup2" element={<Signup />}></Route>
               <Route path="mylogin" element={<Mylogin />}></Route>
               
                {/* <Route path="mylogin" element={<Mylogin />}></Route>
               <Route path="logout" element={<Logout />}></Route>
               <Route path="newtasks" element={<Newtasks  />}></Route>
               <Route path="about" element={<Home />}></Route>
               <Route path="createtask" element={<Createtask />}></Route>
               <Route path="previoustasks" element={<Previoustasks />}></Route>
               <Route path="createlogin" element={<Createlogin />}></Route>
               <Route path="mytasks" element={<Mytasks />}></Route> */}
               </Routes>          
            </BrowserRouter>
        </div>
    )
}