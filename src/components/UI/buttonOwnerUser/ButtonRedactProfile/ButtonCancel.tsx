import style from "./ButtonRedactProfile.module.css";
const ButtonCancel = ({onClick}) => {
    return (
        <button onClick={onClick} type="button" className={[style.btn__redact_global,style.btn__cancel].join(" ")}>Отмена</button>
     );
}

export default ButtonCancel;