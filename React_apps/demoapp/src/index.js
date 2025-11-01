import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    
     <div className="container mt-3">
      <h2>this comes from index.js</h2>
      <p>The .rounded class adds rounded corners to an image:</p>
      <img
        src="cinqueterre.jpg"
        className="rounded"
        alt="Cinque Terre"
        width="304"
        height="236"
      />
    </div>
    
    

 </> 
);


