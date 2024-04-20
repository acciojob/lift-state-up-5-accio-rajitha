
import React from "react";
import './../styles/App.css';
import ParentComponent from './parent';


const App = () => {
  return (
    <div>
      <ParentComponent />
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
