import {
  Typography,
  Card,
} from "@material-tailwind/react";
import { StatisticsChart } from '@/widgets/charts';
import { dropdownData } from "@/data";
import { Dropdown } from '@/widgets/dropdown';
import { chartsConfig } from "@/configs";
import { ArrowUpOnSquareIcon, MagnifyingGlassIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Table } from "@/widgets/table";
import * as Flowbite from 'flowbite-react'
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";

const level2TableData = {
  headers: [
    "ATC Level2", "Currency (Naira)", "% Share", "Volume share", "% Change"
  ],
  data: [
    ["J05 Antivirals for systemic use", "12,000", "8.64%", "247,254,000", "+3.56%"],
    ["J07 Vaccines", "12,000", "8.64%", "247,254,000", "+3.56%"],
    ["J04 Antimy cobaterials", "12,000", "8.64%", "247,254,000", "+3.56%"],
    ["J06 Immune Sera and Immunoglobins", "12,000", "8.64%", "247,254,000", "+3.56%"],
    ["J01 Antibacterial for systemic use", "12,000", "8.64%", "247,254,000", "+3.56%"],
  ]
}

const level4TableData = {
  headers: [
    "ATC Level4", "Currency (Naira)", "% Share", "Volume share", "% Change"
  ],
  data: [
    ["J05 Antivirals for systemic use", "12,000", "8.64%", "247,254,000", "+3.56%"],
    ["J07 Vaccines", "12,000", "8.64%", "247,254,000", "+3.56%"],
    ["J04 Antimy cobaterials", "12,000", "8.64%", "247,254,000", "+3.56%"],
    ["J06 Immune Sera and Immunoglobins", "12,000", "8.64%", "247,254,000", "+3.56%"],
    ["J01 Antibacterial for systemic use", "12,000", "8.64%", "247,254,000", "+3.56%"],
  ]
}

const level5TableData = {
  headers: [
    "ATC Level5", "Currency (Naira)", "% Share", "Volume share", "% Change"
  ],
  data: [
    ["J05 Antivirals for systemic use", "12,000", "8.64%", "247,254,000", "+3.56%"],
    ["J07 Vaccines", "12,000", "8.64%", "247,254,000", "+3.56%"],
    ["J04 Antimy cobaterials", "12,000", "8.64%", "247,254,000", "+3.56%"],
    ["J06 Immune Sera and Immunoglobins", "12,000", "8.64%", "247,254,000", "+3.56%"],
    ["J01 Antibacterial for systemic use", "12,000", "8.64%", "247,254,000", "+3.56%"],
  ]
}

const salesValue = {
  type: "bar",
  height: 450,
  series: [{
    name: "Value",
    data: [40, 84, 84, 84, 84]
  }, {
    name: "Volume",
    data: [24, 24, 24, 24, 24]
  }],
  options: {
    ...chartsConfig,
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
        borderRadius: 4,
        endingShape: "rounded"
      },
    },
    colors: [
      "#109494",
      "#1E8F24"
    ],
    legend: {
      position: "top",
      horizontalAlign: "left",
      markers: {
        width: 10,
        height: 10,
        radius: 5,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['J02 Antiviral', 'J07 Vaccine', 'J04 |Antimyco', 'J06 Immune', 'J-1 bacterial'],
      axisBorder: {
        show: false
      },
      labels: {
        rotate: -90,
        rotateAlways: true,
        show: true
      }
    }
  }
}

