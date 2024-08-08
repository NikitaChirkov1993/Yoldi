import { User } from "@/app/accounts/page";
import { getSplitName } from "@/utilits/utilits";
import Link from "next/link";
import { FC } from "react";
import style from "./Avatar.module.css";

type AvatarProps = {
    profile: User;
}

const Avatar: FC<AvatarProps> = ({profile}) => {
    const { name, letter } = getSplitName(profile.name);

    return (
        <div className={style.header__info_right}>
            {profile ?
                (<p className={style.name}>{profile.name}</p>)
                :
                (<p className={style.name}>{name}</p>)
            }
            <Link href={`/account/owner/${profile.slug}`}>
                {!profile.image && (<div className={style.img__global}>
                    <div className={style.imges}>{letter}</div>
                </div>)
                }

                {profile.image &&
                (<div style={{ backgroundImage: `url(${profile.image.url})` }} className={style.img__global}>
                    <div  className={style.imges}></div>
                </div>)
                }
            </Link>
        </div>
    );
};

export default Avatar;
