import React, { Component } from 'react'

class ImmediatelyInvokedFunctionExpression extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {

        var foo ='foo';

        ( function bob (){
            var foo = 'foo2'
            console.log(foo)
        })()     //   we call it IIFE  to not pollute functions
    
        console.log(foo)

        for (var i=1; i<=5; i++) {
            (function IIFE(){
                let j = i;
                console.log(j+i)
            })();        //  获得函数作用域，每次循环，初始化j，不污染全局

            // (function IIFE(){
            //     var j = i;
            //     console.log(j)
            // })();    create a function block within the loop  
            
            
            // setTimeout(function(){
            //     console.log('i：'+i)
            // },i*1000)
        }

        return (
            <div>
                
            </div>
        )
    }
}

export default ImmediatelyInvokedFunctionExpression
