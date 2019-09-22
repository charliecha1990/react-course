import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Home(props) {


    // console.log('Props in Home component:', props)
    return (
        <div>
        <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about/">About</Link>
            </li>
            <li>
                <Link to="/user/">Users</Link>
            </li>
            <li>
                <Link to="/blog/">Blog</Link>
            </li>
        </ul>
        </nav>
            <h1>Home</h1>
        </div>
    )
}