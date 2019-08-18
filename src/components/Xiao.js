
import React, { PureComponent } from 'react'

export default class Xiao extends PureComponent {

    constructor(props) {
        super(props); 
        this.state = {
           number: 1,
           date: '2019-8'
        }
    }

    render() {
        return (
            <div>
                {this.state.date}  {/*STATE FROM  SELF*/ }
                {this.props.test}  {/* PROPS FROM PARENTS*/ }
            </div>
        )
    }
}