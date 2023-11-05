import { Button, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { multiStepContext } from '../StepContext';

function Fourstep() {
  const {setStep,userData, setUserdata, SetFinaldata, setOnedata,submitData} = useContext(multiStepContext);

  return (
    <div>
        <div>
        <TextField label="Gender" value={userData['gender']} onChange={(e) => setUserdata({...userData, "gender": e.target.value})} margin='normal' variant='outlined' color='secondary'/>
        </div>
        <div>
        <TextField label="country" value={userData['country']} onChange={(e) => setUserdata({...userData, "country": e.target.value})} margin='normal' variant='outlined' color='secondary'/>
        </div>
        <div>
        <TextField label="city" value={userData['city']} onChange={(e) => setUserdata({...userData, "city": e.target.value})} margin='normal' variant='outlined' color='secondary'/>
        </div>
        <div>
        <Button variant='contained' onClick={()=>setStep(3)} color='secondary'>Back</Button>

        <Button variant='contained' onClick={submitData} color='primary'>Submit</Button>
</div>
    </div>
  )
}

export default Fourstep