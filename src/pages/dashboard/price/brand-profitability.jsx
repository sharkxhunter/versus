import {
  Typography,
  Card,
} from "@material-tailwind/react";
import { StatisticsChart } from '@/widgets/charts';
import { dropdownData } from "@/data";
import { Dropdown } from '@/widgets/dropdown';
import { chartsConfig } from "@/configs";
import { months } from "@/data";
import { ArrowUpOnSquareIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Table } from "@/widgets/table";
import * as Flowbite from 'flowbite-react'
import { FunnelIcon } from "@heroicons/react/24/outline";

const percentages = [13.7, 11, 11, 11, 11, 11, 11, 11, 11, 11];

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
        return Number(percentages[opts.dataPointIndex]).toFixed(1) + "%";
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

const retailProfitability = {
  headers: [
    "Brand/SKU", "Purchase price", "Sales price", "% Profitability", "% Change"
  ],
  data: [
    ["Ibuprofen 100mg", "#2,550", "#2,550", "3.84%", "-0.06%"],
    ["Augmentin 252mg", "#3,200", "#2,550", "4.25%", "+0.46%"],
    ["Cocodamol 100mg", "#2,550", "#2,550", "4.25%", "-0.06%"],
    ["Lunart 100mg", "#3,750", "#2,550", "4.25%", "+0.46%"],
    ["Amartem 100mg", "#1,705", "#2,550", "4.25%", "-0.06%"],
    ["Amplicox 100mg", "#3,380", "#2,550", "4.25%", "+0.46%"],
    ["Paracetamol 100mg", "#2,185", "#2,550", "4.25%", "-0.06%"],
    ["Paracetamol 100mg", "#4,000", "#2,550", "4.25%", "+0.46%"],
    ["Paracetamol 100mg", "#1,900", "#2,550", "4.25%", "+0.46%"],
    ["Paracetamol 100mg", "#2,550", "#2,550", "4.25%", "+0.46%"],
  ]
}

export function BrandProfitability() {
  return (
    <div className="w-full z-0">
      <div className="relative w-full">
        <div className="absolute w-full pb-[2rem] px-[30px] transition animate-tabappear z-10">
          <div className="mt-[36px]">
            <Typography className="text-[#333333] text-[32px] font-bold">
              Profitability Analytics Dashboard - <span className="text-darkred-600">Augmentin 252mg</span>
            </Typography>
          </div>

          <div className="grid grid-cols-2 mt-[48px] gap-2 md:flex md:flex-row md:gap-4 md:items-center p-0">
            <Dropdown title="ATCLevel" {...dropdownData.atclevel} />
            <Dropdown title="Brand" {...dropdownData.brand} />
            <Dropdown title="SKU" {...dropdownData.sku} />
            <Dropdown title="Period" {...dropdownData.period} />
            <Dropdown title="Location" {...dropdownData.location} />
          </div>
          
          <div>
            {/* Brand Price Ranking in Value Begin */}
            <div className="mt-[48px]">
              <Card className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[25px]">
                    <Typography className="font-bold text-[18px]">
                      Brand price Ranking in Value
                    </Typography>
                    <Dropdown title="Top 10" {...dropdownData.atclevel} />
                  </div>
                  <Dropdown title="Export Chart" {...dropdownData.exportChart} className="!text-base"
                    officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                    onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
                </div>

                <div className="w-full mt-[28px] px-[20px]">
                  <div className="w-full px-[21px] py-[18px] rounded-2xl border border-[#808080]">
                    <div className="mt-4 grid grid-cols-1 gap-4 items-center md:flex md:justify-between">
                      <div className="text-center">
                        <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                          Most Profitable
                        </Typography>
                        <Typography className="text-[#666666] font-bold text-[18px]">
                          Ibuprofen 500mg - #3,800
                        </Typography>
                      </div>
                      <div className="text-center">
                        <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                          Least Profitable
                        </Typography>
                        <Typography className="text-[#666666] font-bold text-[18px]">
                          Emvit 500mg - #2,650
                        </Typography>
                      </div>
                      <div className="text-center">
                        <Typography className="text-[#1973af] font-bold text-[18px] uppercase">
                          Average Profitability
                        </Typography>
                        <Typography className="text-[#666666] font-bold text-[18px]">
                          Panadol 252mg - 36.2%
                        </Typography>
                      </div>
                      <div className="text-center">
                        <Typography className="text-[#1973af] font-bold text-[18px] capitalize">
                          Filter Selection
                        </Typography>
                        <Typography className="text-[#666666] font-bold text-[18px]">
                          Panadol 252mg - #1,200
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
            {/* Brand Price Ranking in Value End */}

            {/* Retail Profitability Analysis Begin */}
            <div className="mt-[48px]">
              <Card className="p-5 relative">
                <div className="flex justify-between items-center">
                  <Typography className="font-bold text-[18px]">
                    Retail Profitability Analysis
                  </Typography>
                  <Dropdown title="Export Chart" {...dropdownData.exportChart} className="!text-base"
                    officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                    onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
                </div>

                <div>
                  <div className="w-full px-[100px]">
                    <div className="mt-[20px]">
                      <Table {...retailProfitability} />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            {/* Retail Profitability Analysis End */}
          </div>
        </div>
      </div>
    </div>
  )
} 