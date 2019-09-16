import React from 'react';
import SubmitButton from './SubmitButton'


export default function Input (props) {

    return (
        <div>
            <div>
                <input type="text" onChange={props.onChangeAccount} value={props.account} >
                </input>
            </div>
            <div>
                <input type="text" onChange={props.onChangePassword} value={props.password}>
                </input>
            </div>
           <SubmitButton />
        </div>
    )
}