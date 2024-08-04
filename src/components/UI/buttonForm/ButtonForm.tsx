import style from "./ButtonForm.module.css";

const ButtonForm = ({ children, disabled, onClick, ...props }) => {

    return (
        <button {...props} onClick={onClick} className={style.button} disabled={disabled}>
            {children}
        </button>
     );
}

export default ButtonForm
