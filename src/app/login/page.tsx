import Header from "@/components/01-header/Header";
import Main from "@/components/02-main/Main";
import Footer from "@/components/03-footer/Footer";

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
