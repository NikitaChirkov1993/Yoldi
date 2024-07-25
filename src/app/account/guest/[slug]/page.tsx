"use client"

import { api } from "@/api/api";
import Header from "@/components/header/Header";
import MainAccount from "@/components/main/mainAccount/MainAccount";
import { useEffect, useState } from "react";

const Account = ({ params }: {params: {slug: string}}) => {
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
                <MainAccount
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

export default Account;