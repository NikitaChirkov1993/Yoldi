import { RegInfo } from "@/components/form/FormRegister";
import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";
import imgEmail from "./../../../../public/img/envelope.svg";
import style from "./InputForm.module.css";

type InputEmailRegister = {
    setRegInfo: Dispatch<SetStateAction<RegInfo>>;
    regInfo: RegInfo
}

const InputEmailRegister: FC<InputEmailRegister> = ({ setRegInfo, regInfo }) => {
    return (
        <div className={style.wrapper__input}>
            <Image
                alt="Name"
                src={imgEmail}
                className={style.icon}
                priority

            />
            <input
                className={style.input__text}
                type="text"
                placeholder="E-mail"
                onChange={(e) => setRegInfo({ ...regInfo, ['email']: e.target.value })}
                value={regInfo.email} />
        </div>
     );
}

export default InputEmailRegister;