import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainLoginRegister from "@/components/main/MainLoginRegister";

const Login = () => {
    return (
        <div className="wrapper__yoldi">
            <Header />
            <MainLoginRegister flag={false}/>
            <Footer flagfooter={false} />
        </div>
    );
};

export default Login;
