"use client"
import HeaderNameImg from "../headerNameImg/HeaderNameImg";
import style from "./styleUserItem.module.css";



const UserItem = () => {

    function headerName() {
        const name = "Никита";
        const letter = name.split("")[0];
        const email = "chirkov31011993@gmail.com"
        return { name, letter, email }
    };
    const { name, letter, email } = headerName();


    return (
        <li className={style.item}>
            <div className={style.item__left}>
                <div className={style.item__img}>
                    <div className={style.item__imges}>{letter}</div>
                </div>
                <p className={style.item__name}>{name}</p>
            </div>
            <div className={style.item__rigt_text}>
                {email}
            </div>

        </li>
    );
};

export default UserItem;

{/* <li className={style.item}>
<div className={style.header__info_right}>
    <div className={style.img}>
        <div className={style.imges}>{letter}</div>
    </div>
    <p className={style.name}>{name}</p>
</div>
</li> */}
