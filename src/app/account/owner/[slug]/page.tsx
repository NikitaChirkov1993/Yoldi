"use client";

import Header from "@/components/header/Header";
import classNames from "classnames";
import { useState } from "react";

import { api } from "@/api/api";
import EditProfile from "@/components/form/EditProfile/EditProfile";
import ButtonOwnerDelete from "@/components/ui/buttonOwnerUser/ButtonOwnerDelete";
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

    const { name, letter } = getSplitName(profile.name);

    const [visible, setVisible] = useState(false);


    const classCoverOwner = classNames(style.block__cover_global, style.block__coverOwner);
    const classImgOwner = classNames(style.block__img_global, style.block__imgOwner);


    const [redactInput, setRedactInput] = useState<RedactInfo>({
        name: profile.name,
        imageId: profile.image ? profile.image.id : null,
        password: parsePassword.password,
        slug: profile.slug,
        coverId: profile.cover ? profile.cover.id : null,
        description: profile.description,
    });

    const HandlerEditSave = async (event: React.FormEvent) => {
        event.preventDefault();
        const editData = await api.profile.patchProfile(parseAuthData.value, redactInput);
        setVisible(false);
        if (!editData.error) {
            localStorage.setItem("profile", JSON.stringify(editData));
            console.log(editData, "editData");
            router.push(`/account/owner/${editData.slug}`);
        }
    }

    //ОТПРАВКА КАРТИНОК:
    const handleAvatarChange = async (event) => {
        const selectedAvatar = event.target.files[0]
        const formData = new FormData();
        formData.append("file", selectedAvatar);

        const avatarData = await api.image.postImage(formData);
        if (!avatarData.error) {
            console.log(avatarData, "avatarData");
            const editAvatarData = await api.profile.patchProfile(parseAuthData.value, {
                ...redactInput,
                imageId: avatarData.id
            });
            localStorage.setItem("profile", JSON.stringify(editAvatarData));
            if (editAvatarData) {
                console.log(editAvatarData,"editAvatarData");

                setRedactInput({
                    ...redactInput,
                    imageId: avatarData.id
                })
            }
        }
    };

    const handleCoverChange = async (event) => {
        const selectedCover = event.target.files[0]

        const formData = new FormData();
        formData.append("file", selectedCover);

        const coverData = await api.image.postImage(formData);
        if (!coverData.error) {
            console.log(coverData, "coverData");
            const editCoverData = await api.profile.patchProfile(parseAuthData.value, {
                ...redactInput,
                coverId: coverData.id
            });
            localStorage.setItem("profile", JSON.stringify(editCoverData));
            if (editCoverData) {
                setRedactInput({
                    ...redactInput,
                    coverId: coverData.id
                })
            }
        }
    }

    //Удаление cover:
    const handleCoverDelete = async () => {
        console.log("удалить cover");
        const editCoverData = await api.profile.patchProfile(parseAuthData.value, {
            ...redactInput,
            coverId: null
        });
        localStorage.setItem("profile", JSON.stringify(editCoverData));
            if (editCoverData) {
                setRedactInput({
                    ...redactInput,
                    coverId: null
                })
            }

    }



    return (
        <div className="wrapper__yoldi">
            <Header />
            <main className={style.mainAccount}>
                <ModalOwner visible={visible} setVisible={setVisible}>
                    <h3 className={style.form__title}>Редактировать профиль</h3>
                    <EditProfile onClickSave={HandlerEditSave} redactInput={redactInput} setRedactInput={setRedactInput} onClickCancel={() => setVisible(false)} />
                </ModalOwner>
                <div style={{ backgroundImage: profile.cover?.url ? `url(${profile.cover.url})` : 'none' }} className={classCoverOwner}>

                    {profile.cover ?
                        <ButtonOwnerDelete onClick={handleCoverDelete} />
                        :
                        <ButtonOwnerUploading onChange={handleCoverChange} />
                    }


                    {!profile.image && (
                        <div className={classImgOwner}>
                            <p>{letter}</p>
                            <input
                                className={style.block__img_input}
                                type="file"
                                accept="image/*"
                                onChange={handleAvatarChange}
                            />
                        </div>
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
                                onChange={handleAvatarChange}
                            />
                        </div>
                    )}
                </div>
                <div className={style.mainAccount__container}>
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
