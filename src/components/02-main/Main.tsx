import FormRegister from "../form/formRegister/FormRegister";
import style from "./styleMain.module.css"
const Main = () => {
    return (
        <main className={style.main} >
            <FormRegister/>
        </main>
     );
}

export default Main;