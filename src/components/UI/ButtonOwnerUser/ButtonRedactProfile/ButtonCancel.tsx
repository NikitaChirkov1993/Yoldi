import style from "./ButtonRedactProfile.module.css";
const ButtonCancel = ({onClickCancel}) => {
    return (
        <button onClick={onClickCancel} type="button" className={[style.btn__redact_global,style.btn__cancel].join(" ")}>Отмена</button>
     );
}

export default ButtonCancel;