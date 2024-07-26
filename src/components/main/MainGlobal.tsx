
import { api } from "@/api/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import UserItem from "../userItem/UserItem";
import UserList from "../userList/UserList";
import style from "./Main.module.css";

const MainGlobal = () => {
    const [data, setData] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            const usersData = await api.users.getUsers();
            if (usersData) {
                setData(usersData);
            }
        };

        fetchData();
    }, []);
    // console.log(data);

    return (
        <main className={style.main__master}>
            <div className={style.container__master}>
                <h1 className={style.title__master}>Список аккаунтов</h1>
                <UserList>
                    {data.map((item) =>
                        <Link key={item.slug} href={`/account/guest/${item.slug}`}>
                            <UserItem
                            name={item.name}
                            email={item.email}
                            image={item.image}
                            />
                        </Link>

                    )}

                </UserList>
            </div>
         </main>
    );
}

export default MainGlobal;