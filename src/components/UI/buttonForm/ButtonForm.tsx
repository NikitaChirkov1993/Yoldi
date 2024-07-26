import style from "./ButtonForm.module.css";
const ButtonForm = ({children,...props}) => {
    return (
        <button {...props} className={style.button}>
            {children}
        </button>
     );
}

export default ButtonForm
