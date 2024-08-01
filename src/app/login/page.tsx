"use client"

import Footer from "@/components/footer/Footer";
import HeaderAccountGuest from "@/components/header/HeaderAccountGuest";
import MainLoginRegister from "@/components/main/MainLoginRegister";

const Login = () => {
    console.log('рендер login');
    return (
        <div className="wrapper__yoldi">
            <HeaderAccountGuest />
            <MainLoginRegister flag={false}/>
            <Footer flagFooter={false} />
        </div>
    );
};

export default Login;
