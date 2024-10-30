import Footer from "@/components/Footer/Footer";
import FormLogin from "@/components/Form1/FormLogin";
import Header from "@/components/Header/Header";

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
