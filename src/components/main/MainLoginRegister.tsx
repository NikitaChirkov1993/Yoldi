import FormLogin from "../form/FormLogin";
import FormRegister from "../form/FormRegister";
import style from "./Main.module.css";
const MainLoginRegister = ({ flag }) => {

    return (
         <main className={style.main}>
              {flag ?  <FormRegister/> : <FormLogin/> }
         </main>
    );
    {
    }
};

export default MainLoginRegister;
