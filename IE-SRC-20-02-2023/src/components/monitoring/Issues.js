import React from "react";
import ReactApexChart from "react-apexcharts";

class Issues extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Issues Raised',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, 
        {
          name: 'Issues Resolved',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, 
      ],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          toolbar: {
            show: false
        },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
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
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          },
          yaxis: {
            title: {
                show: false,
            },
            min:0,
            max: 100,
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: false,
            offsetY: 0,
            offsetX: 0,
            fontSize: '12px',
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 600,
          
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val;
              }
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={250} />
</div>

);
}
}
export default Issues;