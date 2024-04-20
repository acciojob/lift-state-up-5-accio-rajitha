// parent.js
import React, { useState } from 'react';
import LoginForm from './child';

const ParentComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>

      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default ParentComponent;
