"use client"

import { api } from "@/api/api";
import ButtonForm from "@/components/ui/buttonForm/ButtonForm";
import InputEmail from "@/components/ui/inputForm/InputEmail";
import InputPassword from "@/components/ui/inputForm/InputPassword";
import { redirect } from "next/navigation";
import { memo, useEffect, useState } from "react";
import style from "./Form.module.css";

export type AuthInfo = {
    email: string;
    password: string;
}

const FormLogin = memo(() => {
    const [authInfo, setAuthInfo] = useState<AuthInfo>({ email: '', password: '' });
    const [isDisabled, setIsDisabled] = useState(true);
    console.log(authInfo, 'authInfo');

    useEffect(() => {
        if (authInfo.email.length >= 5 && authInfo.password.length >= 5) {
            setIsDisabled(false);
        }

    }, [authInfo])

    const submitHandler = async () => {

        console.log('клик');
        const authData = await api.auth.login(authInfo);
            if (authData.ok) {
                redirect('/account/owner');
            }
    }

    return (
        <form className={style.form} >
            <h2 className={style.form__title}>Вход в Yoldi Agency</h2>
            <InputEmail setAuthInfo={setAuthInfo} authInfo={authInfo} />
            <InputPassword setAuthInfo={setAuthInfo} authInfo={authInfo} />
            <ButtonForm submitHandler={submitHandler} disabled={isDisabled}>Войти</ButtonForm>
        </form>
    );
});

export default FormLogin;
