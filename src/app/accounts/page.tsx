"use client";

import { api } from "@/api/api";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Loading from "@/components/UI/Loading/Loading";
import UserItem from "@/components/UserItem/UserItem";
import UserList from "@/components/UserList/UserList";
import { User } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from './styles.module.css';

const Accounts = () => {

    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const usersData = await api.users.getUsers();
            if (usersData) {
                setData(usersData);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="wrapper__yoldi">
            <Header />
            {loading && <Loading/>}
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
