import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


export default class ThisDemo extends Component {
  
  
    test = (firstName, lastName) => {
        this.firstName = firstName;
        this.lastName = lastName;

        return this.firstName + " " + this.lastName;
        }

    sayHello = param => {
       alert(param);
    }


    render() {

        const person = {
            firstName: "Charlie",
            lastName : "Zha",
            id       : 5566,
            fullName : function() {
              return this.firstName + " " + this.lastName;
            }
          }

        return (
            <div>
                <Button 
                   onClick={() => this.sayHello('Charlie Zha')}
                   variant="contained" 
                   color="primary"
                >
                    Click me
                </Button>    
                {person.fullName()}
                <br></br>
                {this.test('Charlie','Zha')}
            </div>
        );
    }
}

