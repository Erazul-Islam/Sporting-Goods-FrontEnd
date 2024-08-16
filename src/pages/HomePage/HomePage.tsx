import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import InteractiveLogo from "../../components/Logo/Logo";
import Contact from "./Contact";
import Featured from "./Featured";

export default function HomePage() {
  return (
    <div >
      <div className="flex mt-8 lg:ml-8 justify-center  md:justify-center lg:justify-between">
        <InteractiveLogo />   
      </div>
      <Carousel></Carousel>
      <Featured></Featured>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}
