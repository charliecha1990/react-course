import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Router/Home'
import About from './Router/About'
import User from './Router/User'
import Blog from './Router/Blog'
import SignIn from './SignIn'


// function Home() {
//     return <h2>Home</h2>;
//   }
  
//   function About() {
//     return <h2>About</h2>;
//   }
  
//   function User() {
//     return <h2>Users</h2>;
//   }

// function Home () {  // ES 5 declare a function called Home
//     return <h3>Home is here</h3>
// }

// const Home = () => {  // ES 6 declare a function
//     return <h3>This is an arrow function</h3>
// }


class RouterExample extends React.PureComponent {
    constructor(props) {
        super(props);
        // this.state = {  }
    }



    event () {
        return <h3>This is an anonymous function</h3>
    }
    
    render() { 

        return (  
            
            <Router>
                <div>
                    {/* UI routing   */}

                    {/* logical routing   */}
                    <Route path="/" exact component={SignIn} />
                    <Route path="/about/" component={About} />
                    <Route path="/user/" component={User} />
                    <Route path="/blog/" component={Blog} />
                    <Route path="/Home/" component={Home} />
                </div>
            </Router>
        );
    }
}
 
export default RouterExample;