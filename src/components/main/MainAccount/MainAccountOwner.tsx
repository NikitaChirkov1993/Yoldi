"use client"
import FormRedactProfile from "@/components/form/FormRedactProfile/FormRedactProfile";
import ButtonOwnerExit from "@/components/ui/buttonOwnerUser/ButtonOwnerExit";
import ButtonOwnerRedact from "@/components/ui/buttonOwnerUser/ButtonOwnerRedact";
import ButtonOwnerUploading from "@/components/ui/buttonOwnerUser/ButtonOwnerUploading";
import ModalOwner from "@/components/ui/ModalOwner/ModalOwner";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { getSplitName } from "../../utilit/utilit";
import style from "./MainAccount.module.css";

const MainAccountOwner = () => {
    const [visible, setVisible] = useState(false);


    const { name, letter } = getSplitName("Никита");
    const emailAccount = "chrkov31011993@gmail.com";
    const description = "Рыбатекст";

    const classCoverOwner = classNames(style.block__cover_global, style.block__coverOwner);
    const classImgOwner = classNames(style.block__img_global, style.block__imgOwner);

    return (
        <main className={style.mainAccount}>
            <ModalOwner visible={visible} setVisible={setVisible}>
                <h3 className={style.form__title}>Редактировать профиль</h3>
                <FormRedactProfile onClick={()=> setVisible(false) } />
            </ModalOwner>
            <div className={classCoverOwner}>
                <ButtonOwnerUploading />
                <button type="button" className={classImgOwner}>
                    <p>{letter}</p>
                </button>
            </div>
            <div className={style.mainAccount__wrapper}>
                <div className={style.mainAccount__container_left}>
                    <h2 className={style.mainAccount__title}>{name}</h2>

                    <div className={style.mainAccount__email}>{emailAccount}</div>

                    <div className={style.btnMobile}>
                        <ButtonOwnerRedact onClick={() => setVisible(true)} />
                    </div>

                    {description ? <div className={style.mainAccount__text}>{description}</div> : <div className={style.mainAccount__text}></div>}

                    <Link href="/account/guest">
                        <ButtonOwnerExit/>
                    </Link>
                </div>

                <div className={style.btnDesktop}>
                    <ButtonOwnerRedact onClick={() => setVisible(true)} />
                </div>
            </div>
        </main>
    );
};

export default MainAccountOwner;
