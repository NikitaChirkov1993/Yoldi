import Footer from "@/components/Footer/Footer";
import FormRegister from "@/components/Form/FormRegister";
import Header from "../../components/Header/Header";

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
