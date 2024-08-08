"use client";

import { User } from "@/app/accounts/page";
import Image from "next/image";
import Link from "next/link";
import ButtonHeader from "../ui/buttonHeader/ButtonHeader";
import logo from "./../../../public/img/logo-wrapper.jpg";
import style from "./Header.module.css";
import Avatar from "./avatar/Avatar";

const Header = () => {
    const profileFromStorage = localStorage.getItem("profile");
    const profile: User | null = profileFromStorage ? JSON.parse(profileFromStorage) : null;

    return (
        <header className={style.header}>
            <div className={style.left}>
                <Link href="/accounts">
                    <Image  alt="Логотип" className={style.left__img} src={logo} priority />
                </Link>

                <p className={style.text}>Разрабатываем и запускаем сложные веб проекты</p>
            </div>
            {profile
                ?
                <Avatar profile={profile} />
                :
                <Link href="/login">
                    <ButtonHeader>Войти</ButtonHeader>
                </Link>
            }
        </header>
    );
};

export default Header;
