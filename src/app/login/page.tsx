import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";

const Login = () => {
    return (
        <div className="wrapper__yoldi">
            <Header />
            <Main flag={false}/>
            <Footer flagfooter={false} />
        </div>
    );
};

export default Login;
