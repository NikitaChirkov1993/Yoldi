import ButtonCancel from "@/components/ui/buttonOwnerUser/ButtonRedactProfile/ButtonCancel";
import ButtonSave from "@/components/ui/buttonOwnerUser/ButtonRedactProfile/ButtonSave";
import style from "./EditProfile.module.css";

const EditProfile = ({onClick}) => {
    return (
        <form className={style.form} action="">
            <p className={style.label__global}>
                <label htmlFor="name">Имя</label>
            </p>
            <div className={style.input__name}>
                <input autoFocus className={style.input__global} type="text" id="name" name="name" />
            </div>

            <p className={style.label__global}>
                <label htmlFor="addressProfile">Адресс профиля</label>
            </p>

            <div className={style.wrapper__addressProfile}>
                <div className={style.text__addressProfile}>example.com/</div>
                <div className={style.input__addressProfile}>
                    <input className={style.input__global}  type="text" id="addressProfile" name="addressProfile" />
                </div>
            </div>

            <p className={style.label__global}>
                <label htmlFor="description">Описание</label>
            </p>

            <textarea className={[style.textarea,style.input__global].join(" ")} name="description" id="description">
            </textarea>

            <div className={style.btn__wrapper} onClick={(e)=> e.stopPropagation()}>
                <ButtonCancel onClick={onClick} />
                <ButtonSave/>
            </div>
        </form>
    );
};

export default EditProfile;
