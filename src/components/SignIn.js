import React from 'react';
import TextField from '@material-ui/core/TextField';
import ThisDemo from './ThisDemo';


export default class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.logIn = this.logIn.bind(this);
    }

    logIn () {
        setTimeout(()=>{ 
            this.props.history.push('/home')
        }, 3000)
    }


    render () {
        console.log(this.props)
        return(
            <div>
                <div>
                    <TextField 
                        disabled = {false}
                        required 
                        id="email"
                        label="email"
                        // value={this.props.email}
                        // onChange = {Event => this.props.onChange('email', Event)}
                     />
                </div>
                <div>
                    <TextField 
                        id="psw"
                        label="password"
                        // value={this.props.password}
                        // onChange = {Event => this.props.onChange("password", Event)}
                    />
                </div>
                <button onClick={this.logIn} >
                    <h2>submit</h2>
                </button>
               
            </div>
        )

    } 
}