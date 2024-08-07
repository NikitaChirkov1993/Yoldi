"use client"

import { api } from "@/api/api";
import ButtonForm from "@/components/ui/buttonForm/ButtonForm";
import InputEmail from "@/components/ui/inputForm/InputEmail";
import InputPassword from "@/components/ui/inputForm/InputPassword";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./Form.module.css";

export type AuthInfo = {
    email: string;
    password: string;
}

const FormLogin = () => {
    const [authInfo, setAuthInfo] = useState<AuthInfo>({ email: '', password: '' });


    const [isDisabled, setIsDisabled] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (authInfo.email.length >= 5 && authInfo.password.length >= 5) {
            setIsDisabled(false);
        }

    }, [authInfo])


    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        const authData = await api.auth.login(authInfo);
        const profile = await api.profile.getProfile(authData.value);
        localStorage.setItem("authData", JSON.stringify(authData));
        localStorage.setItem("password", JSON.stringify(authInfo));

        if (!authData.error) {
            if (!profile.error) {
                router.push('/accounts');
                localStorage.setItem("getProfile", JSON.stringify(profile));
                console.log(profile,"profile");
            }
        }
    }



    return (
        <form onSubmit={submitHandler}  className={style.form} >
            <h2 className={style.form__title}>Вход в Yoldi Agency</h2>
            <InputEmail setAuthInfo={setAuthInfo} authInfo={authInfo} />
            <InputPassword setAuthInfo={setAuthInfo} authInfo={authInfo} />
            <ButtonForm  onClick={submitHandler} disabled={isDisabled}>Войти</ButtonForm>
        </form>
    );
};

export default FormLogin;
