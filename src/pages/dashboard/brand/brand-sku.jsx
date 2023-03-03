import { useState } from "react";
import {
  Typography,
  Card,
} from "@material-tailwind/react";
import { StatisticsChart, CircleChart } from '@/widgets/charts';
import { statisticsChartsData, dropdownData } from "@/data";
import { Dropdown } from '@/widgets/dropdown';
import { chartsConfig } from "@/configs";
import { months } from "@/data";
import { ArrowUpOnSquareIcon, MagnifyingGlassIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { SalesShare } from "@/widgets/sales-share";
import { Table } from "@/widgets/table";
import * as Flowbite from 'flowbite-react'
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";

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

const tableData = {
  headers: [
    "Company Name", "Rank", "% Change", "Overall change"
  ],
  data: [
    ["Fidson", 1, "+3.56%", "+3.56%"],
    ["M & B", 2, "+3.56%", "+3.56%"],
    ["Pfizer", 3, "+3.56%", "+3.56%"],
    ["Neimeth", 4, "+3.56%", "+3.56%"],
    ["Shalina", 5, "+3.56%", "+3.56%"],
    ["Bayer", 6, "+3.56%", "+3.56%"],
    ["GSK", 7, "+3.56%", "+3.56%"],
    ["Codix", 8, "+3.56%", "+3.56%"],
    ["Emzor", 9, "+3.56%", "+3.56%"],
    ["RB", 10, "+3.56%", "+3.56%"],
  ]
}

const salesValueTableData = {
  headers: [
    "Company Name", "Value Share", "% Value Share", "Change"
  ],
  data: [
    ["Fidson", 12000, "3.25%", "+3.56%"],
    ["M & B", 12000, "3.25%", "+3.56%"],
    ["M & B", 12000, "3.25%", "+3.56%"],
    ["GSK", 12000, "3.25%", "+3.56%"],
    ["GSK", 12000, "3.25%", "+3.56%"],
  ]
}

const salesVolumeTableData = {
  headers: [
    "Company Name", "Volume Share", "% Volume Share", "Change"
  ],
  data: [
    ["Fidson", 12000, "3.25%", "+3.56%"],
    ["M & B", 12000, "3.25%", "+3.56%"],
    ["M & B", 12000, "3.25%", "+3.56%"],
    ["GSK", 12000, "3.25%", "+3.56%"],
    ["GSK", 12000, "3.25%", "+3.56%"],
  ]
}

const rankingForSalesValueShare = {
  type: "bar",
  height: 570,
  series: [
    {
      name: "Views",
      data: [
        { x: "Emzor", y: 381 },
        { x: "M&B", y: 367 },
        { x: "RB", y: 330 },
        { x: "GSK", y: 297 },
        { x: "Codix", y: 265 },
        { x: "GSK", y: 234 },
        { x: "GSK", y: 207 },
        { x: "Bayer", y: 178 },
        { x: "Neimeth", y: 135 },
        { x: "Shalina", y: 110 }
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
        return (val / 10) + "%";
      },
      style: {
        fontSize: "18px",
      }
    },
    xaxis: {
      ...chartsConfig.xaxis,
      min: 0,
      max: 440,
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

const salesValue = {
  type: "bar",
  height: 450,
  series: [{
    name: "Fidson",
    data: [38, 38, 38, 38, 38]
  }, {
    name: "M & B",
    data: [82, 82, 82, 82, 82]
  }, {
    name: "Emzor",
    data: [22, 22, 22, 22, 22]
  }],
  options: {
    ...chartsConfig,
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded"
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
      categories: ['2019', '2020', '2021', '2022', '2023'],
      axisBorder: {
        show: false
      },
    }
  }
}

export function BrandSKU() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div aria-label="Trend Tabs" className="w-full z-0">
      <nav className="flex items-center justify-center h-[59px] bg-transparent drop-shadow-[0_12px_30px_rgba(173,173,173,0.25)]">
        <button
          className={`min-w-[260px] relative h-full ${
            activeTabIndex === 0 ? "bg-darkred-600" : "bg-[#fcfcfd]"
          }`}
          onClick={() => setActiveTabIndex(0)}
        >
          <Typography className={`text-[24px] font-bold ${
            activeTabIndex === 0 ? "text-white" : "text-[#333333]"
          }`}>
            TREND
          </Typography>
        </button>

        <button
          className={`min-w-[260px] relative ml-4 h-full ${
            activeTabIndex === 1 ? "bg-darkred-600" : "bg-[#fcfcfd]"
          }`}
          onClick={() => setActiveTabIndex(1)}
        >
          <Typography className={`text-[24px] font-bold ${
            activeTabIndex === 1 ? "text-white" : "text-[#333333]"
          }`}>
            SHARE
          </Typography>
        </button>
      </nav>

      <div className="relative w-full">
        {/* Trend Page BEGIN */}
        <div className={`absolute w-full pb-[2rem] px-[30px] transition ${
          activeTabIndex === 0 ? "animate-tabappear z-10" : "z-0 hidden"
        }`}>
          <div className="mt-[36px]">
            <Typography className="text-[#333333] text-[32px] font-bold">
              Brand SKU Dashboard - <span className="text-darkred-600">Augmentin 252mg</span>
            </Typography>
          </div>

          <div className="grid grid-cols-2 mt-[48px] gap-2 md:flex md:flex-row md:gap-4 md:items-center p-0">
            <Dropdown title="ATCLevel" {...dropdownData.atclevel} />
            <Dropdown title="Brand" {...dropdownData.brand} />
            <Dropdown title="SKU" {...dropdownData.sku} />
            <Dropdown title="From Jan 2022" {...dropdownData.sku} />
            <Dropdown title="To Jan 2023" {...dropdownData.sku} />
            <Dropdown title="Location" {...dropdownData.location} />
          </div>
          
          {/* % Sales Share Begin */}
          <div className="mt-[48px] w-full py-0 mx-0 px-0">
            <div className="md:w-1/2 md:mx-auto drop-shadow-[0_8px_30px_rgba(173,173,173,0.2)]">
              <SalesShare />
            </div>
          </div>
          {/* % Sales Share End */}

          <div className="mt-[20px]">
            <Typography className="text-base font-medium text-[#808080]">
              This data is based on data subscribed to&nbsp;
              <span className="text-[#9f123a]">ATC 2 & ATC 3</span>
            </Typography>

            {/* Sales Value Begin */}
            <div className="mt-[6px]">
              <Card className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[25px]">
                    <Typography className="font-bold text-[18px]">
                      Sales Value
                    </Typography>
                  </div>
                  <Dropdown title="Export Chart" {...dropdownData.exportChart} className="!text-base"
                    officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                    onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
                </div>

                <div className="w-full mt-[28px]">
                  <div className="grid grid-cols-2 gap-4 px-[21px] py-[18px] rounded-2xl border border-[#808080] items-center lg:flex lg:gap-0 lg:justify-between">
                    <div className="text-center">
                      <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                        HIGHEST RANKED
                      </Typography>
                      <Typography className="text-[#666666] font-bold text-[18px]">
                        Fidson-3.85%
                      </Typography>
                    </div>
                    <div className="text-center">
                      <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                        MID RANKED
                      </Typography>
                      <Typography className="text-[#666666] font-bold text-[18px]">
                        Emzor-2.25%
                      </Typography>
                    </div>
                    <div className="text-center">
                      <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                        LOWEST RANKED
                      </Typography>
                      <Typography className="text-[#666666] font-bold text-[18px]">
                        Pfizer-0.25%
                      </Typography>
                    </div>
                    <div className="text-center">
                      <Typography className="text-[#1973af] font-bold text-[18px] capitalize">
                        Overall Value Share
                      </Typography>
                      <Typography className="text-[#666666] font-bold text-[18px]">
                        3.25%
                      </Typography>
                    </div>
                  </div>
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
                          <Flowbite.TextInput icon={MagnifyingGlassIcon} placeholder="Search for company name" style={{height: "48px", minWidth: "262px", flex: 1, background: "white"}} />
                        </div>
                        <div className="flex gap-2">
                          <Dropdown title="From Year" name="fromyear" options={[2017, 2018, 2019, 2020, 2021, 2022, 2023]} cols={1} className="w-full min-w-[155px]" />
                          <Dropdown title="To Year" name="toyear" options={[2017, 2018, 2019, 2020, 2021, 2022, 2023]} cols={1} className="w-full min-w-[130px]" />
                          <button className="px-[23px] py-[10px] rounded border border-[#e6e6e6] bg-white hover:bg-[#eeeeee] shadow-[0_15px_60px_rgba(173,173,173,0.2]">
                            <Typography className="font-bold text-base text-darkred-600">
                              <FunnelIcon className="w-5 h-5" />
                            </Typography>
                          </button>
                        </div>
                      </div>
                      <div className="mt-[18px]">
                        <Table {...salesValueTableData} />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            {/* Sales Value End */}

            {/* Sales Volume Begin */}
            <div className="mt-[3rem]">
              <Card className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[25px]">
                    <Typography className="font-bold text-[18px]">
                      Sales Volume
                    </Typography>
                  </div>
                  <Dropdown title="Export Chart" {...dropdownData.exportChart} className="!text-base"
                    officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                    onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
                </div>

                <div className="w-full mt-[28px]">
                  <div className="grid grid-cols-2 gap-4 px-[21px] py-[18px] rounded-2xl border border-[#808080] items-center lg:flex lg:gap-0 lg:justify-between">
                    <div className="text-center">
                      <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                        HIGHEST RANKED
                      </Typography>
                      <Typography className="text-[#666666] font-bold text-[18px]">
                        Fidson-3.85%
                      </Typography>
                    </div>
                    <div className="text-center">
                      <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                        MID RANKED
                      </Typography>
                      <Typography className="text-[#666666] font-bold text-[18px]">
                        Emzor-2.25%
                      </Typography>
                    </div>
                    <div className="text-center">
                      <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                        LOWEST RANKED
                      </Typography>
                      <Typography className="text-[#666666] font-bold text-[18px]">
                        Pfizer-0.25%
                      </Typography>
                    </div>
                    <div className="text-center">
                      <Typography className="text-[#1973af] font-bold text-[18px] capitalize">
                        Overall Volume Share
                      </Typography>
                      <Typography className="text-[#666666] font-bold text-[18px]">
                        3.25%
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className="mt-[30px]">
                  <div className="grid grid-cols-1 gap-2 lg:flex lg:justify-between">
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
                          <Flowbite.TextInput icon={MagnifyingGlassIcon} placeholder="Search for company name" style={{height: "48px", minWidth: "262px", flex: 1, background: "white"}} />
                        </div>
                        <div className="flex gap-2">
                          <Dropdown title="From Year" name="fromyear" options={[2017, 2018, 2019, 2020, 2021, 2022, 2023]} cols={1} className="w-full min-w-[155px]" />
                          <Dropdown title="To Year" name="toyear" options={[2017, 2018, 2019, 2020, 2021, 2022, 2023]} cols={1} className="w-full min-w-[130px]" />
                          <button className="px-[23px] py-[10px] rounded border border-[#e6e6e6] bg-white hover:bg-[#eeeeee] shadow-[0_15px_60px_rgba(173,173,173,0.2]">
                            <Typography className="font-bold text-base text-darkred-600">
                              <FunnelIcon className="w-5 h-5" />
                            </Typography>
                          </button>
                        </div>
                      </div>
                      <div className="mt-[18px]">
                        <Table {...salesVolumeTableData} />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            {/* Sales Volume End */}

            {/* % Sales Trend Begin */}
            <div className="mt-[48px]">
              <div className="grid grid-cols-1 lg:flex gap-5">
                {/* % Sales Value Trend Begin */}
                <div className="w-full">
                  <Card className="w-full px-3 py-4">
                    <div className="flex justify-between items-center gap-4">
                      <div className="grow flex items-center gap-[25px]">
                        <Typography className="font-bold text-[18px]">
                          % Sales value trend
                        </Typography>
                      </div>
                      <Dropdown title="Export Chart" {...dropdownData.exportChart} cols={1} className="!text-base"
                        officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                        onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
                    </div>
                    <div>
                      <StatisticsChart chart={statisticsChartsData[2].chart} />
                    </div>
                  </Card>
                </div>
                {/* % Sales Value Trend End */}
                {/* % Sales Volume Trend Begin */}
                <div className="w-full">
                  <Card className="w-full px-3 py-4">
                    <div className="flex justify-between items-center gap-4">
                      <div className="flex items-center gap-[25px]">
                        <Typography className="font-bold text-[18px]">
                          % Sales volume trend
                        </Typography>
                      </div>
                      <Dropdown title="Export Chart" {...dropdownData.exportChart} cols={1} className="!text-base"
                        officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                        onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
                    </div>
                    <div>
                      <StatisticsChart chart={statisticsChartsData[3].chart} />
                    </div>
                  </Card>
                </div>
                {/* % Sales Volume Trend End */}
              </div>
            </div>
            {/* % Sales Trend End */}

            {/* % of Sales Begin */}
            <div className="mt-[48px]">
              <Card className="p-4 !block !flex-row w-fit">
                <Typography className="text-[22px] font-bold text-[#1e1b39]">
                  % of sales
                </Typography>
                <CircleChart data={salesPercentage} />
              </Card>
            </div>
            {/* % of Sales End */}
          </div>
        </div>
        {/* Trend Page END */}
 
        {/* Share Page BEGIN */}
        <div className={`absolute w-full pb-[2rem] px-[30px] transition ${
          activeTabIndex === 1 ? "animate-tabappear z-10" : "z-0 hidden"
        }`}>
          <div className="mt-[36px]">
            <Typography className="text-[#333333] text-[32px] font-bold">
              Brand SKU Dashboard - <span className="text-darkred-600">Augmentin 252mg</span>
            </Typography>
          </div>

          <div className="grid grid-cols-2 mt-[48px] gap-2 md:flex md:flex-row md:gap-4 md:items-center p-0">
            <Dropdown title="Company" {...dropdownData.atclevel} />
            <Dropdown title="ATCLevel" {...dropdownData.atclevel} />
            <Dropdown title="Period" {...dropdownData.period} />
            <Dropdown title="Location" {...dropdownData.location} />
          </div>
        
          <div className="mt-[48px] w-full py-0 mx-0 px-0">
            <div className="md:w-1/2 md:mx-auto drop-shadow-[0_8px_30px_rgba(173,173,173,0.2)]">
              <SalesShare />
            </div>
          </div>

          <div className="mt-[48px]">
            <Card className="w-full px-[26px] py-[22px] rounded-[12px] drop-shadow-[0_10px_30px_rgb(173,173,173,0.2)]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[25px]">
                  <Typography className="font-bold text-[18px]">
                    Ranking for % Sales value Share
                  </Typography>
                  <Dropdown title="Top 10" name="top10" options={dropdownData.atclevel.options} cols={1}
                    itemType="radio" showClear={true} showApply={true} className="text-base" />
                </div>
                <Dropdown title="Export Chart" {...dropdownData.exportChart} cols={1} className="text-base"
                  officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                  onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
              </div>
              <div className="w-full mt-[50px] mb-[30px]">
                <div className="px-[5%]">
                  <StatisticsChart chart={rankingForSalesValueShare} />
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-[48px]">
            <Card className="w-full px-[26px] py-[22px] rounded-[12px] drop-shadow-[0_10px_30px_rgb(173,173,173,0.2)]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[25px]">
                  <Typography className="font-bold text-[18px]">
                    Ranking for % Sales volume Share
                  </Typography>
                  <Dropdown title="Top 20" name="top20" options={dropdownData.atclevel.options} cols={1}
                    officon={<ArrowUpOnSquareIcon className="w-4 h-4" />}
                    onicon={<ArrowUpOnSquareIcon className="w-4 h-4" />} />
                </div>
                <Dropdown title="Export Chart" {...dropdownData.exportChart} cols={1} className="text-base"
                  officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                  onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
              </div>

              <form className="w-full mt-[10px]">
                <div className="px-[5%]">
                  <Flowbite.TextInput icon={MagnifyingGlassIcon} placeholder="Search for company name" style={{height: "50px", minWidth: "317px", width: "30%", background: "white"}} />
                </div>
              </form>

              <div className="w-full mt-[10px] text-center">
                <div className="px-[5%]">
                  <Table {...tableData} />
                </div>

                <div className="flex justify-center items-center gap-4 mt-[37px]">
                  <button className="p-[10px] bg-white rounded border border-darkred-600 hover:bg-darkred-600 hover:text-white box-shadow-[0_15px_60px_rgba(173,173,173,0.2)]">
                    <ArrowLeftIcon className="w-6 h-6" />
                  </button>
                  <button className="py-[10px] px-[20px] bg-darkred-600 rounded border border-darkred-600 hover:bg-darkred-700 hover:border-darkred-700 box-shadow-[0_15px_60px_rgba(173,173,173,0.2)]">                    <div className="flex items-center text-white">
                      <Typography className="font-bold text-base">
                        Next
                      </Typography>&nbsp;
                      <ArrowRightIcon className="w-4 h-4 text-base font-bold" />
                    </div>
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
        {/* Share Page END */}
      </div>
    </div>
  )
} 