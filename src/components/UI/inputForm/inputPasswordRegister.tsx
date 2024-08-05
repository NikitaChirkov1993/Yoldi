import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";
import imgPassword from "./../../../../public/img/Vector.svg";
import imgEye from "./../../../../public/img/eye-solid.svg";
import style from "./InputForm.module.css";
import { RegInfo } from "@/components/form/FormRegister";

type InputPasswordRegister = {
    setRegInfo: Dispatch<SetStateAction<RegInfo>>;
    regInfo: RegInfo;
}

const InputPasswordRegister: FC<InputPasswordRegister> = ({ setRegInfo, regInfo}) => {

    return (
        <div className={style.wrapper__input}>
            <Image
                alt="Name"
                src={imgPassword}
                className={style.icon}
                priority

            />
            <input
                className={style.input__text}
                type="text"
                placeholder="Пароль"
                onChange={(e) => setRegInfo({ ...regInfo, ['password']: e.target.value })}
                value={regInfo.password}
 />
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

export default InputPasswordRegister;