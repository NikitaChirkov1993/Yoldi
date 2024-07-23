
import { useEffect, useState } from "react";
import UserItem from "../userItem/UserItem";
import UserList from "../userList/UserList";
import style from "./styleMain.module.css";
import { api } from "@/api/api";
import { log } from "console";

const MainMaster = () => {
    const [data, setData] = useState([]);
    // console.log(data);


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
                    {data.map((item) =>
                        <UserItem
                            name={item.name}
                            email={item.email}
                            key={item.slug}
                            image={item.image}

                        />
                    )}

                </UserList>
            </div>
         </main>
    );
}

export default MainMaster;