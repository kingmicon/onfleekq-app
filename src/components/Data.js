import React, { useEffect } from 'react';
import Chart from "react-apexcharts"
import ApexCharts from 'apexcharts';
import dayjs from "dayjs"



const Data = () => {
    const options = {
        series: [{
            name: "candle",
            data: [
                {
                    x: new Date("11"),
                    y: [10, 2, 5, 6]
                },
                {
                    x: new Date("12"),
                    y: [5, 1, 10, 9]
                },
                {
                   x: new Date("01"),
                    y: [5, 10, 8, 5]
                },
                {
                    x: new Date("02"),
                    y: [8, 3, 10, 8]
                },
                {
                    x: new Date("03"),
                    y: [1, 7.2, 5.3, 9.2]
                },
                {
                    x: new Date("04"),
                    y: [1.36, 2.59, 8.26, 9.39]
                },
                {
                    x: new Date("05"),
                    y: [6.36, 5.81, 6.23, 3.36]
                },
                {
                    x: new Date("06"),
                    y: [10, 9.2, 1.37, 3]
                },
                {
                    x: new Date("07"),
                    y: [9.82, 3.53, 2.39, 2.63]
                }
            ]
        }],
        chart: {
            height: 200,
            width: 550,
            type: "candlestick",
            toolbar: {
                show: false
            }    
        },
        title: {
            text: "",
            align: "left"
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: "#3326AE",
                    downward: "#3326AE"
                },
            }
        },
        xaxis: {
            type: "datetime",
            axisBorder: {
                offsetX: 13
            },
            labels: {formatter: function(val) {return dayjs(val).format("MMM")}}
        },

    };

    useEffect (() => {
        
        const chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
        return () => {
            chart.destroy()
        };
    }, []);

    return (
        <div id="chart" className='chart-statistic'>
            <Chart options={options} series={options.series} type="candlestick" height={350} />
        </div>
    );

   

}
    

export default Data