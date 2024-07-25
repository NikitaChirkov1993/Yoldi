import ButtonForm from "@/components/ui/buttonForm/ButtonForm";
import InputEmail from "@/components/ui/inputForm/InputEmail";
import InputPassword from "@/components/ui/inputForm/InputPassword";
import style from "./../formRegister/styleFormRegister.module.css";
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