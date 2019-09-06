import React from 'react'

const Example = props => {
  

    // props.accountName = 'juhua';

// {
//     let me = 'me';
//     const me2 = 'me';
//     var me3 = 'me' // var is global scope

// }

    const flower1 = 'Yinghua';
    const flower2 = 'Juhua';


// for (let i =0 ; i<=3 ; i++) {
//     console.log(i)
// }  // use let as variable in a loop
  

    const a = 'money';
    // props.data = 'dog'; 
    // props 由父级组件传来值，儿子组件中无法更改

    return (

        <div>
            {/* <h3>data is:{props.data}</h3>
            <h3>{a}</h3> */}
            {props.isTrue && <h3>{flower1}</h3>} {/* JSX expressions  */}
            {!props.isTrue && <h3>{flower2}</h3>}
            <button onClick={props.onEditName}>Edit the accountName</button>
            {/* <h3>{me3}</h3> */}

        </div>
    )
}

class Frannie extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            accountName: 'Yinghua',
            accountpsw: 'yh3112',
            accountNumber: 3112,
            array: [1,2,3,4],
            isTrue: false
        } 
    }
    

    handleEditName = () => {
        this.setState((prevState, prevProps) => ({
           isTrue: !prevState.isTrue,
        }))
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
        return `There is an ${a} and a ${b} and a ${c}!!!`; // ESC
    }

    render(){


        console.log(this.state.isTrue)
    return (
        <div>
            <Example 
               data='beautiful'
               accountName={this.state.accountName}
               onEditName={this.handleEditName}
               isTrue={this.state.isTrue}
            />
            {/* <h3>
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
            </div> */}
        </div>
    )
    }
}
export default Frannie 