"use client";
import style from "./UserList.module.css";



const UserList = ({ children, ...props }) => {

    return (

        <ul className={style.list} {...props}>
            {children}
        </ul>
     );
}

export default UserList;