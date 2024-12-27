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
        <h1>Parent Component</h1>  
      ) : (
        <LoginForm onLogin={handleLogin} />  
      )}
    </div>
  );
};

export default ParentComponent;
