import './InputField.css';

function InputField(props){
    const{inputType,styleClass,name,onChangeMethod,labelText,placeholder} = props;
    return(
        <div className='input-container'>
        <label type={inputType}>{labelText}</label>
        <input 
        type={inputType} 
        name={name}
        className={styleClass}
        onChange={onChangeMethod}
        placeholder={placeholder}>
        </input>
        </div>
    );
}

export default InputField;