import { EditInfo } from "@/app/account/owner/[slug]/page";
import ButtonCancel from "@/components/UI/buttonOwnerUser/ButtonRedactProfile/ButtonCancel";
import ButtonSave from "@/components/UI/buttonOwnerUser/ButtonRedactProfile/ButtonSave";
import { Dispatch, FC, SetStateAction } from "react";
import style from "./EditProfile.module.css";

type EditProfile = {
    editInfo: EditInfo;
    setEditInfo: Dispatch<SetStateAction<EditInfo>>;
    onClickCancel: () => void;
    onClickSave: (event: React.FormEvent<HTMLButtonElement>) => Promise<void>;
}

const EditProfile: FC<EditProfile> = ({editInfo, setEditInfo, onClickCancel, onClickSave}) => {
    return (
        <div  className={style.form} >
            <p className={style.label__global}>
                <label htmlFor="name">Имя</label>
            </p>
            <div className={style.input__name}>
                <input
                    autoFocus
                    className={style.input__global}
                    type="text" id="name"
                    name="name"
                    onChange={(e) => setEditInfo({...editInfo, ["name"]: e.target.value})}
                    value={editInfo.name}
                />
            </div>

            <p className={style.label__global}>
                <label htmlFor="addressProfile">Адресс профиля</label>
            </p>

            <div className={style.wrapper__addressProfile}>
                <div className={style.text__addressProfile}>example.com/</div>
                <div className={style.input__addressProfile}>
                    <input
                        className={style.input__global}
                        type="text"
                        id="addressProfile"
                        name="addressProfile"
                        onChange={(e) => setEditInfo({ ...editInfo, ["slug"]: e.target.value })}
                        value={editInfo.slug}
                    />
                </div>
            </div>

            <p className={style.label__global}>
                <label htmlFor="description">Описание</label>
            </p>

            <textarea
                className={[style.textarea, style.input__global].join(" ")} name="description"
                id="description"
                onChange={(e) => setEditInfo({ ...editInfo, ["description"]: e.target.value })}
                value={editInfo.description}
            >
            </textarea>

            <div className={style.btn__wrapper} onClick={(e)=> e.stopPropagation()}>
                <ButtonCancel onClickCancel={onClickCancel} />
                <ButtonSave onClickSave={onClickSave} />
            </div>
        </div>
    );
};

export default EditProfile;
