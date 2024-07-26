import Footer from "@/components/footer/Footer";
import HeaderAccountGuest from "@/components/header/HeaderAccountGuest";
import MainLoginRegister from "@/components/main/MainLoginRegister";

const Login = () => {
    return (
        <div className="wrapper__yoldi">
            <HeaderAccountGuest />
            <MainLoginRegister flag={false}/>
            <Footer flagfooter={false} />
        </div>
    );
};

export default Login;
