import FormLogin from "../form/FormLogin";
import FormRegister from "../form/FormRegister";
import style from "./styleMain.module.css";
const Main = ({ flag }) => {

    return (
         <main className={style.main}>
              {flag ?  <FormRegister/> : <FormLogin/> }
         </main>
    );
    {
    }
};

export default Main;