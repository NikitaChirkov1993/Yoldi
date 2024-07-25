
import ButtonForm from "@/components/ui/buttonForm/ButtonForm";
import InputEmail from "@/components/ui/inputForm/InputEmail";
import InputNameRegister from "@/components/ui/inputForm/InputNameRegister";
import InputPassword from "@/components/ui/inputForm/InputPassword";
import Link from "next/link";
import style from "./styleFormRegister.module.css";
const FormRegister = () => {
    return (
        <form action="" className={style.form}>
            <h2 className={style.form__title}>Регистрация в Yoldi Agency</h2>
            <InputNameRegister />
            <InputEmail />
            <InputPassword />
            <Link href="/login">
                <ButtonForm>Создать аккаунт</ButtonForm>
            </Link>

        </form>
     );
}

export default FormRegister;