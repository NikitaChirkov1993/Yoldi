import Image from "next/image";
import imgEmail from "./../../../../public/img/envelope.svg";
import style from "./InputForm.module.css";

const InputEmail = () => {
    return (
        <div className={style.wrapper__input}>
            <Image
                alt="Name"
                src={imgEmail}
                className={style.icon}
                priority

            />
            <input className={style.input__text} type="text" placeholder="E-mail" />
        </div>
     );
}

export default InputEmail;