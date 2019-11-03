import React from 'react';
import TextField from '@material-ui/core/TextField';


class SigninExample2 extends React.Component {
    constructor(props) {
        super(props)
    }


    validateUserInfo () {
        // 判断 用户名 和 密码是否符合规范     user@mail.com
        //  密码9 -12 位
    }

    render() {

        console.log(this.props.response)
        return (
            <div>
                <TextField 
                   onChange={event=>this.props.onChange('userName',event)}
                   value={this.props.userName}
                   label='userName'
                />
                <TextField 
                    onChange={event=>this.props.onChange('password',event)}
                    value={this.props.password}
                    label='password'
                />
                <button onClick={this.props.onSubmit}>Submit</button>      
            </div>
        )
    }
}

export default SigninExample2
