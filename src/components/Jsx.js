import React, { Component } from 'react'

export default class Jsx extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: 'Charlie',
            gender:'male',
            age:29,
            items: [1,2,3,4]
        }


        this.setState({
            name: 'David'
        });
        
    }


    render() {
        const { shouldDisplay, data } = this.props;
        const { items } = this.state;

        const Product = () => {
            return  items.map(item => (   
                <h1 key={item}>
                    {item}
                </h1>
            ));
            /* 
                using map array function to iterate views  
                we may need to review the common JS array functions           
            */
        }

        return (
            <div>
                {/* conditional render using jsx */}
                {/* {shouldDisplay && <Product />}    */}
                {data}       
                {this.state.name}
            </div>
        )
    }
}
