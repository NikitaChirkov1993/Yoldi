
import { useEffect, useState } from "react";
import UserItem from "../userItem/UserItem";
import UserList from "../userList/UserList";
import style from "./styleMain.module.css";
import { api } from "@/api/api";

const MainMaster = () => {
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

    return (
        <main className={style.main__master}>
            <div className={style.container__master}>
                <h1 className={style.title__master}>Список аккаунтов</h1>
                <UserList>
                    <UserItem />
                </UserList>
            </div>
         </main>
    );
}

export default MainMaster;