import React from 'react';

const Context = React.createContext();

const store = {
    date: '2019',
    logError () {
        console.log('Errors')
    }
}

// const withProvider = Comp => props => (
//     <Context.Provider>
//         <Comp {...props} value={store}/>
//     </Context.Provider>
// )

const withConsumer = Comp => props => (
    <Context.Provider value={store}>
        <Context.Consumer>
          {value => <Comp value={value} {...props}/>}   
        </Context.Consumer>
    </Context.Provider>
)


// @Consumer
class Inner extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.value.date}
            </div>
        );
    }
}


@withConsumer
class Decorator extends React.Component {
    render() {
        return (
            <div>
               <Inner {...this.props}/>
            </div>
        );
    }
}

export default Decorator;

// npm install --save-dev babel-plugin-transform-decorators-legacy