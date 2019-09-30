import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import store from './store'
import { Provider } from 'react-redux';
import Society from './components/Society'

  // ReactDOM.render(
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  //  ,
  //   document.getElementById("root")   
  // );


  ReactDOM.render(
    <Society />
   ,
    document.getElementById("root")   
  );

// setInterval(time,1000);



