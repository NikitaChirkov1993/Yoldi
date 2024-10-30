import Image from "next/image";
import btnExit from "./../../../../public/img/btn_exit.svg";
import style from "./ButtonOwnerUser.module.css";
const ButtonOwnerExit = ({onClick}) => {
    return (
        <button onClick={onClick} style={{width:"130px"}} className={style.mainAccount__btn}>
            <Image src={btnExit} alt="Выйти" priority />
            <p className={style.mainAccount__btn_text}>Выйти</p>
        </button>
    );
};

export default ButtonOwnerExit;
