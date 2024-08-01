"use client"

import { memo } from "react";
import FormLogin from "../form/FormLogin";
import style from "./Main.module.css";

const MainLoginRegister = memo(({ flag }) => {
     console.log('рендер MainLoginRegister');
    return (
         <main className={style.main}>
               <FormLogin/>
         </main>
    );
    {
    }
});

export default MainLoginRegister;
