import React, { Component } from 'react';
import Button from '@material-ui/core/Button';  // UI library for React, produced by Google

export default class MaterialUI extends Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }


    render() {
        const Test = () => ( // no props
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

/* resources

1.https://material-ui.com/zh/components/tables/

2.https://www.npmjs.com/package/material-table

3.https://www.creative-tim.com
*/