import Image from "next/image";
import imageDelete from "./../../../../public/img/deleteOwner.svg";
import imageLoading from "./../../../../public/img/image.svg";

import style from "./ButtonOwnerUser.module.css";

const ButtonOwnerDelete = ({ onClick }) => {
    return (
        <div onClick={onClick} className={style.btn__uploading_delete}>
            <Image
                alt="Загрузить"
                src={imageDelete}
                priority
            />

            <p className={style.mainAccount__btn_text}>Удалить</p>

            <Image
                alt="Загрузить"
                src={imageLoading}
                priority
            />
        </div>
    );
};

export default ButtonOwnerDelete;
