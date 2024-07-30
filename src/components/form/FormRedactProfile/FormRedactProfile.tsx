import style from "./FormRedactProfile.module.css";
const FormRedactProfile = () => {
    return (
        <form className={style.form} action="">
            <p className={style.label__global}>
                <label htmlFor="name">Имя</label>
            </p>
            <div className={style.input__name}>
                <input className={style.input__global} type="text" id="name" name="name" />
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
        </form>
    );
};

export default FormRedactProfile;
