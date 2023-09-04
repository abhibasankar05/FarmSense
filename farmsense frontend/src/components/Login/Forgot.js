
import React, { useState } from 'react';



const Forgot = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Reset password email sent to:', email);
    // You can handle the password reset logic here
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2 style={{color:'green',fontSize:'20px'}}>FORGOT PASSWORD</h2>
        <br/>
        <div className="input-group">
          <label>Enter your email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};
export default Forgot;
