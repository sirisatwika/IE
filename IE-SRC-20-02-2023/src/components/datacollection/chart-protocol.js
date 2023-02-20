import React from 'react'
import ReactApexChart from "react-apexcharts";

class Deviceprotocol extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: [50, 40, 60, 55, 70]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                },                
                plotOptions: {
                    bar: {
                        columnWidth: '35%',
                        distributed: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: ['Modbus', 'REST', 'MQTT', 'Modbus', 'REST' ],
                    title:{
                        Text:'adf',
                    },
                    labels: {
                        style: {
                            fontSize: '12px'
                        }
                    }
                },
                yaxis:{
                    show: true,
                    title:{
                        Text:'adf',
                    },
                },
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" />
            </div>
        )
    }
}
export default Deviceprotocol;