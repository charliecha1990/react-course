import React from 'react';
import TextField from '@material-ui/core/TextField';

function SignIn (props){
    const classes = props.classes;
    console.log(props);
    return(
        <div>
            <div>
                <TextField 
                    disabled = {false}
                    required 
                    id="email"
                    label="email"
                    value={props.email}
                    onChange = {Event => props.onChange('email', Event)}
                 />
            </div>
            <div>
                <TextField 
                    id="psw"
                    label="password"
                    value={props.password}
                    onChange = {Event => props.onChange("password", Event)}
                />
            </div>
            <button onClick = {props.onClick}>
                <h2>submit</h2>
            </button>
        </div>
    )
}
export default  SignIn;