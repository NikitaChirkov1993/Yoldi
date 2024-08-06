"use client";

import Image from "next/image";
import Link from "next/link";
import ButtonHeader from "../ui/buttonHeader/ButtonHeader";
import logo from "./../../../public/img/logo-wrapper.jpg";
import style from "./Header.module.css";
import Avatar from "./avatar/Avatar";

const Header = () => {
    const getProfile = localStorage.getItem("getProfile");
    const profile = getProfile ? JSON.parse(getProfile) :  null;


    console.log(profile,"profile");



    return (
        <header className={style.header}>
            <div className={style.left}>
                <Link href="/accounts">
                    <Image  alt="Логотип" className={style.left__img} src={logo} priority />
                </Link>

                <p className={style.text}>Разрабатываем и запускаем сложные веб проекты</p>
            </div>
            {getProfile
                ?
                <Avatar
                    naming={profile.name}
                    image={profile.image}
                />
                :
                <Link href="/login">
                    <ButtonHeader>Войти</ButtonHeader>
                </Link>
            }
        </header>
    );
};

export default Header;

// const getProfile = localStorage.getItem('getProfile');
// let profile = null;

// if (getProfile) {
// try {
//     profile = JSON.parse(getProfile);
// } catch (error) {
//     console.error('Error parsing JSON from localStorage', error);
// }
// }

// if (profile && profile.name) {
//     console.log(profile.name);
//   } else {
//     console.log('Profile or name not found');
// }
