"use client"

import ButtonForm from "@/components/ui/buttonForm/ButtonForm";
import InputEmail from "@/components/ui/inputForm/InputEmail";
import InputNameRegister from "@/components/ui/inputForm/InputNameRegister";
import InputPassword from "@/components/ui/inputForm/InputPassword";
import Link from "next/link";
import { useState } from "react";
import style from "./Form.module.css";

const FormRegister = () => {
    const [authInfo, setAuthInfo] = useState({ email: '', password: '' });
    const [isDisabled, setIsDisabled] = useState(true);

    const submitHandler = () => {}

    return (
        <form action="" className={style.form}>
            <h2 className={style.form__title}>Регистрация в Yoldi Agency</h2>
            <InputNameRegister />
            <InputEmail setAuthInfo={setAuthInfo} authInfo={authInfo} />
            <InputPassword setAuthInfo={setAuthInfo} authInfo={authInfo} />
            <Link href="/login">
                <ButtonForm submitHandler={submitHandler} disabled={isDisabled}>Создать аккаунт</ButtonForm>
            </Link>

        </form>
     );
}

export default FormRegister;