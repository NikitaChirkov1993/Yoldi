"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainGlobal from "@/components/main/MainGlobal";


const Home = () => {
    return (
        <div className="wrapper__yoldi">
            <Header />
            <MainGlobal />
            <Footer flagfooter={true}/>

        </div>
    );
};

export default Home;
