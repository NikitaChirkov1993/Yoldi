"use client";
import style from "./styleUserList.module.css";



const UserList = ({ children, ...props }) => {

    return (

        <ul className={style.list} {...props}>
            {children}
        </ul>
     );
}

export default UserList;