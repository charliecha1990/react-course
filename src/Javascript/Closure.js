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


{/* 
在一个函数中定义另一个会使闭包变得更加复杂。例如：

var iBaseNum = 10;

function addNum(iNum1, iNum2) {
  function doAdd() {
    return iNum1 + iNum2 + iBaseNum;
  }
  return doAdd();
}
这里，函数 addNum() 包括函数 doAdd() （闭包）。内部函数是一个闭包，因为它将获取外部函数的参数 iNum1 和 iNum2 以及全局变量 iBaseNum 的值。 addNum() 的最后一步调用了 doAdd()，把两个参数和全局变量相加，并返回它们的和。

这里要掌握的重要概念是，doAdd() 函数根本不接受参数，它使用的值是从执行环境中获取的。

可以看到，闭包是 ECMAScript 中非常强大多用的一部分，可用于执行复杂的计算。

提示：就像使用任何高级函数一样，使用闭包要小心，因为它们可能会变得非常复杂。

*/}