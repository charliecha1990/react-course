import React, {PureComponent } from 'react'
import Xiao1 from './Xiao1';

class Xiao extends PureComponent {//有状态,PureComponent optimizes the performane
       
    constructor(props) {
        super(props); // get the props from parents
    }
    
    render(){
        // console.log(`props in Xiao is: ${this.props.status}`)

        const data = {
            number: 2,
            date: '2018-8',
            name: 'Xiao'
        }

        return(
            <div>
               <Xiao1 xiaoStatus={this.props.appStatus}/>
             </div>
        )
        
    }
}   

export default Xiao;