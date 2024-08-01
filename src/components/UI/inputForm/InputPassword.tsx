import { AuthInfo } from "@/components/form/FormLogin";
import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";
import imgPassword from "./../../../../public/img/Vector.svg";
import imgEye from "./../../../../public/img/eye-solid.svg";
import style from "./InputForm.module.css";

type InputPassword = {
    setAuthInfo: Dispatch<SetStateAction<AuthInfo>>;
    authInfo: AuthInfo;
}

const InputPassword: FC<InputPassword> = ({ setAuthInfo, authInfo }) => {
    console.log(authInfo, 'authInfo');

    return (
        <div className={style.wrapper__input}>
            <Image
                alt="Name"
                src={imgPassword}
                className={style.icon}
                priority

            />
            <input className={style.input__text} type="text" value={authInfo.password} placeholder="Пароль" onChange={(e) => setAuthInfo({ ...authInfo, ['password']: e.target.value })}
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

export default InputPassword;