import {
  Typography,
  Card,
} from "@material-tailwind/react";
import { StatisticsChart } from '@/widgets/charts';
import { statisticsChartsData, dropdownData } from "@/data";
import { Dropdown } from '@/widgets/dropdown';
import { chartsConfig } from "@/configs";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import { SalesShare } from "@/widgets/sales-share";
import { Table } from "@/widgets/table";
import * as Flowbite from 'flowbite-react'

const salesValueTableData = {
  headers: [
    "Company Name", "Value Share", "% Value Share", "Change"
  ],
  data: [
    [ "Fidson", 12000, "3.25%", "+3.56%"],
    [ "M & B", 12000, "3.25%", "+3.56%"],
    [ "M & B", 12000, "3.25%", "+3.56%"],
    [ "GSK", 12000, "3.25%", "+3.56%"],
    [ "GSK", 12000, "3.25%", "+3.56%"],
  ]
}

const combinationForPrescription = {
  type: "area",
  height: 500,
  series: [{
    name: 'series1',
    data: [400, 300, 400, 500, 430, 250, 270, 300, 250]
  }],
  options: {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      }
    },
    colors: [
      "#ff718b"
    ],
    markers: {
      size: 8,
      colors: [
        "#ff718b"
      ],
      strokeWidth: 1,
      shape: "circle"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    grid: {
      show: false,
      padding: {
        left: 20
      }
    },
    xaxis: {
      categories: ["Ibuprofen", "Augmentin", "Cocodamol", "Panadol", "Emvit", "Coartem", "Cannon", "Amartem", "Lunart"]
    },
    yaxis: {
      labels: {
        show: false,
      }
    }
  }
};

export function CoPrescription() {
  return (
    <div className="w-full z-0">
      <div className="relative w-full">
        <div className="absolute w-full pb-[2rem] px-[30px] transition animate-tabappear z-10">
          <div className="mt-[36px]">
            <Typography className="text-[#333333] text-[32px] font-bold">
              Co-prescription Analysis Dashboard - <span className="text-darkred-600">Augmentin</span>
            </Typography>
          </div>

          <div className="grid grid-cols-2 mt-[48px] gap-2 md:flex md:flex-row md:gap-4 md:items-center p-0">
            <Dropdown title="Brand" {...dropdownData.brand} />
            <Dropdown title="SKU" {...dropdownData.sku} />
            <Dropdown title="ATCLevel 4" {...dropdownData.atclevel} />
            <Dropdown title="ATCLevel 5" {...dropdownData.atclevel} />
            <Dropdown title="Period" {...dropdownData.period} />
          </div>
          
          <div>
            {/* Sales Value Begin */}
            <div className="mt-[48px]">
              <Card className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[25px]">
                    <Typography className="font-bold text-[18px]">
                      Combination for&nbsp;
                      <span className="text-[#9f123a]">Augmentin</span>
                    </Typography>
                  </div>
                  <Dropdown title="Export Chart" {...dropdownData.exportChart} className="!text-base"
                    officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                    onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
                </div>
                <div className="mt-[100px]">
                  <StatisticsChart chart={combinationForPrescription} />
                </div>
              </Card>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}