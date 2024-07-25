import Footer from "@/components/footer/Footer";
import Main from "@/components/main/Main";
import Header from "../../components/header/Header";
const Register = () => {
    return (
        <div className="wrapper__yoldi">
            <Header />
            <Main flag={true} />
            <Footer flagfooter={true} />
        </div>
    );
};

export default Register;
