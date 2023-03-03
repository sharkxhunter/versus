import {
  Typography,
  Card,
} from "@material-tailwind/react";
import { StatisticsChart } from '@/widgets/charts';
import { dropdownData } from "@/data";
import { Dropdown } from '@/widgets/dropdown';
import { chartsConfig } from "@/configs";
import { months } from "@/data";
import { ArrowUpOnSquareIcon, MagnifyingGlassIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Table } from "@/widgets/table";
import * as Flowbite from 'flowbite-react'
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";

const brandPrice = {
  type: "bar",
  height: 500,
  series: [
    {
      name: "Views",
      data: [
        { x: "Ibuprofen", y: 35 },
        { x: "Augmentin", y: 34 },
        { x: "Cocodamol", y: 33 },
        { x: "Panadol", y: 33 },
        { x: "Emvit", y: 29 },
        { x: "Coartem", y: 25 },
        { x: "Cannon", y: 23 },
        { x: "Amartem", y: 22 },
        { x: "Lunart", y: 19 },
        { x: "Piriton", y: 12 }
      ],
    },
  ],
  options: {
    ...chartsConfig,
    colors: [
      "#1973AF",
    ],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "70%",
        borderRadius: 5,
        distributed: true,
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: true,
      textAnchor: "center",
      formatter: function (val, opts) {
        return "$" + val;
      },
      style: {
        fontSize: "18px",
      }
    },
    xaxis: {
      ...chartsConfig.xaxis,
      min: 0,
      max: 44,
      tickAmount: 11,
      labels: {
        show: true,
        minHeight: 20,
        formatter: function (val, index) {
          return months[index];
        },
        style: {
          fontSize: "12px",
          colors: ["#B3B3B3"]
        }
      }
    },
    yaxis: {
      ...chartsConfig.yaxis,
      labels: {
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          colors: ["#666666"]
        }
      }
    },
    grid: {
      show: true,
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
    },
  },
};

const priceOfBrandTableData = {
  headers: [
    "Brand/SKU", "Volume Share", "% Change in prices", "Show Data"
  ],
  data: [
    ["Ibuprofen 100mg", "#2,550", "+0.46%", false],
    ["Augmentin 252mg", "#3,200", "+0.04%", false],
    ["Cocodamol 100mg", "#2,550", "+0.35%", false],
    ["Lunart 100mg", "#3,750", "-0.22%", false],
    ["Amartem 100mg", "#1,705", "-0.06%", false],
    ["Amplicox 100mg", "#3,380", "+0.25%", false],
    ["Paracetamol 100mg", "#2,185", "+0.56%", false],
    ["Paracetamol 100mg", "#4,000", "-1.25%", false],
    ["Paracetamol 100mg", "#1,900", "+2.33%", false],
    ["Paracetamol 100mg", "#2,550", "-2.22%", false],
  ]
}

const regionalBrandPrice = {
  type: "bar",
  height: 450,
  series: [{
    name: "Ibuprofen 100mg",
    data: [2300, 2300, 2300, 2300, 2300, 2300, 2300, 2300]
  }, {
    name: "Augmentin 252mg",
    data: [4200, 4200, 4200, 4200, 4200, 4200, 4200, 4200]
  }, {
    name: "Cocodamol 100mg",
    data: [1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700]
  }, {
    name: "Lunart 100mg",
    data: [2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200]
  }, {
    name: "Amartem 100mg",
    data: [5300, 5300, 5300, 5300, 5300, 5300, 5300, 5300]
  }, {
    name: "Amplicox 100mg",
    data: [2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450]
  }, {
    name: "Paracetamol 100mg",
    data: [4700, 4700, 4700, 4700, 4700, 4700, 4700, 4700]
  }, {
    name: "Emzor 100mg",
    data: [6200, 6200, 6200, 6200, 6200, 6200, 6200, 6200]
  }],
  options: {
    ...chartsConfig,
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        endingShape: "rounded"
      }
    },
    colors: [
      "#AF6419",
      "#4B0BDE",
      "#1E8F24",
      "#980981",
      "#1F78B4",
      "#A02F2E",
      "#CE6E38",
      "#5C048E",
    ],
    legend: {
      show: true,
      position: "top",
      markers: {
        width: 10,
        height: 10,
        radius: 10
      },
      itemMargin: {
        horizontal: 10
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
      categories: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      axisBorder: {
        show: false
      },
    },
    yaxis: {
      max: 10000,
      min: 0,
      tickAmount: 10,
      labels: {
        formatter: function (value) {
          return value == 0 ? value : (value / 1000) + "k";
        }
      }
    }
  }
}

