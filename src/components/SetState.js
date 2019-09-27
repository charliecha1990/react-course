import React, { PureComponent } from 'react'

export default class SetState extends PureComponent {

    constructor(props) {
        super(props); 
        this.state = {
           number: 1,
           date: '2019-8'
        }

        // this.state.number = 3; // this is highly restricted


        setTimeout(()=>{
            this.setState({
                number: 100
            })
        },3000);  // 3000ms = 3s

        // setInterval(()=>{},3000);

        
        setTimeout(()=>{
            this.setState({
                number: this.state.number+1
            })
        },4000);  // 3000ms = 3s


        setTimeout(() => {  // 异步函数
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
