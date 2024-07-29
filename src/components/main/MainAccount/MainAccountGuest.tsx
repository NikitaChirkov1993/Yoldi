import classNames from 'classnames';
import { getSplitName } from "../../utilit/utilit";
import style from "./MainAccount.module.css";

const MainAccountGuest = ({ nameAccount, emailAccount, description, imgAccount, coverAccount }) => {

    const { name, letter } = getSplitName(nameAccount);
    const classCoverNO = classNames(style.block__cover_global , style.block__coverNO);
    const classImgNO = classNames(style.block__img_global, style.block__imgNO);

    const classCoverYES = classNames(style.block__cover_global , style.block__coverYES);
    const classImgYES = classNames(style.block__img_global, style.block__imgYES);

    return (
        <main className={style.mainAccount}>
            {!coverAccount && !imgAccount && (
                <div className={ classCoverNO }>
                    <div className={classImgNO}>
                        {letter}
                    </div>
                </div>
            )}

            {!coverAccount && imgAccount && (
                <div className={ classCoverNO }>
                    <div
                        style={{ backgroundImage: `url(${imgAccount.url})` }}
                        className={classImgYES}
                    >
                    </div>
                </div>
            )}

            {coverAccount && !imgAccount && (
                <div
                    style={{ backgroundImage: `url(${coverAccount.url})` }}
                    className={classCoverYES}
                >
                    <div className={classImgNO}>
                        {letter}
                    </div>
                </div>
            )}

            {coverAccount && imgAccount && (
                <div style={{backgroundImage:`url(${coverAccount.url})`}} className={ classCoverYES }>
                    <div style={{backgroundImage:`url(${imgAccount.url})`}} className={classImgYES}>
                    </div>
                </div>
            )}

            <div className={style.mainAccount__container_left}>
                <h2 className={style.mainAccount__title}>{ name }</h2>
                <div className={style.mainAccount__email}>{emailAccount}</div>
                {description ?
                    <div className={style.mainAccount__text}>{description}</div>
                    :
                    <div className={style.mainAccount__text}></div>
                }
            </div>
        </main>
    );
};

export default MainAccountGuest;
