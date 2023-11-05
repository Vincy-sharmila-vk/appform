import { Button, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { multiStepContext } from '../StepContext'


function Secondstep() {
  const {setStep,userData, setUserdata, SetFinaldata, setOnedata} = useContext(multiStepContext);

  return (
    <div>
        <div>
            <h3>Contact Details</h3>
        </div>
        <div>
        <TextField label="Phone number" value={userData['phonenumber']} onChange={(e) => setUserdata({...userData, "phonenumber": e.target.value})}  margin='normal' variant='outlined' color='secondary'/>
        </div>
        <div>
        <TextField label="Additonal phone number" value={userData['additional']} onChange={(e) => setUserdata({...userData, "additional": e.target.value})} margin='normal' variant='outlined' color='secondary'/>
        </div>
        <div>
        <TextField label="Address" value={userData['address']} onChange={(e) => setUserdata({...userData, "address": e.target.value})} margin='normal' variant='outlined' color='secondary'/>
        </div>
        <div>
        <Button variant='contained' onClick={()=>setStep(1)} color='secondary'>Back</Button>

        <Button variant='contained' onClick={()=>setStep(3)} color='primary'>Next</Button>
</div>
    </div>
  )
}

export default Secondstep