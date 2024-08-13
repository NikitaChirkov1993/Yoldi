import { RegInfo } from "@/types/types";
import Image from "next/image";
import { Dispatch, FC, SetStateAction, useState } from "react";
import imgPassword from "./../../../../public/img/Vector.svg";
import imgEye from "./../../../../public/img/eye-solid.svg";
import style from "./InputForm.module.css";

type InputPasswordRegister = {
    setRegInfo: Dispatch<SetStateAction<RegInfo>>;
    regInfo: RegInfo;
}

const InputPasswordRegister: FC<InputPasswordRegister> = ({ setRegInfo, regInfo }) => {
    const [showPassword, setShowPassword] = useState(false);
    const toogleShowPassword = ()=> {
        setShowPassword(prevState => !prevState);
    }

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
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
                onChange={(e) => setRegInfo({ ...regInfo, ['password']: e.target.value })}
                value={regInfo.password}
 />
            <button className={style.icon__btn_eye}>
                <Image
                    onClick={toogleShowPassword}
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