import {React,useState, useEffect} from 'react';
import TextField from './components/TextField/TextField';
import BmiInputs from './components/BmiInputs/BmiInputs';
import Button from './components/Button/Button';
import AreaChart from './components/AreaChart/AreaChart';
import './Bmi.css';



function Bmi(){
  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState(0);
  const [count , updateCount] = useState(0)


  useEffect((e) => {
    updateCount( count + 1 )
    document.title=`useEffect::${count}`
  },[weight,height,bmi]);


  const setValues=(e)=>{
    if (e.target.name=="weight"){
      setWeight(e.target.value)
    }else if(e.target.name=="height"){
      setHeight(e.target.value)
    }
  }

  const calcBmi= ()=>{
    // console.log(`weight: ${weight},height: ${height}, bmi: ${bmi}`);
    const bmiVal = weight/((height/100)**2);
    setBmi(bmiVal)
  }

  return(
    <div className='container'>
    <TextField 
    textVal="BMI Tracker"
    styleClass="text-field"
    />
    
    <BmiInputs valueHandler={setValues}/>

    <Button
    text="Calculate BMI"
    onClickMethod={calcBmi}
    styleClass="bmi-calc-btn"
    />

    <TextField 
    textVal={<>{bmi.toFixed(2)} <small>Kg/m<sup>2</sup></small></>}
    styleClass="bmi-value-display"
    />

    <AreaChart 
    labelsVal={["January","February","March","April"]}
    dataVal={[10,19,15,bmi]}/>
    </div>
  );
}

export default Bmi;
