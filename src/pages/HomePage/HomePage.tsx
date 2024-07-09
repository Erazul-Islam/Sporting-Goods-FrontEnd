import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Contact from "./Contact";
import Featured from "./Featured";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-r from-custom-purple to-custom-blue h-screen">
      <Carousel></Carousel>
      <Featured></Featured>
      <Contact></Contact>
      <div className="bg-gradient-to-r from-custom-purple to-custom-blue h-screen">
        <Footer></Footer>
      </div>
    </div>
  )
}
