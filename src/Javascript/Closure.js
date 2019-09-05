import React from 'react';

export default function Closure (props) {

    const add = function () {
        var value = 0;
        console.log(`initial value: ${value}`)

        return function printResult (x) {
            value++;
            console.log(`${x}value after addition: ${value}`)
            return `${x}value after addition: ${value}`;
        }
    }

    const foo = add(); 

            /* foo points to the object of add, 
              so value, printResult stay in the memory so local scope is accessible
              with global scope , 
              which should have been released
              in Gabage Collection after function has been executed
            */    

    console.log(foo)



    return (
        <div>
            <h3>{foo('第1次')}</h3>
            <h3>{foo('第2次')}</h3>
            <h3>{foo('第3次')}</h3>
            <h3>{foo('第4次')}</h3>
        </div>
    )

}