import React, { Component } from 'react'

export default class Jsx extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: 'Charmie',
            gender:'male',
            age:29,
            items: [1,2,3,4]
        }
        
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
                {shouldDisplay && <Product />}   
                {data}       
            </div>
        )
    }
}
