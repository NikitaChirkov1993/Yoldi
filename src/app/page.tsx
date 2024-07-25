"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainMaster from "@/components/main/MainMaster";


const Home = () => {
    return (
        <div className="wrapper__yoldi">
            <Header />
            <MainMaster />
            <Footer flagfooter={true}/>

        </div>
    );
};

export default Home;
