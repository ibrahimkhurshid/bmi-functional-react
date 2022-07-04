import './Button.css';

function Button(props){
    const{text,styleClass,onClickMethod}=props;
    return(
        <div className='btn-container'>
        <button 
        className={styleClass}
        onClick={onClickMethod}
        >{text}</button>
        </div>
    );
}

export default Button;