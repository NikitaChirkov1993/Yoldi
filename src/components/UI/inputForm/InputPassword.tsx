import Image from "next/image";
import imgPassword from "./../../../../public/img/Vector.svg";
import imgEye from "./../../../../public/img/eye-solid.svg";
import style from "./InputForm.module.css";



const InputPassword = () => {
    return (
        <div className={style.wrapper__input}>
            <Image
                alt="Name"
                src={imgPassword}
                className={style.icon}
                priority

            />
            <input className={style.input__text} type="text" placeholder="Пароль" />
            <button className={style.icon__btn_eye}>
                <Image
                    alt="посмотреть"
                    src={imgEye}
                    className={style.icon__eye}
                    priority

                />
            </button>
        </div>
     );
}

export default InputPassword;