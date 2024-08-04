"use client"

import { api } from "@/api/api";
import ButtonForm from "@/components/ui/buttonForm/ButtonForm";
import InputEmail from "@/components/ui/inputForm/InputEmail";
import InputNameRegister from "@/components/ui/inputForm/InputNameRegister";
import InputPassword from "@/components/ui/inputForm/InputPassword";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./Form.module.css";

export type AuthInfo = {
    email: string;
    password: string;
}

export type RegistrInfo = {
    name: string;
}

const FormRegister = () => {
    const [regInfo, setRegInfo] = useState<RegistrInfo>({ name: '' });
    const [authInfo, setAuthInfo] = useState<AuthInfo>({ email: '', password: '' });
    const genaralInfo = {...authInfo}
    const [isDisabled, setIsDisabled] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (authInfo.email.length >= 5 && authInfo.password.length >= 5 && regInfo.name.length >= 1) {
            setIsDisabled(false);
        }

    }, [authInfo])

    const submitHandlerReg = async (event: React.FormEvent) => {
        event.preventDefault();
        const authData = await api.auth.register({authInfo});
        console.log(authData, 'authData');
        if (!authData.ok) {
            router.push('/login');
        }
    }



    return (
        <form onSubmit={submitHandlerReg} className={style.form}>
            <h2 className={style.form__title}>Регистрация в Yoldi Agency</h2>
            <InputNameRegister setRegInfo={setRegInfo} regInfo={regInfo} />
            <InputEmail setAuthInfo={setAuthInfo} authInfo={authInfo} />
            <InputPassword setAuthInfo={setAuthInfo} authInfo={authInfo} />
                <ButtonForm onClick={submitHandlerReg} disabled={isDisabled}>Создать аккаунт</ButtonForm>
        </form>
     );
}

export default FormRegister;