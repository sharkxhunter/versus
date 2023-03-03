import { Typography, MTNavbar } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import img1 from "./Frame 3737.png";

export default function () {
    return (
        <div className="mt-20">
            <Typography  variant="h2" color="blue-gray" className="mb-10 mt-8" >Company Analysis</Typography>
            <div className="mt-15 flex w-full">
                <div
                    className={`bg-white inset-0 rounded-xl transition-transform duration-300 xl:translate-x-0 mr-5 shadow-2xl hidden lg:block`}
                    >
                    <div
                        className={`flex flex-col relative border-b company-link-container`}
                    >
                        <Link to="/" className="gap-4 p-10 flex border-b">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                            </svg>
                            <span className="company-link-caption">DASHBOARD</span>
                            
                        </Link>
                        <Link to="/" className="gap-4 py-6 px-8 company-link active">
                            Company Ranking
                        </Link>
                        <Link to="/" className="gap-4 py-6 px-8 company-link">
                            Company brand
                        </Link>
                        <Link to="/" className="gap-4 py-6 px-8 company-link">
                            Brand SKU
                        </Link>
                        <Link to="/" className="gap-4 py-6 px-8 company-link">
                            Competitive analysis
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={img1} alt="" className="w-full" />
                </div>
            </div>
        </div>
    );
}