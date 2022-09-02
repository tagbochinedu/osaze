import {useState} from 'react'
import {Stepper, Step} from 'react-responsive-steppers';
import { useModalAuth } from "../../Context/ModalContext";

const StatusReview = () => {
  const { setStatusModal } = useModalAuth();
  const [activeStep, setActiveStep]=useState(0);
     return(
    <Stepper variant={"vertical"} activeStep={activeStep} setStep={setActiveStep} disabledStepColor={'#ffffff'} stepColor={'#44589c'}>
     <Step onClick={()=>{setStatusModal(false)}}>1</Step>
     <Step>2</Step>
     <Step>3</Step>
    </Stepper>
)
};

export default StatusReview;
