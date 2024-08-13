"use client"

import { api } from "@/api/api";
import ButtonForm from "@/components/ui/buttonForm/ButtonForm";
import InputNameRegister from "@/components/ui/inputForm/InputNameRegister";
import { ErrorType, RegInfo } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import InputEmailRegister from "../ui/inputForm/InputEmailRegister";
import InputPasswordRegister from "../ui/inputForm/inputPasswordRegister";
import style from "./Form.module.css";

const FormRegister = () => {
    const [regInfo, setRegInfo] = useState<RegInfo>({ email: '',name: '', password: '' });
    const [isDisabled, setIsDisabled] = useState(true);
    const router = useRouter();
    const [error, setError] = useState<ErrorType>();

    useEffect(() => {
        if (regInfo.name.length >= 3) {
            setIsDisabled(false);
        }

        if (regInfo.password.length >= 5) {
            setIsDisabled(false);
        }

        if (regInfo.email.length>=3) {
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
            setError({})
        }

    }, [regInfo])

    const submitHandlerReg = async (event: React.FormEvent) => {
        event.preventDefault();
        const authData = await api.auth.register(regInfo);
        if (authData.message) {
            setError({ message: authData.message });
        } else if (!authData.error) {
            router.push('/login');
        }
    }
    console.log(error,"ОШИБКА ОШИБКА");


    return (
        <form onSubmit={submitHandlerReg} className={style.form}>
            <h2 className={style.form__title}>Регистрация в Yoldi Agency</h2>

            {error ? <p style={{ color: "red" }}>{ error.message}</p> : null}
            <InputNameRegister setRegInfo={setRegInfo} regInfo={regInfo} />
            <InputEmailRegister setRegInfo={setRegInfo} regInfo={regInfo} />
            <InputPasswordRegister setRegInfo={setRegInfo} regInfo={regInfo} />
            <ButtonForm onClick={submitHandlerReg} disabled={isDisabled}>Создать аккаунт</ButtonForm>
        </form>
     );
}

export default FormRegister;