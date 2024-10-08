import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";
import imgName from "./../../../../public/img/user.svg";
import style from "./InputForm.module.css";
import { RegInfo } from "@/types/types";

type InputNameRegister = {
    setRegInfo: Dispatch<SetStateAction<RegInfo>>;
    regInfo: RegInfo;
}


const InputNameRegister: FC<InputNameRegister> = ({ regInfo, setRegInfo }) => {
    return (
        <div className={style.wrapper__input}>
            <Image
                alt="Name"
                src={imgName}
                className={style.icon}
                priority

            />
            <input
                className={style.input__text}
                type="text"
                placeholder="Имя"
                onChange={(e) => setRegInfo({...regInfo, ['name']: e.target.value})}
                value={regInfo.name}
            />
        </div>
     );
}

export default InputNameRegister;