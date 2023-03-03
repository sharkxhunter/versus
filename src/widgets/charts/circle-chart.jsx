import {
  Typography
} from "@material-tailwind/react";

export function CircleChart({ data }) {
  let colors = [];
  for (let i = 0; i < 3; i++) {
    let r, g, b;
    r = Math.ceil(Math.random() * 255);
    g = Math.ceil(Math.random() * 255);
    b = Math.ceil(Math.random() * 255);
    colors[i] = Number(r * 256 * 256 + g * 256 + b).toString(16);
  }

  return (
    <div className="relative p-2">
      <div className="relative">
        <div className="w-[312px] h-[236px] mx-auto relative">
          <div className={`items-center flex justify-center absolute w-[212px] h-[212px] border-white border-4 rounded-full bg-[#4A3AFF]`}>
            <Typography className="text-[44px] text-white font-bold">
              {data[0].value}%
            </Typography>
          </div>
          <div className="absolute left-[162px]">
            <div className={`items-center flex justify-center w-[150px] h-[150px] border-white border-4 rounded-full bg-[#C893FD]`}>
              <Typography className="text-[32px] text-white font-bold">
                {data[1].value}%
              </Typography>
            </div>
            <div className={`items-center flex justify-center absolute top-[112px] w-[100px] h-[100px] border-white border-4 rounded-full bg-[#1E1B39]`}>
              <Typography className="text-[22px] text-white font-bold">
                {data[2].value}%
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center">
        <div className="flex items-center gap-2">
          <span className="w-[14px] h-[14px] bg-[#4A3AFF] rounded-full"></span>
          <Typography className="text-[18px] font-normal">
            {data[0].name}
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-[14px] h-[14px] bg-[#C893FD] rounded-full"></span>
          <Typography className="text-[18px] font-normal">
            {data[1].name}
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-[14px] h-[14px] bg-[#1E1B39] rounded-full"></span>
          <Typography className="text-[18px] font-normal">
            {data[2].name}
          </Typography>
        </div>
      </div>
    </div>
  )
}