import React, { PureComponent } from 'react'

export default class This extends PureComponent {

    // sayHello = () => {
    //     this.firstName = 'Charlie';
    //     this.lastName = 'Zha';
    //     console.log('say hello',this)
    //     console.log(this.firstName+this.lastName)
    // }

    saySomething = param => {
        // this.sayHello();
        console.log(`say something ${param}`,`this in inside saysomething function ${this}`)
    }


    sayHello = () => {
        console.log(`this in sayHello is ${this}`);
    }


    render() {

        console.log(`This in the render function ${this}`)
    
        return (
            <div>
                <h1>Hello world</h1>
                {/* {this.sayHello()} */}
                <button onClick={()=>{this.saySomething('Charlie ZHa'),console.log(this)}}>
                    Click me
                </button>
            </div>
        )
    }
}
