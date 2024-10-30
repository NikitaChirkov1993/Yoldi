"use client"

import { api } from "@/api/api";
import ButtonForm from "@/components/UI/ButtonForm1/ButtonForm";
import InputEmail from "@/components/UI/InputForm1/InputEmail";
import InputPassword from "@/components/UI/InputForm1/InputPassword";
import { AuthInfo, ErrorType } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../UI/Loading1/Loading";
import style from "./Form.module.css";

const FormLogin = () => {
    const [authInfo, setAuthInfo] = useState<AuthInfo>({ email: '', password: '' });
    const [error, setError] = useState<ErrorType>();
    const [isDisabled, setIsDisabled] = useState(true);
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (authInfo.email.length >= 5 && authInfo.password.length >= 5) {
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
            setError({});
       }


    }, [authInfo])


    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        const authData = await api.auth.login(authInfo);
        const profileData = await api.profile.getProfile(authData.value);

        if (!authData.error) {
            if (!profileData.error) {
                router.push('/accounts');
                localStorage.setItem("authValueStored", JSON.stringify(authData));
                localStorage.setItem("authInfoStored", JSON.stringify(authInfo));
                localStorage.setItem("profileStored", JSON.stringify(profileData));
                setLoading(false);
            }
        }

        if (authData.error) {
            setError(authData);
            setLoading(false);
        }
    }

    return (

        <form onSubmit={submitHandler} className={style.form} >
            {loading && <Loading/>}
            <h2 className={style.form__title}>Вход в Yoldi Agency</h2>

            {error ? <p style={{ color: "red" }}>{ error.message}</p> : null}
            <InputEmail setAuthInfo={setAuthInfo} authInfo={authInfo} />

            <InputPassword  setAuthInfo={setAuthInfo} authInfo={authInfo} />

            <ButtonForm  onClick={submitHandler} disabled={isDisabled}>Войти</ButtonForm>
        </form>
    );
};

export default FormLogin;
