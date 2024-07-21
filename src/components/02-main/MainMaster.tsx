
import UserItem from "../userItem/UserItem";
import UserList from "../userList/UserList";
import style from "./styleMain.module.css";

const MainMaster = ({ getUserdApi }) => {

    return (

        <main className={style.main__master}>
            <div className={style.container__master}>
                <h1 className={style.title__master}>Список аккаунтов</h1>
                <UserList>
                    <UserItem/>
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                </UserList>
            </div>
         </main>
     );
}

export default MainMaster;