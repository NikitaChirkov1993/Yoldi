import style from "./styleFooter.module.css"
const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__text}>Уже есть аккаунт?</div>
            <button className={style.footer__btn}>Войти</button>
        </footer>
     );
}

export default Footer;