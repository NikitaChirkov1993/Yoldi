import style from "./ButtonForm.module.css";

const ButtonForm = ({children, disabled, submitHandler, ...props}) => {
    return (
        <button {...props} onClick={submitHandler} className={style.button} disabled={disabled}>
            {children}
        </button>
     );
}

export default ButtonForm
