import Footer from "@/components/Footer/Footer";
import FormRegister from "@/components/Form1/FormRegister";
import Header from "../../components/Header1/Header";

const Register = () => {
    return (
        <div className="wrapper__yoldi">
            <Header />
            <main className="main">
                <FormRegister />
            </main>
            <Footer flag={true} />
        </div>
    );
};

export default Register;
