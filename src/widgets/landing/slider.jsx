import SliderBG from "./slider.png";
import { Typography, Input, Button } from "@material-tailwind/react";

export default function () {
    return (
        <div className="w-full relative slider" style={{
            background: "linear-gradient(166.62deg, rgba(244, 102, 202, 0.98) 8.87%, rgba(247, 186, 229, 0.85) 49.63%, rgba(255, 255, 255, 0.9) 90.39%)", 
            // backgroundImage:"url{SliderBG}",
            // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            boxShadow: "0px 18px 47px 0px #7A7A7A33",
            overflow: "hidden",
            }} >
            <img src={SliderBG} alt="slider" className="object-cover absolute" style={{
                opacity:".1",
                backgroundColor:"#F6F5FA",
                zIndex:"0",
                minWidth:"100%",
                minHeight:"100%"
            }}/>
            <div className="w-full h-full place-content-center items-center p-20" style={{zIndex:2, position:"inherit"}}>
                <Typography variant="h2" className="text-center lg:pb-10 md:pb-10 lg:px-100 md:px-30 sm:px-10 slider-title">
                    <span className="text-red-900" style={{fontSize:"3rem"}}>
                        VERSUS™ 
                    </span>
                    offers access to user-friendly analysis and visualization of anonymised dispensing data collected from the retail pharmacies.
                </Typography>
                <div className="flex w-full mt-20 mb-0 justify-between">
                    <input placeholder="Search for company name/ATC code/Brand" className="slider-input grow"></input>
                    <input placeholder="Period" className="slider-input shrink"></input>
                    <input placeholder="Product Analysis" className="slider-input shrink"></input>
                    <Button className="rounded-lg slider-input bg-purplebrown grow">View Data</Button>
                </div>
            </div>
        </div>
    );
}