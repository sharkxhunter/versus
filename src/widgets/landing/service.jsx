import { Typography, Card, CardHeader, CardFooter, CardBody } from "@material-tailwind/react";
import dataSVG from "./data.svg";
import graphSVG from "./graph.svg";
import shareSVG from "./share.svg";
import msgSVG from "./message.svg";

export default function () {
    return (
        <div className="mt-8">
            <Typography  variant="h2" color="blue-gray" className="mb-10 mt-8" >
                <span style={{color:"#A4133C", marginRight:"2rem", textDecoration:"underline"}}>
                    Services  
                </span>
                We Provide with Quality
            </Typography>
            <Typography variant="h5" color="gray" className=" mb-10">We provide cloud based real world non-observational pharmacy sell out data to help upscale brand, give market insight and impact success of brand in the continent</Typography>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                <Card color="transparent">
                    <CardBody>
                        <img className="mb-2 h-15" src={shareSVG} alt="share" />
                        <Typography variant="h5" className="mb-2">
                        Data Sourcing
                        </Typography>
                        <Typography>
                        We offer access to user friendly analysis & visualization of anonymized dispensing data collected from the relatail pharmacies
                        </Typography>
                    </CardBody>
                </Card>
                <Card color="transparent">
                    <CardBody>
                        <img className="mb-2 h-15" src={dataSVG} alt="data" />
                        <Typography variant="h5" className="mb-2">
                        Strategy & Insight
                        </Typography>
                        <Typography>
                        We offer access to user friendly analysis & visualization of anonymized dispensing data collected from the relatail pharmacies
                        </Typography>
                    </CardBody>
                </Card>
                <Card color="transparent">
                    <CardBody>
                        <img className="mb-2 h-15" src={graphSVG} alt="graph" />
                        <Typography variant="h5" className="mb-2">
                        Data Integration
                        </Typography>
                        <Typography>
                        We offer access to user friendly analysis & visualization of anonymized dispensing data collected from the relatail pharmacies
                        </Typography>
                    </CardBody>
                </Card>
                <Card color="transparent">
                    <CardBody>
                        <img className="mb-2 h-15" src={msgSVG} alt="msg" />
                        <Typography variant="h5" className="mb-2">
                        Customer support
                        </Typography>
                        <Typography>
                        We offer access to user friendly analysis & visualization of anonymized dispensing data collected from the relatail pharmacies
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}