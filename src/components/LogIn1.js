import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


function LogIn1 (props){
  const classes = props.cladsses

console.log (props)

return(
    <div>
         <TextField
             fullWidth
             required
             id='name '
             label='Card Holder Name'
             name='name'
             value={props.name}
            //  autoFocus
             onChange={event=> props.onChange ('name',event)}
         />

           <TextField
             fullWidth
             required
             id='number'
             label='Card Number'
             name='number'
             value={props.number}
             autoFocus
             onChange={event=> props.onChange ('number',event)}
        />

         <TextField
             fullWidth
             required 
             id='date'
             label='Date of Birth'
             name='date'
             value={props.date}
            //  autoFocus
             onChange={event=> props.onChange ('date',event)}
         />

          <TextField
             fullWidth
             id='email'
             label='Email Address'
             name='email'
             value={props.email}
            //  autoFocus
             onChange={event=> props.onChange ('email',event)}
        />

         <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={props.onClick} // to submit email and password in app.jsx
          >
            Click Here to Log In
          </Button>
   </div>
)
}


 

export default  LogIn1 