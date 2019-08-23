import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';


export default class  extends PureComponent {



    count = array => {
        array.forEach(e => {
            setTimeout(() => {
                console.log(e*2)
            }, 5000);
        })
    }

    render() {

        console.log('1');

        setTimeout(function() {
          console.log('setTimeout');
        }, 0);

        Promise.resolve().then(function() {
          console.log('promise1');
        }).then(function() {
          console.log('promise2');
        });
        
        console.log('2');

        return (
            <Button 
                variant="contained" 
                color="primary" 
                onClick={()=> this.count([1,2,3,4])}>
                Event Loop
            </Button>
        );
    }
}

