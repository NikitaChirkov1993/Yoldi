import Main from "@/components/02-main/Main";
import Header from "./../components/01-header/Header"
import Footer from "@/components/03-footer/Footer";

const Home = () => {
  return (
    <div className="wrapper__yoldi">
      <Header />
      <Main flag={true} />
      <Footer flagfooter={true} />
    </div>


  );
}

export default Home;