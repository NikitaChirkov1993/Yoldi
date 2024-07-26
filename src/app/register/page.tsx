import Footer from "@/components/footer/Footer";
import MainLoginRegister from "@/components/main/MainLoginRegister";
import HeaderAccountGuest from "../../components/header/HeaderAccountGuest";

const Register = () => {
    return (
        <div className="wrapper__yoldi">
            <HeaderAccountGuest />
            <MainLoginRegister flag={true} />
            <Footer flagFooter={true} />
        </div>
    );
};

export default Register;
