import React, { Component } from 'react'

const SocietyContext = React.createContext();
       
const store = {
    name: 'Charlie'
}

  
// withSocietyContext = Comp => props =>      since Comp receives props, so we can write like this

const withSocietyContext = Comp => props => ( // if expression is one line, we do not include { }
    <SocietyContext.Provider value={store}> {/*here we pass what we want */}
        <SocietyContext.Consumer>
          {value => <Comp value={value} {...props}/>}   
        </SocietyContext.Consumer>
    </SocietyContext.Provider>
)


// const withContext = Comp => {
//     <SocietyContext.Provider value={store}>
//         <SocietyContext.Consumer>
//           {value => <Comp value={value} {...props}/>}   
//         </SocietyContext.Consumer>
//    </SocietyContext.Provider>
// }


export default class DemoContext extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Charlie',
            gender: 'male'
        }
    }

    render() {
        return (
            <Society />
        )
    }
}

class Society extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <Family />
        )
    }
}

class Family extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
           <Person age='15' />
        )
    }
}


@withSocietyContext
class Person extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <React.Fragment>
                <h3>{`this value comes from context', ${this.props.value.name}`}</h3>
                <h3>{`this value comes from props of child component', ${this.props.age}`}</h3>
            </React.Fragment>
        )
    }   
}

