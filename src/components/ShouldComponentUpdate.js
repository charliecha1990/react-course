import React, { Component } from 'react';


class TestPureComponent extends React.PureComponent { // PureComponent has the power of shallow compare props
    render () {

        console.log('TestPureComponent has been rendered')
        return (
            <div>
                <h3>{this.props.date}</h3>
                <h3>{this.props.name}</h3>
                <h3>{this.props.author}</h3>
            </div>
        )
    }       
}

const TestMemo = React.memo(props=> {  //Memo is decorated in HOC,which extends the power of shallow compare

    console.log(props)
    console.log('TestMemo has been rendered')
    return (
        <div>
            <h3>{props.date}</h3>
            <h3>{props.name}</h3>
            <h3>{props.author}</h3>
        </div>
    )
})

class ShouldComponentUpdate_2 extends Component {  //ShouldComponentUpdate_2 will receive props from 1
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        }
        setInterval(()=>{
            this.setState(prevState => ({
                count: prevState.count+1
            }))
        },1000)  // why do we put timer here?
    }


    shouldComponentUpdate (nextProps) {
        if(
            nextProps.data.date === this.props.data.date &&
            nextProps.data.name === this.props.data.name
        ) {
            return true;
        }
        return false;
    }


    render() {
        console.log('shouldComponentUpdate_2 has been rendered')
        return (
            <div>
                <h3>{this.props.data.date}</h3>
                <h3>{this.props.data.name}</h3>
                <h3>{`See how shouldComponentUpdate works in 5 seconds: ${this.props.data.author}  `}{this.state.count}</h3>
            </div>
        );
    }
}



export default class ShouldComponentUpdate extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: 'Charlie',
            author: 'Jane',
            date: '2019-08'
        }
    }


    componentDidMount () {
        setTimeout(()=> {
            this.setState(prevState=>({
                name: prevState.name,
                author: 'Charlie',
                date:  prevState.date
            }))
        },5000);

    }
    render() {
        console.log('shouldComponentUpdate has been rendered')
        return (
            <div>
                <ShouldComponentUpdate_2 data={this.state}/>
                <TestPureComponent {...this.state}/>
                <TestMemo {...this.state}/>
            </div>
        );
    }
}
