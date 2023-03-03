import { Typography } from "@material-tailwind/react";
import localtionIMG from "./location.svg";

export default function () {
    return (
        <div className="w-full text-white px-20 py-4 footer" style={{backgroundColor:"#11040F"}}>
            <Typography className="footer-caption">
                &copy;
                2022 PBR
                <span className="ml-10">
                    Privacy .
                </span>
                <span className="ml-10">
                    Terms
                </span>
            </Typography>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 footer-info">
                <div className="flex">
                    <img src={localtionIMG} alt="location" />
                    <Typography className="pl-5">
                        PBR International
                        <br />
                        Kemp House, 152-160 City  Road,London EC1V 2NX,United Kingdom
                    </Typography>
                </div>
                <div>
                    <Typography>
                        PBR Sub-Saharan Africa
                        <br />
                        70B Olorunlogbon Street,Anthony Village,Lagos,Nigeria
                    </Typography>
                </div>
            </div>
            <hr className="my-10 mx-10 border-red-900 opacity-20" />
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 mb-20">
                <div>
                    <Typography variant="h5" className="mb-5 footer-link-category">
                        About us
                    </Typography>
                    <Typography className="leading-10 footer-link">
                        Our story
                        <br />
                        Contact Us
                        <br />
                        Career
                    </Typography>
                </div>
                <div>
                    <Typography variant="h5" className="mb-5 footer-link-category">
                    Data products
                    </Typography>
                    <Typography className="leading-10 footer-link">
                        INVISIO
                        <br />
                        SONUS
                        <br />
                        VERSUS
                        <br />
                        MARKETSIZER
                    </Typography>
                </div>
                <div>
                    <Typography variant="h5" className="mb-5 footer-link-category">
                    Digital Product
                    </Typography>
                    <Typography className="leading-10 footer-link">
                        ANTERIS
                        <br />
                        HCPVoice
                    </Typography>
                </div>
                <div>
                    <Typography variant="h5" className="mb-5 footer-link-category">
                    Services
                    </Typography>
                    <Typography className="leading-10 footer-link">
                    Commercialization
                        <br />
                        Patient Management
                        <br />
                        Primary Market Research
                    </Typography>
                </div>
                <div>
                    <Typography variant="h5" className="mb-5 footer-link-category">
                    Use cases
                    </Typography>
                    <Typography className="leading-10 footer-link">
                    INVISIO
                        <br />
                        Primary Market Research
                    </Typography>
                </div>
                <div>
                    <Typography variant="h5" className="mb-5 footer-link-category">
                    Follow us
                    </Typography>
                    <Typography className="leading-10 footer-link">
                    Facebook
                        <br />
                        Twitter
                        <br />
                        LinkedIn
                    </Typography>
                </div>
            </div>
        </div>
    );
}