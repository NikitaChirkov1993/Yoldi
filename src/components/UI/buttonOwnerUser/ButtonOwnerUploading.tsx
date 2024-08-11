import Image from "next/image";
import imageLoading from "./../../../../public/img/image.svg";
import uploading from "./../../../../public/img/upload-solid.svg";
import style from "./ButtonOwnerUser.module.css";

const ButtonOwnerUploading = () => {
    return (
        <button className={style.btn__uploading_delete }>
            <Image
                alt="Загрузить"
                src={uploading}
                priority
            />
            {/* <input
                className={style.btn__input}
                type="file"
            /> */}
            <p className={style.mainAccount__btn_text}>Загрузить</p>
            <Image
                alt="Загрузить"
                src={imageLoading}
                priority
            />
        </button>
     );
}

export default ButtonOwnerUploading;