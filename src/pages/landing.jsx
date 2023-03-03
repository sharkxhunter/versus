import Navbar from "@/widgets/landing/navbar";
import Slider from "@/widgets/landing/slider";
import Footer from "@/widgets/landing/footer";
import Contact from "@/widgets/landing/contact";
import Service from "@/widgets/landing/service";
import Analysis from "@/widgets/landing/company";
import MainContainer from "@/widgets/landing/maincontainer";

export default function(){
    return (
        <div className="isolate bg-white flex flex-col min-h-fullvh place-content-between landing">
            <Navbar></Navbar>
            <Slider></Slider>
            <MainContainer>
                <Service></Service>
                <Analysis></Analysis>
                <Contact></Contact>
            </MainContainer>
            <Footer></Footer>
        </div>
    );
}