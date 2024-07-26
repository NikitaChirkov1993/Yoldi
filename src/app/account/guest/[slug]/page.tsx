"use client"

import { useEffect, useState } from "react";
import { api } from "@/api/api";
import HeaderAccountGuest from "@/components/header/HeaderAccountGuest";
import MainAccountGuest from "@/components/main/MainAccountGuest/MainAccountGuest";

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



    return (
        <div className="wrapper__yoldi">
            <HeaderAccountGuest />
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