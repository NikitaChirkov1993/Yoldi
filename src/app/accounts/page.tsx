"use client";

import { api } from "@/api/api";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import UserItem from "@/components/userItem/UserItem";
import UserList from "@/components/userList/UserList";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from './styles.module.css';

type User = {
    name: string,
    email: string,
    slug: string,
    description: string,
    image: {
        id: string,
        url: string,
        width: string,
        height: string
    },
    cover: {
        id: string,
        url: string,
        width: string,
        height: string
    }
}

const Accounts = () => {

    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const usersData = await api.users.getUsers();
            if (usersData) {
                setData(usersData);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="wrapper__yoldi">
            <Header />
            <main className={style.main__master}>
                <div className={style.container__master}>
                    <h1 className={style.title__master}>Список аккаунтов</h1>
                    <UserList>
                        {data.map((item) =>
                            <Link key={item.slug} href={`/account/guest/${item.slug}`}>
                                <UserItem
                                    slug={item.slug}
                                    name={item.name}
                                    email={item.email}
                                    image={item.image}
                                />
                            </Link>

                        )}
                    </UserList>
                </div>
            </main>
            <Footer flag={true}/>
        </div>
    );
};

export default Accounts;
