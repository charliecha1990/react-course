import React, { Component } from 'react';
import Button from '@material-ui/core/Button';  // UI library for React, produced by Google

export default class MaterialUI extends Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }


    render() {
        const Test = () => (
            <Button 
                onClick={()=>{alert('Material-ui is cool')}}
                variant="contained" 
                color="primary">
                Hello World
            </Button>
          );

        return (
            <Test />
        )
    }
}
