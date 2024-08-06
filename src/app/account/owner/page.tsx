"use client";

import Header from "@/components/header/Header";
import classNames from "classnames";
import { useState } from "react";

import EditProfile from "@/components/form/EditProfile/EditProfile";
import ButtonOwnerExit from "@/components/ui/buttonOwnerUser/ButtonOwnerExit";
import ButtonOwnerRedact from "@/components/ui/buttonOwnerUser/ButtonOwnerRedact";
import ButtonOwnerUploading from "@/components/ui/buttonOwnerUser/ButtonOwnerUploading";
import ModalOwner from "@/components/ui/ModalOwner/ModalOwner";
import { getSplitName } from "@/utilits/utilits";
import Link from "next/link";
import style from "./styles.module.css";

const AccountOwner = () => {
    const getProfile = localStorage.getItem("getProfile");
    const profile = getProfile ? JSON.parse(getProfile) : null;
    const [visible, setVisible] = useState(false);

    const { name, letter } = getSplitName(profile.name);

    const classCoverOwner = classNames(style.block__cover_global, style.block__coverOwner);
    const classImgOwner = classNames(style.block__img_global, style.block__imgOwner);

    return (
        <div className="wrapper__yoldi">
            <Header />
            <main className={style.mainAccount}>
                <ModalOwner visible={visible} setVisible={setVisible}>
                    <h3 className={style.form__title}>Редактировать профиль</h3>
                    <EditProfile onClick={() => setVisible(false)} />
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
                        <input className={style.block__img_input} type="file" />
                        </div>
                    )}
                </div>
                <div className={style.mainAccount__wrapper}>
                    <div className={style.mainAccount__container_left}>
                        {profile.name && <h2 className={style.mainAccount__title}>{name}</h2>}

                        <div className={style.mainAccount__email}>{profile.email}</div>

                        <div className={style.btnMobile}>
                            <ButtonOwnerRedact onClick={() => setVisible(true)} />
                        </div>

                        {profile.description ? <div className={style.mainAccount__text}>{profile.description}</div> : <div className={style.mainAccount__text}></div>}

                        <Link href="/accounts">
                            <ButtonOwnerExit onClick={() => localStorage.removeItem("getProfile")} />
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
