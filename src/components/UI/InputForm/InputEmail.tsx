import { AuthInfo } from "@/types/types";
import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";
import imgEmail from "./../../../../public/img/envelope.svg";
import style from "./InputForm.module.css";

type InputEmail = {
    setAuthInfo: Dispatch<SetStateAction<AuthInfo>>;
    authInfo: AuthInfo;
}

const InputEmail: FC<InputEmail> = ({ setAuthInfo, authInfo }) => {
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
                onChange={(e) => setAuthInfo({ ...authInfo, ['email']: e.target.value })}
                value={authInfo.email} />
        </div>
     );
}

export default InputEmail;