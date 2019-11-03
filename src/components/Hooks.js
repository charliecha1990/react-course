import React, { useState, useEffect } from 'react';

export default function Hooks() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


{/* 

1.  这就是为什么 Hook 需要在我们组件的最顶层调用。如果我们想要有条件地执行一个 effect，
    可以将判断放到 Hook 的内部：

useEffect(function persistForm() {
    // 👍 将条件判断放置在 effect 中
    if (name !== '') {
      localStorage.setItem('formData', name);
    }
  });

提示

如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 
componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。

------------------------------------------------------------------------------------------

2. Class组件生命周期的调用

   componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentDidUpdate(prevProps) {
    // 取消订阅之前的 friend.id
    ChatAPI.unsubscribeFromFriendStatus(
      prevProps.friend.id,
      this.handleStatusChange
    );
    // 订阅新的 friend.id
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  ******忘记正确地处理 componentDidUpdate 是 React 应用中常见的 bug 来源。*****


3. useEffect方法中的生命周期

useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [props.friend.id]); // 仅在 props.friend.id 发生变化时，重新订阅

相当于 class、组件中
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    document.title = `You clicked ${this.state.count} times`;
  }
}
------------------------------------------------------------------------------------------



*/}