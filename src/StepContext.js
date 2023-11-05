import React, { useState } from 'react'
import App from './App';


export const multiStepContext = React.createContext();

const StepContext = () => {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserdata] = useState([]);
    const [finalData, SetFinaldata] = useState([]);
    const [oneData, setOnedata] = useState([]);

    Axios.post('https://jsonplaceholder.typicode.com/users',{currentStep:currentStep, userData:userData, finalData:finalData, oneData:oneData})
    .then(res => console.log(res.data))
    }
    
    function submitData() {
        setOnedata(finalData => [...finalData, userData]);
        setUserdata('');
        setStep(1);


    }

    return (
        <div>
            <multiStepContext.Provider value={{ currentStep, setStep, userData, setUserdata, finalData, SetFinaldata, oneData, setOnedata, submitData }} >
                <App />
            </multiStepContext.Provider>
        </div>
    )
}

export default StepContext;
