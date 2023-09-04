import React from 'react'
import "../../css/Login.css"
import { useDispatch } from 'react-redux';
import { login } from "../../Reduser/AuthSlice";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../Services/OrgService/LoginService';


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = async (event) => {
      event.preventDefault(); 
    
      const formData = new FormData(event.target);
      const username = formData.get("username");
      const password = formData.get("password");
    
      console.log(username);
      handleLogin(username, password);
    };


      const handleLogin = async (username,password) => {
        try {
          const response = await loginUser(username, password);
          console.log("in login user")
          if (response.status === 401) {
            alert(" Sorry! You dont have any account registerd with this email Id, Please SingUp Before LogIn ")
          } else if(response.status===200) {
            const userId = response.data;
            

            const user = {
              id: userId,
              
  };
            console.log(user.id);
            dispatch(login(user));
            navigate("/dashboard");
            console.log('Login Successful');
          }
          else if(response.status=== 400) {
            alert("Password Incorrect")
          }else if(response.status===502) {
            alert("Some thing went Wrong")
          }
        } catch (error) {
          alert("Incorrect Email Or Password")
          console.error('Error logging in:', error);
        }
      };




  return (
    <div>

<div className="background">
      </div>
      <div className='formclass'>
      <form  onSubmit={onSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email" id="username" name= "username"  />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" name= "password" />

        <button className='btn1' type='submit'>Log In</button>
      </form>
      <div className="social">
          <div className="go" ><button className='btn2' onClick={() => navigate("/register")}><i className="fab fa-google"> Signup</i></button></div>
          <div className="fb"><button className='btn2' onClick={() => navigate("/forgot")}><i className="fab fa-facebook"> Forgot</i> </button></div>
        </div>

      </div>
    </div>



        
    
  )
}

export default Login