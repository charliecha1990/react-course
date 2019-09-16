import React, { Component } from 'react';

const withAuthentication = Component => {
    class NewComponent extends React.PureComponent {
        constructor (props) {
            super(props);
            this.state = {
                isAuthenticated: false
            }
        }

        componentDidMount () {
            setTimeout(()=>{
                this.setState(prevState => ({
                    isAuthenticated: !prevState.isAuthenticated
                }))
            },5000)
        }

        render () {
            return (
                <Component isAuthenticated={this.state.isAuthenticated} />
            )
        }
    }

    return  NewComponent;

}

class Hoc extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: 'Charlie',
            author: 'Jane',
            date: '2019-08'
        }
    }

    render() {
        return (
           <div>
               <h1>
                   模拟高阶组件，异步加载（5秒后出现）
               </h1>
               {this.props.isAuthenticated && <div>
                    <h3>{this.state.date}</h3>
                    <h3>{this.state.name}</h3>
                    <h3>{this.state.author}</h3>
                </div>}
           </div>
        );
    }
}

export default withAuthentication(Hoc); //链式调用