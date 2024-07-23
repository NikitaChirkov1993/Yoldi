"use client";

import Header from "@/components/01-header/Header";
import Main from "@/components/02-main/Main";
import MainMaster from "@/components/02-main/MainMaster";
import Footer from "@/components/03-footer/Footer";


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
