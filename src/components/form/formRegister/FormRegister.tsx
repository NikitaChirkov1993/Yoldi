
import InputNameRegister from "@/components/UI/inputForm/InputNameRegister";
import style from "./styleFormRegister.module.css"
import InputEmail from "@/components/UI/inputForm/InputEmail";
import InputPassword from "@/components/UI/inputForm/InputPassword";
import ButtonForm from "@/components/UI/buttonForm/ButtonForm";
const FormRegister = () => {
    return (
        <form action="" className={style.form}>
            <h2 className={style.form__title}>Регистрация в Yoldi Agency</h2>
            <InputNameRegister />
            <InputEmail />
            <InputPassword />
            <ButtonForm>Создать аккаунт</ButtonForm>
        </form>
     );
}

export default FormRegister;