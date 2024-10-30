"use client";

import { User } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ButtonHeader from "../UI/ButtonHeader/ButtonHeader";
import logo from "./../../../public/img/logo-wrapper.jpg";
import Avatar from "./Avatar/Avatar";
import style from "./Header.module.css";

const Header = () => {
    const [profileParsed, setProfileParsed] = useState<User | null>(null);

    useEffect(() => {
        const profileStored = localStorage.getItem("profileStored");
        if (profileStored) {
            setProfileParsed(JSON.parse(profileStored) as User);
        }
    }, []);

    return (
        <header className={style.header}>
            <div className={style.left}>
                <Link href="/accounts">
                    <Image  alt="Логотип" className={style.left__img} src={logo} priority />
                </Link>

                <p className={style.text}>Разрабатываем и запускаем сложные веб проекты</p>
            </div>
            {profileParsed
                ?
                <Avatar profileParsed={profileParsed} />
                :
                <Link href="/login">
                    <ButtonHeader>Войти</ButtonHeader>
                </Link>
            }
        </header>
    );
};

export default Header;
