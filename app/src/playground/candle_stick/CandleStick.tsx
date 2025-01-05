import { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-enterprise";
import "ag-charts-enterprise";

const CandleStick = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    data: [
      {
        date: new Date("Monday, July 31, 2023"),
        open: 4584.82,
        high: 4594.22,
        low: 4573.14,
        close: 4588.96,
        volume: 2411537985000,
      },
      {
        date: new Date("Tuesday, August 01, 2023"),
        open: 4578.83,
        high: 4584.62,
        low: 4567.53,
        close: 4576.73,
        volume: 2172699881000,
      },
      {
        date: new Date("Wednesday, August 02, 2023"),
        open: 4550.93,
        high: 4550.93,
        low: 4505.75,
        close: 4513.39,
        volume: 2466207896000,
      },
      {
        date: new Date("Thursday, August 03, 2023"),
        open: 4494.27,
        high: 4519.49,
        low: 4485.54,
        close: 4501.89,
        volume: 2351421483000,
      },
      {
        date: new Date("Friday, August 04, 2023"),
        open: 4513.96,
        high: 4540.34,
        low: 4474.55,
        close: 4478.03,
        volume: 2386696495000,
      },
      {
        date: new Date("Monday, August 07, 2023"),
        open: 4491.58,
        high: 4519.84,
        low: 4491.15,
        close: 4518.44,
        volume: 2055431221000,
      },
      {
        date: new Date("Tuesday, August 08, 2023"),
        open: 4498.03,
        high: 4503.31,
        low: 4464.39,
        close: 4499.38,
        volume: 2172253124000,
      },
      {
        date: new Date("Wednesday, August 09, 2023"),
        open: 4501.57,
        high: 4502.44,
        low: 4461.33,
        close: 4467.71,
        volume: 2046722089000,
      },
      {
        date: new Date("Thursday, August 10, 2023"),
        open: 4487.16,
        high: 4527.37,
        low: 4457.92,
        close: 4468.83,
        volume: 2111185396000,
      },
      {
        date: new Date("Friday, August 11, 2023"),
        open: 4450.69,
        high: 4476.23,
        low: 4443.98,
        close: 4464.05,
        volume: 1850766477000,
      },
      {
        date: new Date("Monday, August 14, 2023"),
        open: 4458.13,
        high: 4490.33,
        low: 4453.44,
        close: 4489.72,
        volume: 1955913253000,
      },
      {
        date: new Date("Tuesday, August 15, 2023"),
        open: 4478.87,
        high: 4478.87,
        low: 4432.19,
        close: 4437.86,
        volume: 1977157506000,
      },
      {
        date: new Date("Wednesday, August 16, 2023"),
        open: 4433.79,
        high: 4449.95,
        low: 4403.55,
        close: 4404.33,
        volume: 2001143711000,
      },
      {
        date: new Date("Thursday, August 17, 2023"),
        open: 4416.32,
        high: 4421.17,
        low: 4364.83,
        close: 4370.36,
        volume: 2216839469000,
      },
      {
        date: new Date("Friday, August 18, 2023"),
        open: 4344.88,
        high: 4381.82,
        low: 4335.31,
        close: 4369.71,
        volume: 2157858548000,
      },
      {
        date: new Date("Monday, August 21, 2023"),
        open: 4380.28,
        high: 4407.55,
        low: 4360.3,
        close: 4399.77,
        volume: 2057592847000,
      },
      {
        date: new Date("Tuesday, August 22, 2023"),
        open: 4415.33,
        high: 4418.59,
        low: 4382.77,
        close: 4387.55,
        volume: 1905849406000,
      },
      {
        date: new Date("Wednesday, August 23, 2023"),
        open: 4396.44,
        high: 4443.18,
        low: 4396.44,
        close: 4436.01,
        volume: 2013748142000,
      },
      {
        date: new Date("Thursday, August 24, 2023"),
        open: 4455.16,
        high: 4458.3,
        low: 4375.55,
        close: 4376.31,
        volume: 2077193771000,
      },
      {
        date: new Date("Friday, August 25, 2023"),
        open: 4389.38,
        high: 4418.46,
        low: 4356.29,
        close: 4405.71,
        volume: 1959845124000,
      },

      {
        date: new Date("Monday, August 28, 2023"),
        open: 4426.03,
        high: 4439.56,
        low: 4414.98,
        close: 4433.31,
        volume: 1669881577000,
      },
      {
        date: new Date("Tuesday, August 29, 2023"),
        open: 4432.75,
        high: 4500.14,
        low: 4431.68,
        close: 4497.63,
        volume: 1936663046000,
      },
      {
        date: new Date("Wednesday, August 30, 2023"),
        open: 4500.34,
        high: 4521.65,
        low: 4493.59,
        close: 4514.87,
        volume: 1827645178000,
      },

      {
        date: new Date("Thursday, August 31, 2023"),
        open: 4517.01,
        high: 4532.26,
        low: 4507.39,
        close: 4507.66,
        volume: 2352361081000,
      },

      {
        date: new Date("Friday, September 01, 2023"),
        open: 4530.6,
        high: 4541.25,
        low: 4501.35,
        close: 4515.77,
        volume: 1958155311000,
      },
      {
        date: new Date("Tuesday, September 05, 2023"),
        open: 4510.06,
        high: 4514.29,
        low: 4496.01,
        close: 4496.83,
        volume: 2128341430000,
      },
      {
        date: new Date("Wednesday, September 06, 2023"),
        open: 4490.35,
        high: 4490.35,
        low: 4442.38,
        close: 4465.48,
        volume: 2138052710000,
      },
      {
        date: new Date("Thursday, September 07, 2023"),
        open: 4434.55,
        high: 4457.81,
        low: 4430.46,
        close: 4451.14,
        volume: 2441134922000,
      },
      {
        date: new Date("Friday, September 08, 2023"),
        open: 4451.3,
        high: 4473.53,
        low: 4448.38,
        close: 4457.49,
        volume: 2076441612000,
      },
      {
        date: new Date("Monday, September 11, 2023"),
        open: 4480.98,
        high: 4490.77,
        low: 4467.89,
        close: 4487.46,
        volume: 2165432434000,
      },
      {
        date: new Date("Tuesday, September 12, 2023"),
        open: 4473.27,
        high: 4487.11,
        low: 4456.83,
        close: 4461.9,
        volume: 2184137855000,
      },
      {
        date: new Date("Wednesday, September 13, 2023"),
        open: 4462.65,
        high: 4479.39,
        low: 4453.52,
        close: 4467.44,
        volume: 2268926200000,
      },
    ],
    title: {
      text: "S&P 500 Index",
    },
    subtitle: {
      text: "Daily High and Low Prices",
    },
    footnote: {
      text: "1 Aug 2023 - 1 Nov 2023",
    },
    series: [
      {
        type: "candlestick",
        xKey: "date",
        xName: "Date",
        lowKey: "low",
        highKey: "high",
        openKey: "open",
        closeKey: "close",
      },
    ],
  });

  return <AgCharts options={options as any} />;
};

export default CandleStick;
