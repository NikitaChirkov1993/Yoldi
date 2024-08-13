import classNames from "classnames";
import style from "./ButtonForm.module.css";

const ButtonForm = ({ children, disabled, onClick, ...props }) => {
    const activeBtn = classNames(style.button,style.active)

    return (
        <button {...props} onClick={onClick} className={disabled ?style.button: activeBtn} disabled={disabled}>
            {children}
        </button>
     );
}

export default ButtonForm
