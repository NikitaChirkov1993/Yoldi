"use client"

import { api } from "@/api/api";
import ButtonForm from "@/components/ui/buttonForm/ButtonForm";
import InputNameRegister from "@/components/ui/inputForm/InputNameRegister";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import InputEmailRegister from "../ui/inputForm/InputEmailRegister";
import InputPasswordRegister from "../ui/inputForm/inputPasswordRegister";
import style from "./Form.module.css";

export type RegInfo = {
    email: string;
    name: string;
    password: string;
}

const FormRegister = () => {
    const [regInfo, setRegInfo] = useState<RegInfo>({ email: '',name: '', password: '' });
    const [isDisabled, setIsDisabled] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (regInfo.email.length >= 5 && regInfo.password.length >= 5 && regInfo.name.length >= 1) {
            setIsDisabled(false);
        }

    }, [regInfo])

    const submitHandlerReg = async (event: React.FormEvent) => {
        event.preventDefault();
        const authData = await api.auth.register(regInfo);
        console.log(authData, 'authData');
        if (!authData.error) {
            router.push('/login');
        }
    }

    return (
        <form onSubmit={submitHandlerReg} className={style.form}>
            <h2 className={style.form__title}>Регистрация в Yoldi Agency</h2>
            <InputNameRegister setRegInfo={setRegInfo} regInfo={regInfo} />
            <InputEmailRegister setRegInfo={setRegInfo} regInfo={regInfo} />
            <InputPasswordRegister setRegInfo={setRegInfo} regInfo={regInfo} />
            <ButtonForm onClick={submitHandlerReg} disabled={isDisabled}>Создать аккаунт</ButtonForm>
        </form>
     );
}

export default FormRegister;