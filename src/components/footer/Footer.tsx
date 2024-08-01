import style from "./Footer.module.css";

const Footer = ({ flagFooter }) => {
    return (
        <footer className={style.footer}>

            {/* {flagFooter ?
                <>
                    <div className={style.footer__text}>Уже есть аккаунт?</div>  <FooterLogin />
                </>

                :
                <>
                    <div className={style.footer__text}>Ещё нет аккаунта?</div>  <FooterRegister />
                </>

            } */}
        </footer>
     );
}

export default Footer;