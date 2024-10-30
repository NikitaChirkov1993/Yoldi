"use client";

import Header from "@/components/header/Header";
import classNames from "classnames";
import { useState } from "react";

import { api } from "@/api/api";
import EditProfile from "@/components/form/EditProfile/EditProfile";
import ButtonOwnerDelete from "@/components/UI/buttonOwnerUser/ButtonOwnerDelete";
import ButtonOwnerExit from "@/components/UI/buttonOwnerUser/ButtonOwnerExit";
import ButtonOwnerRedact from "@/components/UI/buttonOwnerUser/ButtonOwnerRedact";
import ButtonOwnerUploading from "@/components/UI/buttonOwnerUser/ButtonOwnerUploading";
import Loading from "@/components/UI/loading/Loading";
import ModalOwner from "@/components/UI/ModalOwner/ModalOwner";
import { EditInfo } from "@/types/types";
import { getSplitName } from "@/utils/utils";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import style from "./styles.module.css";

const AccountOwner = () => {
    const router = useRouter();

    const profileStored = localStorage.getItem("profileStored");
    const profileParsed = profileStored? JSON.parse(profileStored) : null;

    const authValueStored= localStorage.getItem("authValueStored");
    const authValueParsed = authValueStored ? JSON.parse(authValueStored) : null;

    const authInfoStored = localStorage.getItem("authInfoStored");
    const authInfoParsed = authInfoStored ? JSON.parse(authInfoStored) : null;

    const { name, letter } = getSplitName(profileParsed.name);

    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);


    const classCoverOwner = classNames(style.block__cover_global, style.block__coverOwner);
    const classImgOwner = classNames(style.block__img_global, style.block__imgOwner);


    const [editInfo, setEditInfo] = useState<EditInfo>({
        name: profileParsed.name,
        imageId: profileParsed.image ? profileParsed.image.id : null,
        password: authInfoParsed.password,
        slug: profileParsed.slug,
        coverId: profileParsed.cover ? profileParsed.cover.id : null,
        description: profileParsed.description,
    });

    const HandlerEditSave = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        const editData = await api.profile.patchProfile(authValueParsed.value, editInfo);
        setVisible(false);
        if (!editData.error) {
            localStorage.setItem("profileStored", JSON.stringify(editData));
            router.push(`/account/owner/${editData.slug}`);
            setLoading(false);
        }
    }

    //ОТПРАВКА КАРТИНОК:
    const handleAvatarChange = async (event) => {
        setLoading(true);
        const selectedAvatar = event.target.files[0]
        const formData = new FormData();
        formData.append("file", selectedAvatar);

        const avatarData = await api.image.postImage(formData);
        if (!avatarData.error) {
            const editAvatarData = await api.profile.patchProfile(authValueParsed.value, {
                ...editInfo,
                imageId: avatarData.id
            });
            setLoading(false);
            localStorage.setItem("profileStored", JSON.stringify(editAvatarData));
            if (editAvatarData) {
                setEditInfo({
                    ...editInfo,
                    imageId: avatarData.id
                })
            }
        }
    };

    const handleCoverChange = async (event) => {
        setLoading(true);
        const selectedCover = event.target.files[0]

        const formData = new FormData();
        formData.append("file", selectedCover);

        const coverData = await api.image.postImage(formData);
        if (!coverData.error) {
            const editCoverData = await api.profile.patchProfile(authValueParsed.value, {
                ...editInfo,
                coverId: coverData.id
            });
            setLoading(false);
            localStorage.setItem("profileStored", JSON.stringify(editCoverData));
            if (editCoverData) {
                setEditInfo({
                    ...editInfo,
                    coverId: coverData.id
                })
            }
        }
    }

    //Удаление cover:
    const handleCoverDelete = async () => {
        setLoading(true);
        const editCoverData = await api.profile.patchProfile(authValueParsed.value, {
            ...editInfo,
            coverId: null
        });
        localStorage.setItem("profileStored", JSON.stringify(editCoverData));
            if (editCoverData) {
                setEditInfo({
                    ...editInfo,
                    coverId: null
                });
                setLoading(false);
            }

    }



    return (
        <div className="wrapper__yoldi">
            <Header />
            {loading && <Loading/>}
            <main className={style.mainAccount}>
                <ModalOwner visible={visible} setVisible={setVisible}>
                    <h3 className={style.form__title}>Редактировать профиль</h3>
                    <EditProfile onClickSave={HandlerEditSave} editInfo={editInfo} setEditInfo={setEditInfo} onClickCancel={() => setVisible(false)} />
                </ModalOwner>
                <div style={{ backgroundImage: profileParsed.cover?.url ? `url(${profileParsed.cover.url})` : 'none' }} className={classCoverOwner}>

                    {profileParsed.cover ?
                        <ButtonOwnerDelete onClick={handleCoverDelete} />
                        :
                        <ButtonOwnerUploading onChange={handleCoverChange} />
                    }


                    {!profileParsed.image && (
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

                    {profileParsed.image && (
                        <div
                            className={style.block__img_wrapper}
                            style={{ backgroundImage: `url(${profileParsed.image.url})` }}
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
                        {profileParsed ?
                            (<h2 className={style.mainAccount__title}>{profileParsed.name}</h2>)
                            :
                            (profileParsed.name && <h2 className={style.mainAccount__title}>{name}</h2>)
                        }

                        <div className={style.mainAccount__email}>{profileParsed.email}</div>

                        <div className={style.btnMobile}>
                            <ButtonOwnerRedact onClick={() => setVisible(true)} />
                        </div>
                        {profileParsed ?
                            (<div className={style.mainAccount__text}>{profileParsed.description}</div>)
                            :
                            (profileParsed.description ?
                                <div className={style.mainAccount__text}>
                                    {profileParsed.description}
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
