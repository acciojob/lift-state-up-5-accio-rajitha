// parent.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';

const ParentComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default ParentComponent;
