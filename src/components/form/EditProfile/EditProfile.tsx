import { RedactInfo } from "@/app/account/owner/[slug]/page";
import ButtonCancel from "@/components/ui/buttonOwnerUser/ButtonRedactProfile/ButtonCancel";
import ButtonSave from "@/components/ui/buttonOwnerUser/ButtonRedactProfile/ButtonSave";
import { Dispatch, FC, SetStateAction } from "react";
import style from "./EditProfile.module.css";

type EditProfile = {
    redactInput: RedactInfo;
    setRedactInput: Dispatch<SetStateAction<RedactInfo>>;
    onClickCancel: () => void;
    onClickSave: (event: React.FormEvent<HTMLButtonElement>) => Promise<void>;
}

const EditProfile: FC<EditProfile> = ({redactInput, setRedactInput, onClickCancel, onClickSave}) => {
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
                    onChange={(e) => setRedactInput({...redactInput, ["name"]: e.target.value})}
                    value={redactInput.name}
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
                        onChange={(e) => setRedactInput({ ...redactInput, ["slug"]: e.target.value })}
                        value={redactInput.slug}
                    />
                </div>
            </div>

            <p className={style.label__global}>
                <label htmlFor="description">Описание</label>
            </p>

            <textarea
                className={[style.textarea, style.input__global].join(" ")} name="description"
                id="description"
                onChange={(e) => setRedactInput({ ...redactInput, ["description"]: e.target.value })}
                value={redactInput.description}
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
