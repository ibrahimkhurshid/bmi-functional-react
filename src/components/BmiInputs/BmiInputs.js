import InputField from "../InputField/InputField";
import './BmiInputs.css';

function BmiInputs(props){
    const{valueHandler}=props;

    return(
       <div className="bmi-inputs">
        <InputField 
        onChangeMethod={valueHandler}
        inputType="number"
        styleClass="input-field" 
        name="weight"
        labelText= "Weight (in Kg)"
        placeholder= "56..."/>

        <InputField 
        onChangeMethod={valueHandler}
        inputType="number"
        styleClass="input-field" 
        name="height"
        placeholder="176"
        labelText= "Height (in cm)"/>
       </div>
    );
}

export default BmiInputs;