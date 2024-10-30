import Image from "next/image";
import btnRedact from "./../../../../public/img/btn_redact.svg";
import style from "./ButtonOwnerUser.module.css";

const buttonOwnerRedact = ({...props}) => {
    return (
        <button {...props} type="button" className={style.mainAccount__btn}>
            <Image src={btnRedact} alt="Редактировать" priority />
            <p className={style.mainAccount__btn_text}>Редактировать</p>
        </button>
    );
};

export default buttonOwnerRedact;
