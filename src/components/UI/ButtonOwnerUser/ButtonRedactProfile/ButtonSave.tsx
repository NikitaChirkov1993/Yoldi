import style from "./ButtonRedactProfile.module.css";
const ButtonSave = ({onClickSave}) => {
    return (
        <button onClick={onClickSave} type="button" className={[style.btn__redact_global,style.btn__save].join(" ")}>Сохранить</button>
     );
}

export default ButtonSave;