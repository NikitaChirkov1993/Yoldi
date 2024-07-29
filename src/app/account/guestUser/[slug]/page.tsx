"use client"

import { api } from "@/api/api";
import HeaderAccountGuest from "@/components/header/HeaderAccountGuest";
import HeaderAccountOwner from "@/components/header/HeaderAccountOwner";
import MainAccountGuest from "@/components/main/MainAccount/MainAccountGuest";
import { useEffect, useState } from "react";

const AccountGuestUser = ({ params }: {params: {slug: string}}) => {
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

            {<HeaderAccountGuest /> && <HeaderAccountOwner/>}
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

export default AccountGuestUser;