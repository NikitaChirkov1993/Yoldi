"use client"

import { api } from "@/api/api";
import Header from "@/components/header/Header";
import { getSplitName } from "@/utilits/utilits";
import classNames from 'classnames';
import { useEffect, useState } from "react";

import style from './styles.module.css';


const AccountGuest = ({ params }: {params: {slug: string}}) => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const usersData = await api.users.getUser(params.slug);
            if (usersData) {
                setData(usersData);
            }
        };

        fetchData();
    }, []);


    if (!data) {
    return <div>Идёт загрузка</div>
    }

    const nameAccount = data.name;
    const emailAccount = data.email;
    const description = data.description;
    const imgAccount = data.image;
    const coverAccount = data.cover;



    const { name, letter } = getSplitName(nameAccount);
    const classCoverNO = classNames(style.block__cover_global , style.block__coverNO);
    const classImgNO = classNames(style.block__img_global, style.block__imgNO);

    const classCoverYES = classNames(style.block__cover_global , style.block__coverYES);
    const classImgYES = classNames(style.block__img_global, style.block__imgYES);

    return (
        <div className="wrapper__yoldi">
            <Header />

            {data ?
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

                    <div className={style.mainAccount__container}>
                        <h2 className={style.mainAccount__title}>{ name }</h2>
                        <div className={style.mainAccount__email}>{emailAccount}</div>
                        {description ?
                            <div className={style.mainAccount__text}>{description}</div>
                            :
                            <div className={style.mainAccount__text}></div>
                        }
                    </div>
                </main>
                :
                null}

        </div>
    );
};

export default AccountGuest;