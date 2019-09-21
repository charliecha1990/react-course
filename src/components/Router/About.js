import React from 'react'

export default function About(props) {


    console.log(props)
    return (
        <div>
            <h1>About</h1>
            <button onClick={()=> props.history.push('/')}>Press me to go back home</button>
            <button onClick={()=> props.history.goBack()}>Press me to go back</button>
            <button onClick={()=> props.history.goForward()}>Press me to go forward</button>
        </div>
    )
}
