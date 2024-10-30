"use client"

import { api } from "@/api/api";
import ButtonForm from "@/components/UI/ButtonForm/ButtonForm";
import InputNameRegister from "@/components/UI/InputForm/InputNameRegister";
import { ErrorType, RegInfo } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import InputEmailRegister from "../UI/InputForm/InputEmailRegister";
import InputPasswordRegister from "../UI/InputForm/inputPasswordRegister";
import Loading from "../UI/Loading/Loading";
import style from "./Form.module.css";

const FormRegister = () => {
    const [regInfo, setRegInfo] = useState<RegInfo>({ email: '',name: '', password: '' });
    const [isDisabled, setIsDisabled] = useState(true);
    const router = useRouter();
    const [error, setError] = useState<ErrorType>();
    const [loading, setLoading] = useState(false);

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
            setError(undefined);
        }

    }, [regInfo])

    const submitHandlerReg = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        const authData = await api.auth.register(regInfo);
        if (authData.message) {
            setError({ message: authData.message });
            setLoading(false);
        } else if (!authData.error) {
            router.push('/login');
            setLoading(false);
        }
    }

    return (
        <form onSubmit={submitHandlerReg} className={style.form}>
            <h2 className={style.form__title}>Регистрация в Yoldi Agency</h2>
            {loading && <Loading/>}

            {error ? <p style={{ color: "red" }}>{ error.message}</p> : null}
            <InputNameRegister setRegInfo={setRegInfo} regInfo={regInfo} />
            <InputEmailRegister setRegInfo={setRegInfo} regInfo={regInfo} />
            <InputPasswordRegister setRegInfo={setRegInfo} regInfo={regInfo} />
            <ButtonForm onClick={submitHandlerReg} disabled={isDisabled}>Создать аккаунт</ButtonForm>
        </form>
     );
}

export default FormRegister;