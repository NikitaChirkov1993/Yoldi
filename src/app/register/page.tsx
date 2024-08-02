import Footer from "@/components/footer/Footer";
import FormRegister from "@/components/form/FormRegister";
import Header from "../../components/header/Header";

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
