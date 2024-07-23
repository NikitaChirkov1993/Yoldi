// "use client";
import classNames from "classnames";
import Image from "next/image";
import style from "./styleUserItem.module.css";
import  {getSplitName} from "./../utilit/utilit"

const UserItem = (props) => {

    const { name, letter } = getSplitName(props.name)

    const classEmailactive = classNames(style.item__rigt_email, style.active_email);

    return (
        <li className={style.item}>
            <div className={style.item__left}>
                <div className={style.item__img}>
                    <div className={style.item__imges}>
                        {props.image ?
                            <Image
                                width={50}
                                height={50}
                                alt="Аватар"
                                src={props.image.url}
                                priority />
                            :
                            letter
                        }
                    </div>
                </div>
                <div className={style.wrapper__name_email}>
                    <p className={style.item__name}>{name}</p>
                    <p className={classEmailactive}>{props.email}</p>
                </div>
            </div>
            <p className={style.item__rigt_email}>{props.email}</p>
        </li>
    );
};

export default UserItem;

{
    /* <li className={style.item}>
<div className={style.header__info_right}>
    <div className={style.img}>
        <div className={style.imges}>{letter}</div>
    </div>
    <p className={style.name}>{name}</p>
</div>
</li> */
}

{
    /* <Image
alt="test"
src={imgtest}
priority
/> */
}
