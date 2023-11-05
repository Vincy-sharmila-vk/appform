import { Button, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { multiStepContext } from '../StepContext';

function Thirdstep() {
  const {setStep,userData, setUserdata, SetFinaldata, setOnedata} = useContext(multiStepContext);

  return (
    <div>
      <div>
        <h3>Educational Qualification</h3>
      </div>
        <div>
        <TextField label="Degree" value={userData['degree']} onChange={(e) => setUserdata({...userData, "degree": e.target.value})} margin='normal' variant='outlined' color='secondary'/>
        </div>
        <div>
        <TextField label="Specialzation" value={userData['special']} onChange={(e) => setUserdata({...userData, "special": e.target.value})} margin='normal' variant='outlined' color='secondary'/>
        </div>
        <div>
        <TextField label="collage" value={userData['collage']} onChange={(e) => setUserdata({...userData, "collage": e.target.value})} margin='normal' variant='outlined' color='secondary'/>
        </div>
        <div>
        <Button variant='contained'  onClick={()=>setStep(2)} color='secondary'>Back</Button>

        <Button variant='contained' onClick={()=>setStep(4)} color='primary'>Next</Button>
</div>
    </div>
  )
}

export default Thirdstep