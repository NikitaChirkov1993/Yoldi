import { User } from "@/types/types";
import { getSplitName } from "@/utils/utils";
import Link from "next/link";
import { FC } from "react";
import style from "./Avatar.module.css";

type AvatarProps = {
    profileParsed: User;
}

const Avatar: FC<AvatarProps> = ({profileParsed}) => {
    const { name, letter } = getSplitName(profileParsed.name);

    return (
        <div className={style.header__info_right}>
            {profileParsed ?
                (<p className={style.name}>{profileParsed.name}</p>)
                :
                (<p className={style.name}>{name}</p>)
            }
            <Link href={`/account/owner/${profileParsed.slug}`}>
                {!profileParsed.image && (<div className={style.img__global}>
                    <div className={style.imges}>{letter}</div>
                </div>)
                }

                {profileParsed.image &&
                (<div style={{ backgroundImage: `url(${profileParsed.image.url})` }} className={style.img__global}>
                    <div  className={style.imges}></div>
                </div>)
                }
            </Link>
        </div>
    );
};

export default Avatar;