export function ComparativePrice() {
  return (
    <div className="w-full z-0">
      <div className="relative w-full">
        <div className="absolute w-full pb-[2rem] px-[30px] transition animate-tabappear z-10">
          <div className="mt-[36px]">
            <Typography className="text-[#333333] text-[32px] font-bold">
              Comparative Price Analytics Dashboard - <span className="text-darkred-600">Panadol</span>
            </Typography>
          </div>

          <div className="grid grid-cols-2 mt-[48px] gap-2 md:flex md:flex-row md:gap-4 md:items-center p-0">
            <Dropdown title="ATCLevel" {...dropdownData.atclevel} />
            <Dropdown title="SKU" {...dropdownData.sku} />
            <Dropdown title="Period" {...dropdownData.period} />
            <Dropdown title="Location" {...dropdownData.location} />
          </div>
          
          <div>
            {/* Price of Brand Begin */}
            <div className="mt-[48px]">
              <Card className="p-5 relative">
                <div className="flex flex-row-reverse items-center absolute right-[16px]">
                  <Dropdown title="Export Chart" {...dropdownData.exportChart} className="!text-base"
                    officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                    onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
                </div>

                <div>
                  <div className="w-full px-[100px]">
                    <div className="flex gap-2">
                      <Flowbite.TextInput icon={MagnifyingGlassIcon} placeholder="Enter Brand/SKU name" style={{height: "48px", minWidth: "262px", background: "white"}} />
                      <Dropdown title="From Year" name="fromyear" options={[2017, 2018, 2019, 2020, 2021, 2022, 2023]} cols={1} className="min-w-[155px]" />
                      <Dropdown title="To Year" name="toyear" options={[2017, 2018, 2019, 2020, 2021, 2022, 2023]} cols={1} className="min-w-[130px]" />
                      <button className="px-[23px] py-[10px] rounded border border-[#e6e6e6] bg-white hover:bg-[#eeeeee] shadow-[0_15px_60px_rgba(173,173,173,0.2]">
                        <Typography className="font-bold text-base text-darkred-600">
                          <FunnelIcon className="w-5 h-5" />
                        </Typography>
                      </button>
                    </div>
                    <div className="mt-[20px]">
                      <Table {...priceOfBrandTableData} />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            {/* Price of Brand End */}

            {/* Comparative Price Begin */}
            <div className="mt-[48px]">
              <Card className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[25px]">
                    <Typography className="font-bold text-[18px]">
                      Comparative Price
                    </Typography>
                  </div>
                  <Dropdown title="Export Chart" {...dropdownData.exportChart} className="!text-base"
                    officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                    onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
                </div>

                <div className="w-full mt-[28px] px-[20px]">
                  <div className="w-full px-[21px] py-[18px] rounded-2xl border border-[#808080]">
                    <div>
                      <Typography className="text-[24px] font-[900] text-[#4d4d4d]">
                        Prices
                      </Typography>
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-4 items-center md:flex md:justify-between">
                      <div className="text-center">
                        <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                          MOST COMMON PRICE
                        </Typography>
                        <Typography className="text-[#666666] font-bold text-[18px]">
                          Delta - #3,800
                        </Typography>
                      </div>
                      <div className="text-center">
                        <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                          MEDIAN PRICE
                        </Typography>
                        <Typography className="text-[#666666] font-bold text-[18px]">
                          Oyo - #2,650
                        </Typography>
                      </div>
                      <div className="text-center">
                        <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                          LEAST COMMON PRICE
                        </Typography>
                        <Typography className="text-[#666666] font-bold text-[18px]">
                          Osun - #1,200
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[30px]">
                  <div className="w-full">
                    <StatisticsChart chart={regionalBrandPrice} />
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
              </Card>
            </div>
            {/* Comparative Price End */}

            {/* Competitor Analytics Begin */}
            <div className="mt-[3rem]">
              <Card className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[25px]">
                    <Typography className="font-bold text-[18px]">
                      Competitor Analytics
                    </Typography>
                  </div>
                  <Dropdown title="Export Chart" {...dropdownData.exportChart} className="!text-base"
                    officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                    onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
                </div>

                <div className="w-full mt-[28px] px-[20px]">
                  <div className="w-full px-[21px] py-[18px] rounded-2xl border border-[#808080]">
                    <div>
                      <Typography className="text-[24px] font-[900] text-[#4d4d4d]">
                        Competitor Analytics
                      </Typography>
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-4 items-center md:flex md:justify-between">
                      <div className="text-center">
                        <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                          HIGHEST PRICED
                        </Typography>
                        <Typography className="text-[#666666] font-bold text-[18px]">
                          Ibuprofen 500mg-$35
                        </Typography>
                      </div>
                      <div className="text-center">
                        <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                          MID PRICED
                        </Typography>
                        <Typography className="text-[#666666] font-bold text-[18px]">
                          Emvit 500mg-$22
                        </Typography>
                      </div>
                      <div className="text-center">
                        <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                          LOWEST PRICED
                        </Typography>
                        <Typography className="text-[#666666] font-bold text-[18px]">
                          Panadol 252mg-$15
                        </Typography>
                      </div>
                      <div className="text-center">
                        <Typography className="text-[#1973af] font-bold text-[18px] capitalize">
                          Filter Selection
                        </Typography>
                        <Typography className="text-[#666666] font-bold text-[18px]">
                          Panadol 252mg-$15
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[30px]">
                  <div className="w-full px-[100px]">
                    <StatisticsChart chart={brandPrice} />
                  </div>
                </div>
              </Card>
            </div>
            {/* Competitor Analytics End */}
          </div>
        </div>
      </div>
    </div>
  )
} 