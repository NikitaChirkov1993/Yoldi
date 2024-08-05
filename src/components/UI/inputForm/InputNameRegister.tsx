import { RegInfo } from "@/components/form/FormRegister";
import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";
import imgName from "./../../../../public/img/user.svg";
import style from "./InputForm.module.css";

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
                value={regInfo.name}
                onChange={(e) => setRegInfo({...regInfo, ['name']: e.target.value})}
            />
        </div>
     );
}

export default InputNameRegister;