import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { getSplitName } from "../../utilit/utilit";
import btnExit from "./../../../../public/img/btn_exit.svg";
import btnRedact from "./../../../../public/img/btn_redact.svg";
import style from "./MainAccount.module.css";
const MainAccountOwner = () => {
    const { name, letter } = getSplitName("Никита");
    const emailAccount = "chrkov31011993@gmail.com";
    const description =
        "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.";
    const classCoverNO = classNames(style.block__cover_global, style.block__coverNO);
    const classImgNO = classNames(style.block__img_global, style.block__imgNO);

    const classBtnRedactDesktop = classNames(style.mainAccount__container_right, style.btnDesktop);
    const classBtnRedactMobile = classNames(style.mainAccount__container_right, style.btnMobile);
    return (
        <main className={style.mainAccount}>
            <div className={classCoverNO}>
                <div className={classImgNO}>{letter}</div>
            </div>
            <div className={style.mainAccount__wrapper}>
                <div className={style.mainAccount__container_left}>
                    <h2 className={style.mainAccount__title}>{name}</h2>

                    <div className={style.mainAccount__email}>{emailAccount}</div>

                    <div className={classBtnRedactMobile}>
                        <button className={style.mainAccount__btn_redact}>
                            <Image src={btnRedact} alt="Редактировать" priority />
                            <p className={style.mainAccount__btn_text}>Редактировать</p>
                        </button>
                    </div>

                    {description ? <div className={style.mainAccount__text}>{description}</div> : <div className={style.mainAccount__text}></div>}

                    <Link href="/account/guest">
                        <button className={style.mainAccount__btn_exit}>
                            <Image src={btnExit} alt="Выйти" priority />
                            <p className={style.mainAccount__btn_text}>Выйти</p>
                        </button>
                    </Link>

                </div>

                <div className={classBtnRedactDesktop}>
                    <button className={style.mainAccount__btn_redact}>
                        <Image src={btnRedact} alt="Редактировать" priority />
                        <p className={style.mainAccount__btn_text}>Редактировать</p>
                    </button>
                </div>
            </div>
        </main>
    );
};

export default MainAccountOwner;
