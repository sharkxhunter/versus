import {
  Typography
} from "@material-tailwind/react";
import { ReceiptPercentIcon, CircleStackIcon } from "@heroicons/react/24/outline";

export function SalesShare() {
  return (
    <div className="flex gap-[2px] justify-center">
      <div className="min-w-[270px] w-full h-auto bg-white px-[24px] py-[15px] rounded-l-md">
        <div className="flex justify-center py-0 gap-[1rem]">
          <div className="w-[50px] h-[50px] rounded bg-[#EBF5FE] flex text-center items-center">
            <ReceiptPercentIcon className="text-[#094998] w-5 h-[20px] m-auto" />
          </div>
          <div>
            <Typography variant="lead" className="text-[#999999] text-[1rem] overflow-clip">
              % Sales Value Share
            </Typography>
            <Typography variant="lead" className="text-black font-bold text-[1rem] text-center w-full">
              12.5%
            </Typography>
          </div>
        </div>
        <div className="mt-[16px] flex justify-between">
          <div>
            <Typography variant="lead" className="text-[#999999] text-[14px]">
              Period Selected
            </Typography>
            <Typography variant="lead" className="text-black font-bold text-[1rem] text-center w-full">
              32.5%
            </Typography>
          </div>
          <div>
            <Typography variant="lead" className="text-[#999999] text-[14px]">
              % Change
            </Typography>
            <Typography variant="lead" className="text-black font-bold text-[1rem] text-center w-full">
              +35.8%
            </Typography>
          </div>
        </div>
      </div>

      <div className="min-w-[270px] w-full h-auto bg-white px-[24px] py-[15px] rounded-r-md">
        <div className="flex justify-center py-0 gap-[1rem] h-[50px]">
          <div className="w-[50px] h-[50px] rounded bg-[#FEEBFB] flex text-center items-center">
            <CircleStackIcon className="text-[#980981] w-5 h-[20px] m-auto" />
          </div>
          <div>
            <Typography variant="lead" className="text-[#999999] text-[1rem]">
              % Sales Volume Share
            </Typography>
            <Typography variant="lead" className="text-black font-bold text-[1rem] text-center w-full">
              3.5%
            </Typography>
          </div>
        </div>
        <div className="flex justify-between mt-[1rem]">
          <div>
            <Typography variant="lead" className="text-[#999999] text-[14px]">
              Period Selected
            </Typography>
            <Typography variant="lead" className="text-black font-bold text-[1rem] text-center w-full">
              32.5%
            </Typography>
          </div>
          <div>
            <Typography variant="lead" className="text-[#999999] text-[14px]">
              % Change
            </Typography>
            <Typography variant="lead" className="text-black font-bold text-[1rem] text-center w-full">
              +35.8%
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}