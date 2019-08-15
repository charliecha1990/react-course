import React, { PureComponent } from 'react'

export default class SetState extends PureComponent {

    constructor(props) {
        super(props); 
        this.state = {
           number: 1
        }

        setTimeout(() => {
            this.setState((prevState, preProps) => ({
                number: prevState.number+1
             }), () => {
                 console.log('async setState fcuntion has been called',this.state.number)
             });  
        }, 5000);  

    }

    render() {
        return (
            <div>
                {this.state.number}
            </div>
        )
    }
}
