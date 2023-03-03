import {
  Typography,
  Card,
} from "@material-tailwind/react";
import { StatisticsChart } from '@/widgets/charts';
import { dropdownData } from "@/data";
import { Dropdown } from '@/widgets/dropdown';
import { chartsConfig } from "@/configs";
import { months } from "@/data";
import { ArrowUpOnSquareIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Table } from "@/widgets/table";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const salesPercentage = [{
  name: "Capsule",
  value: 70
}, {
  name: "Injection",
  value: 20
}, {
  name: "Tablet",
  value: 10
}];

const brandPrice = {
  type: "bar",
  height: 500,
  series: [
    {
      name: "Views",
      data: [
        { x: "Emzor", y: 35 },
        { x: "M&B", y: 34 },
        { x: "RB", y: 33 },
        { x: "GSK", y: 33 },
        { x: "Codix", y: 29 },
        { x: "GSK", y: 25 },
        { x: "GSK", y: 23 },
        { x: "Bayer", y: 22 },
        { x: "Neimeth", y: 19 },
        { x: "Shalina", y: 12 }
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
    "State", "Volume Share", "% Change in prices", "Show Data"
  ],
  data: [
    ["Abia", "#2,550", "+0.46%", false],
    ["Delta", "#3,200", "+0.04%", false],
    ["Lagos", "#2,550", "+0.35%", false],
    ["Abuja", "#3,750", "-0.22%", false],
    ["Osun", "#1,705", "-0.06%", false],
    ["Kano", "#3,380", "+0.25%", false],
    ["Sokoto", "#2,185", "+0.56%", false],
    ["Anambra", "#4,000", "-1.25%", false],
    ["Ogun", "#1,900", "+2.33%", false],
    ["Oyo", "#2,550", "-2.22%", false],
  ]
}

const regionalBrandPrice = {
  type: "bar",
  height: 450,
  series: [{
    name: "Fidson",
    data: [2300, 2300, 2300, 2300, 2300, 2300, 2300, 2300]
  }, {
    name: "M & B",
    data: [4200, 4200, 4200, 4200, 4200, 4200, 4200, 4200]
  }, {
    name: "Emzor",
    data: [1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700]
  }, {
    name: "Emzor",
    data: [2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200]
  }, {
    name: "Emzor",
    data: [5300, 5300, 5300, 5300, 5300, 5300, 5300, 5300]
  }, {
    name: "Emzor",
    data: [2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450]
  }, {
    name: "Emzor",
    data: [4700, 4700, 4700, 4700, 4700, 4700, 4700, 4700]
  }, {
    name: "Emzor",
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
      show: false
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

export function RegionalPrice() {
  return (
    <div className="w-full z-0">
      <div className="relative w-full">
        {/* Trend Page BEGIN */}
        <div className="absolute w-full pb-[2rem] px-[30px] transition animate-tabappear z-10">
          <div className="mt-[36px]">
            <Typography className="text-[#333333] text-[32px] font-bold">
              Regional Price Analytics Dashboard - <span className="text-darkred-600">Augmentin</span>
            </Typography>
          </div>

          <div className="grid grid-cols-2 mt-[48px] gap-2 md:flex md:flex-row md:gap-4 md:items-center p-0">
            <Dropdown title="ATCLevel" {...dropdownData.atclevel} />
            <Dropdown title="SKU" {...dropdownData.sku} />
            <Dropdown title="Period" {...dropdownData.period} />
            <Dropdown title="Location" {...dropdownData.location} />
          </div>
          
          <div className="mt-[48px]">
            {/* Regional Brand price analytics (Panadol) Begin */}
            <div>
              <Card className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[25px]">
                    <Typography className="font-bold text-[18px]">
                      Regional brand price analytics (Panadol)
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
            {/* Regional Brand price analytics (Panadol) End */}

            {/* Price of Brand Begin */}
            <div className="mt-[48px]">
              <Card className="p-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[25px]">
                    <Typography className="font-bold text-[18px]">
                      Price of Brand (Panadol)
                    </Typography>
                  </div>
                  <Dropdown title="Export Chart" {...dropdownData.exportChart} className="!text-base"
                    officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                    onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
                </div>

                <div className="mt-[30px]">
                  <div className="w-full px-[100px]">
                    <Table {...priceOfBrandTableData} />
                  </div>
                </div>
              </Card>
            </div>
            {/* Price of Brand End */}

            {/* Brand price analytics in ATC level 3 Begin */}
            <div className="mt-[3rem]">
              <Card className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[25px]">
                    <Typography className="font-bold text-[18px]">
                      Price of Brand (Panadol)
                    </Typography>
                    <Dropdown title="Top 10" {...dropdownData.atclevel} />
                  </div>
                  <Dropdown title="Export Chart" {...dropdownData.exportChart} className="!text-base"
                    officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                    onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
                </div>

                <div className="w-full mt-[28px] px-[20px]">
                  <div className="w-full px-[21px] py-[18px] rounded-2xl border border-[#808080]">
                    <div>
                      <Typography className="text-[24px] font-[900] text-[#4d4d4d]">
                        Brand price analytics
                      </Typography>
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-4 items-center md:flex md:justify-between">
                      <div className="text-center">
                        <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                          HIGHEST PRICED
                        </Typography>
                        <Typography className="text-[#666666] font-bold text-[18px]">
                          Ibuprofen-#3,800
                        </Typography>
                      </div>
                      <div className="text-center">
                        <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                          MID PRICED
                        </Typography>
                        <Typography className="text-[#666666] font-bold text-[18px]">
                          Emvit-#2,650
                        </Typography>
                      </div>
                      <div className="text-center">
                        <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                          LOWEST PRICED
                        </Typography>
                        <Typography className="text-[#666666] font-bold text-[18px]">
                          Panadol-#1,200
                        </Typography>
                      </div>
                      <div className="text-center">
                        <Typography className="text-[#1973af] font-bold text-[18px] capitalize">
                          Filter Selection
                        </Typography>
                        <Typography className="text-[#666666] font-bold text-[18px]">
                          Panadol-#1,200
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
            {/* Brand price analytics in ATC level 3 End */}
          </div>
        </div>
      </div>
    </div>
  )
} 