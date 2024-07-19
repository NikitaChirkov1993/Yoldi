import style from "./../formRegister/styleFormRegister.module.css"
import InputEmail from "@/components/UI/inputForm/InputEmail";
import InputPassword from "@/components/UI/inputForm/InputPassword";
import ButtonForm from "@/components/UI/buttonForm/ButtonForm";
const FormLogin = () => {
    return (
        <form action="" className={style.form}>
        <h2 className={style.form__title}>Вход в Yoldi Agency</h2>
        <InputEmail />
        <InputPassword />
        <ButtonForm>Войти</ButtonForm>

    </form>
     );
}

export default FormLogin;