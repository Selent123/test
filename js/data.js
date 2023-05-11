function getChartData(){
    var requests = JSON.parse(_request('month'))
    var chartDom = document.getElementById('curve-chart');
        var myChart = echarts.init(chartDom);
        var option = {
            title: {
                text: '曲线图数据展示',
                left: 'center'
            },
            xAxis: {
                type: 'category',
                // data:["01/26","01/28","01/30","02/01","02/03","02/05","02/07","02/09","02/11","02/13","02/15","02/17","02/19","02/21","02/23"],
                data : requests.data.xAxis
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} 人'
                }
            },
            series: [
                {
                    label: {
                        show: true,
                        position: 'top'
                    },
                    // data: [8972,6448,7456,5824,8123,800,300,5348,7463,1435,9426,8187,8297,43,9135],
                    data : requests.data.series,
                    type: 'line',
                    smooth: true
                }
            ]
        };
        myChart.setOption(option);
}

function pieChartData(){
    var requests = JSON.parse(_request('week'))
    var xAxis = requests.data.xAxis
    var series = requests.data.series
    var chartData = [];
    for (i = 0; i < xAxis.length; i++) {
        var item = { name: xAxis[i],value: series[i] }
        chartData.push(item)
     }
    var chartDom = document.getElementById('pie-chart');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        title: {
            text: '饼状图数据展示',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: '75%',
            data:  chartData,
            emphasis: {
                itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            }
        ]
    };
    myChart.setOption(option);
}

function barChartData(){
    var requests = JSON.parse(_request('week'))
    var xAxis = requests.data.xAxis
    var series = requests.data.series
    var chartDom = document.getElementById('bar-chart');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title: {
            text: '柱状图数据展示',
            left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: xAxis,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: series
          }
        ]
    };
    option && myChart.setOption(option);
}