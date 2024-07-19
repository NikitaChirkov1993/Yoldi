import FooterFalse from "./FooterFalse";
import FooterTrue from "./FooterTrue";
import style from "./styleFooter.module.css"
const Footer = ({flagfooter}) => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__text}>Уже есть аккаунт?</div>
            {flagfooter ? <FooterTrue/> : <FooterFalse/>}
        </footer>
     );
}

export default Footer;