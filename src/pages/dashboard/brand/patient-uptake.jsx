import {
  Typography,
  Card,
} from "@material-tailwind/react";
import { StatisticsChart } from '@/widgets/charts';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { statisticsChartsData, dropdownData } from "@/data";
import { Dropdown } from '@/widgets/dropdown';
import { chartsConfig } from "@/configs";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ArrowUpOnSquareIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Table } from "@/widgets/table";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const rankingForPatientShare = {
  headers: [
    "Brand Name", "Rank", "% Change", "Overall change"
  ],
  data: [
    ["Ibuprofen", 1, "+3.56%", "+3.56%"],
    ["Lunart", 2, "+3.56%", "+3.56%"],
    ["Cocodamol", 3, "+3.56%", "+3.56%"],
    ["Augmentin", 4, "+3.56%", "+3.56%"],
  ]
}

const patientShare = {
  labels: ['Augmentin', 'Ibuprofen', 'Lunart', 'Cocodamol'],
  datasets: [
    {
      label: 'patient share',
      backgroundColor: [
        "#962DFF",
        "#E0C6FD",
        "#C6D2FD",
        "#4A3AFF"
      ],
      data: [24, 26, 39, 11],
      values: [410, 142, 340, 590],
      borderRadius: 20
    }
  ]
};

const patientCountsForBrand = {
  type: "bar",
  height: 400,
  series: [
    {
      name: "Views",
      data: [30, 40, 33, 37, 47, 85, 23, 48, 52, 80],
    },
  ],
  options: {
    ...chartsConfig,
    colors: [
      "#109494",
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
        borderRadius: 5,
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return val;
      },
      style: {
        fontSize: "18px",
      }
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["Ibuprofen", "Augmentin", "Cocodamol", "Panadol", "Emvit", "Coartem", "Cannon", "Amartem", "Lunart", "Piriton"],
      labels: {
        style: {
          fontSize: "14px",
        }
      }
    },
    yaxis: {
      ...chartsConfig.yaxis,
      max: 100,
      tickAmount: 10,
      labels: {
        style: {
          fontSize: "10px",
          fontWeight: "500",
        }
      }
    },
    grid: {
      show: true,
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
    },
  },
};

export function PatientUptake() {
  ChartJS.register(ArcElement, ChartDataLabels);
  return (
    <div className="w-full z-0">
      <div className="relative w-full">
        <div className="absolute w-full pb-[2rem] px-[30px] transition animate-tabappear z-10">
          <div className="mt-[36px]">
            <Typography className="text-[#333333] text-[32px] font-bold">
              Brand Ranking Dashboard - <span className="text-darkred-600">Augmentin</span>
            </Typography>
          </div>

          <div className="grid grid-cols-2 mt-[48px] gap-2 md:flex md:flex-row md:gap-4 md:items-center p-0">
            <Dropdown title="Brand" {...dropdownData.brand} />
            <Dropdown title="SKU" {...dropdownData.sku} />
            <Dropdown title="Period" {...dropdownData.period} />
            <Dropdown title="Location" {...dropdownData.location} />
          </div>
          
          <div className="mt-[48px] grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* % Patient Share Begin */}
            <div>
              <Card className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[25px]">
                    <Typography className="font-bold text-[18px]">
                      % patient share
                    </Typography>
                  </div>
                  <Dropdown title="Export Chart" {...dropdownData.exportChart} className="!text-base"
                    officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                    onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
                </div>

                <div className="relative flex justify-center h-[350px]">
                  <Doughnut data={patientShare}
                    width={350}
                    height={350}
                    id="patient-share"
                    options={{
                      title: {
                        display: false,
                      },
                      legend: {
                        display: true,
                        position: 'bottom'
                      },
                      plugins: {
                        datalabels: {
                          color: 'white',
                          font: {
                            size: "22px",
                            weight: "bold"
                          },
                          formatter: function(value, context) {
                            return value + "%";
                          }
                        }
                      }
                    }} />
                  <div className="absolute flex justify-center items-center h-full">
                    <div>
                      <Typography className="text-[44px] font-bold text-[#1E1B39]">
                        85,626
                      </Typography>
                      <Typography className="text-[18px] text-center font-light text-[#9291A5]">
                          % Patient Share
                        </Typography>
                    </div>
                  </div>
                </div>

                <div className="mt-[18px] px-[79px]">
                  { patientShare.datasets[0].data.map((value, index) => {
                    const colors = [...patientShare.datasets[0].backgroundColor],
                      labels = [...patientShare.labels],
                      values = [...patientShare.datasets[0].values];
                    return (
                      <div className="flex justify-between items-center mt-[30px]" key={index}>
                        <div className="flex items-center gap-4">
                          <div className="w-[14px] h-[14px] rounded-full" style={{backgroundColor:colors[index]}}></div>
                          <Typography className="text-[18px] font-bold text-[#615E83]">
                            {labels[index]}
                          </Typography>
                        </div>
                        <Typography className="text-[18px] font-light text-[#9291A5]">
                          {values[index]}
                        </Typography>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-[30px]">
                  <div className="grid grid-cols-1 gap-2 lg:flex lg:justify-center">
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
            {/* % Patient Share End */}

            {/* % Patient Share Trend Begin */}
            <div>
              <Card className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[25px]">
                    <Typography className="font-bold text-[18px]">
                      % Patient share trend
                    </Typography>
                  </div>
                  <Dropdown title="Export Chart" {...dropdownData.exportChart} className="!text-base"
                    officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                    onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
                </div>
                <div>
                  <StatisticsChart chart={statisticsChartsData[2].chart} />
                </div>
                <div className="text-center">
                  <Typography className="font-normal text-[12px] text-[#666666]">
                    Patients
                  </Typography>
                </div>
              </Card>
            </div>
            {/* % Patient Share Trend End */}
          </div>

          {/* Ranking for % Patient share Begin */}
          <div className="mt-[48px]">
            <Card className="w-full">
              <div className="flex justify-between items-center gap-4 px-5 mt-5">
                <div className="grow flex items-center gap-[25px]">
                  <Typography className="font-bold text-[18px]">
                    % Sales value trend
                  </Typography>
                </div>
                <Dropdown title="Export Chart" {...dropdownData.exportChart} cols={1} className="!text-base"
                  officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                  onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
              </div>
              <div className="mt-[48px] mb-[30px] px-[149px]">
                <Table {...rankingForPatientShare} />
              </div>
            </Card>
          </div>
          {/* Ranking for % Patient share End */}

          {/* Patient Counts for brand Begin */}
          <div className="mt-[48px]">
            <Card className="w-full py-4">
              <div className="flex justify-between items-center gap-4 px-5">
                <div className="grow flex items-center gap-[25px]">
                  <Typography className="font-bold text-[18px]">
                    % Sales value trend
                  </Typography>
                </div>
                <Dropdown title="Export Chart" {...dropdownData.exportChart} cols={1} className="!text-base"
                  officon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />}
                  onicon={<ArrowUpOnSquareIcon className="w-4 h-4 text-darkred-600" />} />
              </div>
              <div className="mt-[48px] px-[149px]">
                <StatisticsChart chart={patientCountsForBrand} />
              </div>
              <div className="mt-[30px]">
                <div className="grid grid-cols-1 gap-2 lg:flex lg:justify-center">
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
          {/* Patient Counts for brand End */}
        </div>
      </div>
    </div>
  )
} 