import React from 'react'

class Frannie extends React.Component{
    constructor(props){
        super(props);

        this.state = {
        accountName: 'YINGHUA',
        accountpsw: 'yh3112',
        accountNumber: 3112,
        array: [1,2,3,4]
        } 
    }
    

    componentDidMount () {
        setTimeout(()=>{
            this.setState({
                accountpsw: 'cccc'
            })
        },3000)   
    }


    testA = (a) => {
       
            return `This is a test Function ${a}`;
       
    }

    testABC = (a,b,c) => {
        return `There is an ${a} and a ${b} and a ${c}!!!`;
    }

    render(){
    return(
       <div>
           <h3>
               {this.testA('!!!!!')}
           </h3>
          <div>
            <p>
                {this.testABC('A','B','C')} 
            </p>
         </div> 
         <div>
             {this.state.accountName}
             <div>
             {this.state.accountpsw}
             <br></br>
             {this.props.data}
             </div>
         </div>
       </div>
    )
    }
    
   

}
export default Frannie 