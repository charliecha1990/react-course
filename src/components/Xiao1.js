import React, { PureComponent } from 'react'

const Xiao1=(props) =>{

    const items={
        client:'Candice',
        product:'RRSP',
        duration:'1H',
        papers:'2IDs'
    };

  return (
    <div>
        <h1>{props.data}</h1>  
        <h1>{items.product}</h1> 
        <h1>{items.duration}</h1>
        <h1>{items.papers}</h1>
        <h1>{props.data}</h1>
    </div>
   )
    
} 

export default Xiao1;