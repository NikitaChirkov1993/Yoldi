import ButtonOwnerExit from "@/components/ui/buttonOwnerUser/ButtonOwnerExit";
import ButtonOwnerRedact from "@/components/ui/buttonOwnerUser/ButtonOwnerRedact";
import classNames from "classnames";
import Link from "next/link";
import { getSplitName } from "../../utilit/utilit";
import style from "./MainAccount.module.css";

const MainAccountOwner = () => {
    const { name, letter } = getSplitName("Никита");
    const emailAccount = "chrkov31011993@gmail.com";
    const description = "Рыбатекст ";

    const classCoverOwner = classNames(style.block__cover_global, style.block__coverOwner);
    const classImgOwner = classNames(style.block__img_global, style.block__imgOwner);

    const classBtnRedactDesktop = classNames(style.mainAccount__container_right, style.btnDesktop);
    const classBtnRedactMobile = classNames(style.mainAccount__container_right, style.btnMobile);
    return (
        <main className={style.mainAccount}>
            <div className={classCoverOwner}>
                <button type="button" className={classImgOwner}>
                    {/* <input type="file" style={{display:"none"}} /> */}
                    <p>{letter}</p>
                </button>
            </div>
            <div className={style.mainAccount__wrapper}>
                <div className={style.mainAccount__container_left}>
                    <h2 className={style.mainAccount__title}>{name}</h2>

                    <div className={style.mainAccount__email}>{emailAccount}</div>

                    <div className={classBtnRedactMobile}>
                        <ButtonOwnerRedact />
                    </div>

                    {description ? <div className={style.mainAccount__text}>{description}</div> : <div className={style.mainAccount__text}></div>}

                    <Link href="/account/guest">
                        <ButtonOwnerExit/>
                    </Link>
                </div>

                <div className={classBtnRedactDesktop}>
                    <ButtonOwnerRedact />
                </div>
            </div>
        </main>
    );
};

export default MainAccountOwner;
