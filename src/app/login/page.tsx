import Footer from "@/components/footer/Footer";
import FormLogin from "@/components/form/FormLogin";
import Header from "@/components/header/Header";

const Login = () => {
    return (
        <div className="wrapper__yoldi">
            <Header />
            <main className="main">
                <FormLogin />
            </main>
            <Footer flag={false} />
        </div>
    );
};

export default Login;
