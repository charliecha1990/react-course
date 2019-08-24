import React, { PureComponent } from 'react'

const Xiao1 = props =>{

    // const items={
    //     client:'Candice',
    //     product:'RRSP',
    //     duration:'1H',
    //     papers:'2IDs'
    // };

  return (
    <div>
       <h1>{props.xiaoStatus.name}</h1>
       <h1>{props.xiaoStatus.date}</h1>
       <h1>{props.xiaoStatus.number}</h1>
    </div>
   )
    
} 

export default Xiao1;