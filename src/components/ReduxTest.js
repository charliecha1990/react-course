import React, { Component } from 'react';
import { connect } from 'react-redux';

// const matStateToProps = state => ({number: state });
// const mapDispatchToProps = dispatch => ({
//     add: () => dispatch({type: 'add'}),
//     minus: () => dispatch({type: 'minus'})
// })

@connect(
    state => ({ number: state}),
    { 
        add: () => ({type: 'add'}),
        minus: () => ({type: 'minus'})
    }
)
class ReduxTest extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h3>{this.props.number}</h3>
                <div>
                    <button onClick={() => this.props.add()}>+</button>
                    <button onClick={() => this.props.minus()}>-</button>
                </div>
            </div>
        );
    }
}

// export default connect(matStateToProps,mapDispatchToProps)(ReduxTest)

export default ReduxTest

// ()=>store.dispatch({type: 'add'})