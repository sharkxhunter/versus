import { Typography, Button } from "@material-tailwind/react";
import contactIMG from "./contact.jfif";
import locationIMG from "./location.svg";

export default function () {
    return (
        <div className="mt-20">
            <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="relative min-h-100 bg-red-800 rounded-xl overflow-hidden">
                    <img src={contactIMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" loading="lazy" />
                </div>
                <div className="relative">
                    <Button className="contact-btn" variant="filled">Contact Us</Button>
                    <Typography  variant="h2" color="gray" className="mb-1 mt-8" >Get in touch with us how we might be of help to you.</Typography>
                    <div className="flex">
                        <img src={locationIMG} alt="location" className=" pr-5" />
                        <Typography  variant="h6" color="gray" className="mb-1 mt-8" >
                            PBR International
                            <br />
                            Kemp House, 152-160 City  Road,London EC1V 2NX,United Kingdom
                            <br />
                            PBR Sub-Saharan Africa
                            <br />
                            70B Olorunlogbon Street,Anthony Village,Lagos,Nigeria
                        </Typography>
                    </div>
                    <Button className="mt-10 p-5 bg-purplebrown btn-lg" variant="filled">Send message</Button>
                </div>
            </div>
        </div>
    );
}