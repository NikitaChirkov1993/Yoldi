import Footer from "@/components/footer/Footer";
import MainLoginRegister from "@/components/main/MainLoginRegister";
import Header from "../../components/header/Header";

const Register = () => {
    return (
        <div className="wrapper__yoldi">
            <Header />
            <MainLoginRegister flag={true} />
            <Footer flagfooter={true} />
        </div>
    );
};

export default Register;
