import { getSplitName } from "@/utilits/utilits";
import Link from "next/link";
import style from "./Avatar.module.css";

const Avatar = ({ naming,image }) => {
    const {name,letter} = getSplitName(naming)
    return (
        <div className={style.header__info_right}>
            <p className={style.name}>{name}</p>
            <Link href="/account/owner">
                {!image && (<div className={style.img__global}>
                    <div className={style.imges}>{letter}</div>
                </div>)}

                {image && (<div style={{ backgroundImage: `url(${image.url})` }} className={style.img__global}>
                    <div  className={style.imges}></div>
                </div>)}
            </Link>
        </div>
    );
};

export default Avatar;
