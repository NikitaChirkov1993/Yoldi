import Image from "next/image";
import imgName from "./../../../../public/img/user.svg";
import style from "./InputForm.module.css";



const InputNameRegister = () => {
    return (
        <div className={style.wrapper__input}>
            <Image
                alt="Name"
                src={imgName}
                className={style.icon}
                priority

            />
            <input className={style.input__text} type="text" placeholder="Имя" />
        </div>
     );
}

export default InputNameRegister;