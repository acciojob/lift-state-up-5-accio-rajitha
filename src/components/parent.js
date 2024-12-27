// parent.js
import React, { useState } from "react";
import LoginForm from "./child";  // Importing the LoginForm component

const ParentComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);  // Set login state to true when the user logs in
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
        <h1>Parent Component</h1>
        <p>You are logged in!</p>  
      </div> 
      ) : (
        <LoginForm onLogin={handleLogin} />  
      )}
    </div>
  );
};

export default ParentComponent;
