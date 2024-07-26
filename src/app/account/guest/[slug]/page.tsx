"use client"

import { api } from "@/api/api";
import Header from "@/components/header/Header";
import MainAccountGuest from "@/components/main/MainAccountGuest/MainAccountGuest";
import { useEffect, useState } from "react";

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
    // console.log(data,"data");



    return (
        <div className="wrapper__yoldi">
            <Header />
            {data ?
                <MainAccountGuest
                    nameAccount={data.name}
                    emailAccount={data.email}
                    description={data.description}
                    imgAccount={data.image}
                    coverAccount={data.cover}
                />
                :
                null}

        </div>
    );
};

export default AccountGuest;