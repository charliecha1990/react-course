import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Contact from './Router/Contact'
import Home from './Router/Home'
import About from './Router/About'
import LogIn1 from './LogIn1'


// function About(props){
//   return(
//     <div>
//       <h1>About us</h1>
//       <h2>Hi, my name is Fido.</h2>
//       <h2>Let me tell you a story.</h2>
//    </div>
//   )
// }

// function Contact(props){
//   return(
//     <div>
//       <h1>Contact us: wwww.123.com
//                       514-333-2233
//       </h1>
     
//    </div>
//   )
// }

// function Home (props){
//   return(
//     <div>
//       <h1>Home sweet home!</h1>
//    </div>
//   )
// }




class RouterXiao extends React.PureComponent {
  constructor(props) {
    super(props); 
 }

 event (){
    return <h1>This is a anonymous function </h1>
 }

 render() { 

  return (  
    
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={LogIn1} />
          <Route path="/home" component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
      </div>
    </Router>
   );
 }
}

 
export default RouterXiao