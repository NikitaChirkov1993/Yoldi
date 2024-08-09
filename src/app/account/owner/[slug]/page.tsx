"use client";

import Header from "@/components/header/Header";
import classNames from "classnames";
import { useState } from "react";

import { api } from "@/api/api";
import EditProfile from "@/components/form/EditProfile/EditProfile";
import ButtonOwnerExit from "@/components/ui/buttonOwnerUser/ButtonOwnerExit";
import ButtonOwnerRedact from "@/components/ui/buttonOwnerUser/ButtonOwnerRedact";
import ButtonOwnerUploading from "@/components/ui/buttonOwnerUser/ButtonOwnerUploading";
import ModalOwner from "@/components/ui/ModalOwner/ModalOwner";
import { getSplitName } from "@/utilits/utilits";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import style from "./styles.module.css";

export type RedactInfo = {
    name: string;
    imageId: string;
    password: string;
    slug: string;
    coverId: null;
    description: string;
  }

const AccountOwner = () => {
    const router = useRouter();

    const profileFromStorage = localStorage.getItem("profile");
    const profile = profileFromStorage ? JSON.parse(profileFromStorage) : null;

    const authData = localStorage.getItem("authData");
    const parseAuthData = authData ? JSON.parse(authData) : null;

    const password = localStorage.getItem("password");
    const parsePassword = password ? JSON.parse(password) : null;


    const [visible, setVisible] = useState(false);

    const { name, letter } = getSplitName(profile.name);

    const classCoverOwner = classNames(style.block__cover_global, style.block__coverOwner);
    const classImgOwner = classNames(style.block__img_global, style.block__imgOwner);


    const [redactInput, setRedactInput] = useState<RedactInfo>(profile || {
        name: profile.name,
        imageId: profile.image ? profile.image.id : null,
        password: parsePassword.password,
        slug: profile.slug,
        coverId: profile.cover ? profile.cover.id : null,
        description: profile.description,
    });

    const HandlerEditSave = async (event: React.FormEvent) => {
        event.preventDefault();
        const redactData = await api.profile.patchProfile(parseAuthData.value, redactInput);
        setVisible(false);
        if (!redactData.error) {
            localStorage.setItem("profile", JSON.stringify(redactData));
            console.log(redactData, "redactData");
            router.push(`/account/owner/${redactData.slug}`);
        }
    }

    //ОТПРАВКА КАРТИНОК
    const [file, setFile] = useState(null);


    const handleFileChange = async (event) => {
        const selectedFile = event.target.files[0]
        setFile(selectedFile);
        if (selectedFile) {
            console.log(selectedFile,"file");
            // formData.append("file", file);

        }
        const formData = new FormData();
        formData.append("file",selectedFile )

        const fileData = await api.image.postImage(formData);
        if (!fileData.error) {
            console.log(fileData, "fileData");
            // console.log(authData);
        }


        // console.log(imageSrc,"imageSRC");

    };

    return (
        <div className="wrapper__yoldi">
            <Header />
            <main className={style.mainAccount}>
                <ModalOwner visible={visible} setVisible={setVisible}>
                    <h3 className={style.form__title}>Редактировать профиль</h3>
                    <EditProfile onClickSave={HandlerEditSave} redactInput={redactInput} setRedactInput={setRedactInput} onClickCancel={() => setVisible(false)} />
                </ModalOwner>
                <div className={classCoverOwner}>
                    <ButtonOwnerUploading />

                    {!profile.image && (
                        <button type="button" className={classImgOwner}>
                            <p>{letter}</p>
                        </button>
                    )}

                    {profile.image && (
                        <div
                            className={style.block__img_wrapper}
                            style={{ backgroundImage: `url(${profile.image.url})` }}
                        >
                            <input
                                className={style.block__img_input}
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                    )}
                </div>
                <div className={style.mainAccount__wrapper}>
                    <div className={style.mainAccount__container_left}>
                        {profile ?
                            (<h2 className={style.mainAccount__title}>{profile.name}</h2>)
                            :
                            (profile.name && <h2 className={style.mainAccount__title}>{name}</h2>)
                        }

                        <div className={style.mainAccount__email}>{profile.email}</div>

                        <div className={style.btnMobile}>
                            <ButtonOwnerRedact onClick={() => setVisible(true)} />
                        </div>
                        {profile ?
                            (<div className={style.mainAccount__text}>{profile.description}</div>)
                            :
                            (profile.description ?
                                <div className={style.mainAccount__text}>
                                    {profile.description}
                                </div>
                                :
                                <div className={style.mainAccount__text}></div>
                            )
                         }



                        <Link href="/accounts">
                            <ButtonOwnerExit onClick={() => localStorage.clear()} />
                        </Link>
                    </div>

                    <div className={style.btnDesktop}>
                        <ButtonOwnerRedact onClick={() => setVisible(true)} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AccountOwner;
