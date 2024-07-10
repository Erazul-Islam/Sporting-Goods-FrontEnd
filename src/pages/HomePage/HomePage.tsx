import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Contact from "./Contact";
import Featured from "./Featured";

export default function HomePage() {
  return (
    <div >
      <Carousel></Carousel>
      <Featured></Featured>
      <Contact></Contact>
      {/* <div>
        <Footer></Footer>
      </div> */}
    </div>
  )
}
