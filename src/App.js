import logo from './logo.svg';
import './App.css';
import Firststep from './Components/Firststep';
import Secondstep from './Components/Secondstep';
import Thirdstep from './Components/Thirdstep';
import Fourstep from './Components/Fourstep';
import { Step, StepLabel, Stepper } from '@mui/material';
import { multiStepContext } from './StepContext';
import { useContext } from 'react';
import DisplayData from './Components/DisplayData';

function App() {

  const { currentStep, oneData } = useContext(multiStepContext);

  function showStep(step) {
    switch (step) {
      case 1:
        return <Firststep />
      case 2:
        return <Secondstep />
      case 3:
        return <Thirdstep />
        case 4:
        return <Fourstep />
      
    }
  }

  return (
    <div className="App">
      <header className='App-header'>
      <h3 style={{ textDecoration: 'underline',color:'red' }}>Application</h3>
      <div className='center-stepper'>
        <Stepper style={{ width:'18%'}} activeStep={currentStep - 1} orientation='harizontal'>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
      {showStep(currentStep)}
      {oneData.length > 0 ? <DisplayData /> : ''}
      </header>
    </div>
  );
}

export default App;