export function TherapyArea() {
  return (
    <div className="w-full z-0">
      <div className="relative w-full">
        <div className="absolute w-full pb-[2rem] px-[30px] transition animate-tabappear z-10">
          <div className="mt-[48px]">
            <Typography className="text-[#333333] text-[32px] font-bold">
              Therapy Area Analytics Dashboard - <span className="text-darkred-600">GTK</span>
            </Typography>
          </div>

          <div className="grid grid-cols-2 mt-[48px] gap-2 md:flex md:flex-row md:gap-4 md:items-center p-0">
            <Dropdown title="ATCLevel" {...dropdownData.atclevel} />
            <Dropdown title="Brand" {...dropdownData.brand} />
            <Dropdown title="Period" {...dropdownData.period} />
            <Dropdown title="Location" {...dropdownData.location} />
          </div>
          
          <div className="mt-[20px]">
            <Typography className="text-base font-medium text-[#808080]">
              This data is based on data subscribed to&nbsp;
              <span className="text-[#9f123a]">ATC 2, ATC 4 & ATC 5</span>
            </Typography>

            {/* level2 Begin */}
            <div className="mt-[6px]">
              <Card className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[25px]">
                    <Typography className="font-bold text-[18px]">
                      % therapy area level 2 share and value for total market
                    </Typography>
                  </div>
                  <Dropdown title="Export Chart" {...dropdownData.exportChart} className="!text-base"
                    officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                    onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
                </div>

                <div className="mt-[30px]"><div className="grid grid-cols-1 gap-2 lg:flex lg:justify-between">
                    <div className="lg:w-[50%] 2xl:w-[40%]">
                      <StatisticsChart chart={salesValue} />
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-[10px] bg-white rounded border border-darkred-600 hover:bg-darkred-600 hover:text-white box-shadow-[0_15px_60px_rgba(173,173,173,0.2)]">
                          <ArrowLeftIcon className="w-6 h-6" />
                        </button>
                        <button className="py-[10px] px-[20px] bg-darkred-600 rounded border border-darkred-600 hover:bg-darkred-700 hover:border-darkred-700 box-shadow-[0_15px_60px_rgba(173,173,173,0.2)]">
                          <div className="flex items-center text-white">
                            <Typography className="font-bold text-base">
                              Next
                            </Typography>&nbsp;
                            <ArrowRightIcon className="w-4 h-4 text-base font-bold" />
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="lg:grow">
                      <div className="grid grid-cols-1 gap-2 2xl:flex lg:justify-between">
                        <div className="grow">
                          <Flowbite.TextInput icon={MagnifyingGlassIcon} placeholder="ATC 2" style={{height: "48px", minWidth: "262px", flex: 1, background: "white"}} />
                        </div>
                        <div className="flex gap-2">
                          <Flowbite.TextInput icon={MagnifyingGlassIcon} placeholder="Naira" style={{height: "48px", minWidth: "142px", flex: 1, background: "white"}} />
                          <Flowbite.TextInput icon={MagnifyingGlassIcon} placeholder="Volume" style={{height: "48px", minWidth: "130px", flex: 1, background: "white"}} />
                          <button className="px-[23px] py-[10px] rounded border border-[#e6e6e6] bg-white hover:bg-[#eeeeee] shadow-[0_15px_60px_rgba(173,173,173,0.2]">
                            <Typography className="font-bold text-base text-darkred-600">
                              <FunnelIcon className="w-5 h-5" />
                            </Typography>
                          </button>
                        </div>
                      </div>
                      <div className="mt-[18px]">
                        <Table {...level2TableData} />
                        <div className="flex items-center flex-row-reverse gap-[90px] mt-9">
                          <div className="flex items-center gap-2">
                            <input name="pageIndex" value="1" className="w-12 h-12 border border-[#e6e6e6] rounded text-center font-bold text-[18px] text-darkred-600 outline-none outline-offset-0 hover:outline-darkred-600" />
                            <Typography className="font-bold text-[18px] text-[#4d4d4d]">
                              out of 15
                            </Typography>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <button className="p-[10px] bg-white rounded border border-darkred-600 hover:bg-darkred-600 hover:text-white box-shadow-[0_15px_60px_rgba(173,173,173,0.2)]">
                              <ArrowLeftIcon className="w-6 h-6" />
                            </button>
                            <button className="py-[10px] px-[20px] bg-darkred-600 rounded border border-darkred-600 hover:bg-darkred-700 hover:border-darkred-700 box-shadow-[0_15px_60px_rgba(173,173,173,0.2)]">
                              <div className="flex items-center text-white">
                                <Typography className="font-bold text-base">
                                  Next
                                </Typography>&nbsp;
                                <ArrowRightIcon className="w-4 h-4 text-base font-bold" />
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            {/* level2 End */}

            {/* level4 Begin */}
            <div className="mt-[6px]">
              <Card className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[25px]">
                    <Typography className="font-bold text-[18px]">
                      % therapy area level 4 share and value for J01 Antibacterial for systemic use
                    </Typography>
                  </div>
                  <Dropdown title="Export Chart" {...dropdownData.exportChart} className="!text-base"
                    officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                    onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
                </div>

                <div className="mt-[30px]"><div className="grid grid-cols-1 gap-2 lg:flex lg:justify-between">
                    <div className="lg:w-[50%] 2xl:w-[40%]">
                      <StatisticsChart chart={salesValue} />
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-[10px] bg-white rounded border border-darkred-600 hover:bg-darkred-600 hover:text-white box-shadow-[0_15px_60px_rgba(173,173,173,0.2)]">
                          <ArrowLeftIcon className="w-6 h-6" />
                        </button>
                        <button className="py-[10px] px-[20px] bg-darkred-600 rounded border border-darkred-600 hover:bg-darkred-700 hover:border-darkred-700 box-shadow-[0_15px_60px_rgba(173,173,173,0.2)]">
                          <div className="flex items-center text-white">
                            <Typography className="font-bold text-base">
                              Next
                            </Typography>&nbsp;
                            <ArrowRightIcon className="w-4 h-4 text-base font-bold" />
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="lg:grow">
                      <div className="grid grid-cols-1 gap-2 2xl:flex lg:justify-between">
                        <div className="grow">
                          <Flowbite.TextInput icon={MagnifyingGlassIcon} placeholder="ATC 4" style={{height: "48px", minWidth: "262px", flex: 1, background: "white"}} />
                        </div>
                        <div className="flex gap-2">
                          <Flowbite.TextInput icon={MagnifyingGlassIcon} placeholder="Naira" style={{height: "48px", minWidth: "142px", flex: 1, background: "white"}} />
                          <Flowbite.TextInput icon={MagnifyingGlassIcon} placeholder="Volume" style={{height: "48px", minWidth: "130px", flex: 1, background: "white"}} />
                          <button className="px-[23px] py-[10px] rounded border border-[#e6e6e6] bg-white hover:bg-[#eeeeee] shadow-[0_15px_60px_rgba(173,173,173,0.2]">
                            <Typography className="font-bold text-base text-darkred-600">
                              <FunnelIcon className="w-5 h-5" />
                            </Typography>
                          </button>
                        </div>
                      </div>
                      <div className="mt-[18px]">
                        <Table {...level4TableData} />
                        <div className="flex items-center flex-row-reverse gap-[90px] mt-9">
                          <div className="flex items-center gap-2">
                            <input name="pageIndex" value="1" className="w-12 h-12 border border-[#e6e6e6] rounded text-center font-bold text-[18px] text-darkred-600 outline-none outline-offset-0 hover:outline-darkred-600" />
                            <Typography className="font-bold text-[18px] text-[#4d4d4d]">
                              out of 15
                            </Typography>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <button className="p-[10px] bg-white rounded border border-darkred-600 hover:bg-darkred-600 hover:text-white box-shadow-[0_15px_60px_rgba(173,173,173,0.2)]">
                              <ArrowLeftIcon className="w-6 h-6" />
                            </button>
                            <button className="py-[10px] px-[20px] bg-darkred-600 rounded border border-darkred-600 hover:bg-darkred-700 hover:border-darkred-700 box-shadow-[0_15px_60px_rgba(173,173,173,0.2)]">
                              <div className="flex items-center text-white">
                                <Typography className="font-bold text-base">
                                  Next
                                </Typography>&nbsp;
                                <ArrowRightIcon className="w-4 h-4 text-base font-bold" />
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            {/* level4 End */}
            
            {/* level5 Begin */}
            <div className="mt-[6px]">
              <Card className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[25px]">
                    <Typography className="font-bold text-[18px]">
                      % therapy area level 5 share and value for J01XD Imidazole derivatives
                    </Typography>
                  </div>
                  <Dropdown title="Export Chart" {...dropdownData.exportChart} className="!text-base"
                    officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                    onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
                </div>

                <div className="mt-[30px]"><div className="grid grid-cols-1 gap-2 lg:flex lg:justify-between">
                    <div className="lg:w-[50%] 2xl:w-[40%]">
                      <StatisticsChart chart={salesValue} />
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-[10px] bg-white rounded border border-darkred-600 hover:bg-darkred-600 hover:text-white box-shadow-[0_15px_60px_rgba(173,173,173,0.2)]">
                          <ArrowLeftIcon className="w-6 h-6" />
                        </button>
                        <button className="py-[10px] px-[20px] bg-darkred-600 rounded border border-darkred-600 hover:bg-darkred-700 hover:border-darkred-700 box-shadow-[0_15px_60px_rgba(173,173,173,0.2)]">
                          <div className="flex items-center text-white">
                            <Typography className="font-bold text-base">
                              Next
                            </Typography>&nbsp;
                            <ArrowRightIcon className="w-4 h-4 text-base font-bold" />
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="lg:grow">
                      <div className="grid grid-cols-1 gap-2 2xl:flex lg:justify-between">
                        <div className="grow">
                          <Flowbite.TextInput icon={MagnifyingGlassIcon} placeholder="ATC 5" style={{height: "48px", minWidth: "262px", flex: 1, background: "white"}} />
                        </div>
                        <div className="flex gap-2">
                          <Flowbite.TextInput icon={MagnifyingGlassIcon} placeholder="Naira" style={{height: "48px", minWidth: "142px", flex: 1, background: "white"}} />
                          <Flowbite.TextInput icon={MagnifyingGlassIcon} placeholder="Volume" style={{height: "48px", minWidth: "130px", flex: 1, background: "white"}} />
                          <button className="px-[23px] py-[10px] rounded border border-[#e6e6e6] bg-white hover:bg-[#eeeeee] shadow-[0_15px_60px_rgba(173,173,173,0.2]">
                            <Typography className="font-bold text-base text-darkred-600">
                              <FunnelIcon className="w-5 h-5" />
                            </Typography>
                          </button>
                        </div>
                      </div>
                      <div className="mt-[18px]">
                        <Table {...level5TableData} />
                        <div className="flex items-center flex-row-reverse gap-[90px] mt-9">
                          <div className="flex items-center gap-2">
                            <input name="pageIndex" value="1" className="w-12 h-12 border border-[#e6e6e6] rounded text-center font-bold text-[18px] text-darkred-600 outline-none outline-offset-0 hover:outline-darkred-600" />
                            <Typography className="font-bold text-[18px] text-[#4d4d4d]">
                              out of 15
                            </Typography>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <button className="p-[10px] bg-white rounded border border-darkred-600 hover:bg-darkred-600 hover:text-white box-shadow-[0_15px_60px_rgba(173,173,173,0.2)]">
                              <ArrowLeftIcon className="w-6 h-6" />
                            </button>
                            <button className="py-[10px] px-[20px] bg-darkred-600 rounded border border-darkred-600 hover:bg-darkred-700 hover:border-darkred-700 box-shadow-[0_15px_60px_rgba(173,173,173,0.2)]">
                              <div className="flex items-center text-white">
                                <Typography className="font-bold text-base">
                                  Next
                                </Typography>&nbsp;
                                <ArrowRightIcon className="w-4 h-4 text-base font-bold" />
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            {/* level5 End */}
          </div>
        </div>
      </div>
    </div>
  )
} 