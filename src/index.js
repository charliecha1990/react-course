import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';



const time = () => { {/* <div> */}
    ReactDOM.render(
      <App />,
      document.getElementById("root")   
    );
  

}

setInterval(time,1000);


