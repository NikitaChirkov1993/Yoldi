"use client";

import Footer from "@/components/footer/Footer";
import HeaderAccountGuest from "@/components/header/HeaderAccountGuest";
import MainGlobal from "@/components/main/MainGlobal";


const Home = () => {
    return (
        <div className="wrapper__yoldi">
            <HeaderAccountGuest />
            <MainGlobal />
            <Footer flagfooter={true}/>
        </div>
    );
};

export default Home;
