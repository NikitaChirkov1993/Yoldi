import FooterRegister from "./FooterRegister";
import FooterLogin from "./FooterLogin";
import style from "./styleFooter.module.css"
const Footer = ({flagfooter}) => {
    return (
        <footer className={style.footer}>

            {flagfooter ?
                <>
                    <div className={style.footer__text}>Уже есть аккаунт?</div>  <FooterLogin />
                </>

                :
                <>
                    <div className={style.footer__text}>Ещё нет аккаунта?</div>  <FooterRegister />
                </>

            }
        </footer>
     );
}

export default Footer;