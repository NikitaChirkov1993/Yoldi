import style from "./styleButtonForm.module.css"
const ButtonForm = ({children,...props}) => {
    return (
        <button {...props} className={style.button}>
            {children}
        </button>
     );
}

export default ButtonForm
