import React, {useContext, useState} from 'react'
import {Button, TextField} from '@mui/material'
import { multiStepContext } from '../StepContext'
import Axios from 'axios'

function Firststep() {
    const {setStep,userData, setUserdata} = useContext(multiStepContext);

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");

    
    const datavalue = () => {
    Axios.post('https://jsonplaceholder.typicode.com/users',{firstname:firstname, lastname:lastname, email:email})
    .then(res => console.log(res.data))
    }
  return (
    <div>
        <div>
        <TextField label="First name" value={ firstname[userData]} onChange={(e) => firstname[setUserdata({...userData, "firstname": e.target.value})]} margin='normal' variant='outlined' color='secondary'/>
        </div>
        <div>
        <TextField label="last name" value={firstname[userData]} onChange={(e) => setUserdata({...userData, "lastname": e.target.value})} margin='normal' variant='outlined' color='secondary'/>
        </div>
        <div>
        <TextField label="Email Id" value={email[userData]} onChange={(e) => setUserdata({...userData, "email": e.target.value})} margin='normal' variant='outlined' color='secondary'/>
        </div>
        <div>
        <Button variant='contained' onClick={ ()=>(setStep(2))} color='primary'>Next</Button>
</div>
    </div>
  )
}

export default Firststep