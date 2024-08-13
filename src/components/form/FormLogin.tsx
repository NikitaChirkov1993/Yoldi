"use client"

import { api } from "@/api/api";
import ButtonForm from "@/components/ui/buttonForm/ButtonForm";
import InputEmail from "@/components/ui/inputForm/InputEmail";
import InputPassword from "@/components/ui/inputForm/InputPassword";
import { AuthInfo, ErrorType } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./Form.module.css";

const FormLogin = () => {
    const [authInfo, setAuthInfo] = useState<AuthInfo>({ email: '', password: '' });
    const [error, setError] = useState<ErrorType>();

    const [isDisabled, setIsDisabled] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (authInfo.email.length >= 5 || authInfo.password.length >= 5) {
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
            setError({});
       }


    }, [authInfo])


    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        const authData = await api.auth.login(authInfo);
        const profileData = await api.profile.getProfile(authData.value);

        if (!authData.error) {
            if (!profileData.error) {
                router.push('/accounts');
                localStorage.setItem("authValueStored", JSON.stringify(authData));
                localStorage.setItem("authInfoStored", JSON.stringify(authInfo));
                localStorage.setItem("profileStored", JSON.stringify(profileData));
            }
        }

        if (authData.error) {
            setError(authData);
        }
    }

    return (
        <form onSubmit={submitHandler}  className={style.form} >
            <h2 className={style.form__title}>Вход в Yoldi Agency</h2>

            {error ? <p style={{ color: "red" }}>{ error.message}</p> : null}
            <InputEmail setAuthInfo={setAuthInfo} authInfo={authInfo} />

            <InputPassword setAuthInfo={setAuthInfo} authInfo={authInfo} />

            <ButtonForm  onClick={submitHandler} disabled={isDisabled}>Войти</ButtonForm>
        </form>
    );
};

export default FormLogin;
