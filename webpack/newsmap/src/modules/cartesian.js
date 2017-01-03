import echarts from 'echarts'

export default {
    container: document.getElementById('cartesian'),
    opts: {
        animation: false,
        grid: {
            height: '70%',
            y: '5%'
        },
        xAxis: {
            type: 'category',
            data: [],
            splitArea: {
                show: true
            }
        },
        yAxis: {
            type: 'category',
            data: [],
            splitArea: {
                show: true
            }
        },
        visualMap: {
            min: 0,
            max: 600,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '5%'
        },
        series: [
            {
                name: 'Punch Card',
                type: 'heatmap',
                data: [],
                label: {
                    normal: {
                        show: true
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    },
    sketch (data) {
        for (let i = 0; i < 25; i++) {
            this.opts.xAxis.data.push(i.toString());
        }
        for (let i = 0; i < 32; i++) {
            this.opts.yAxis.data.push('2015/12/' + i);
        }

        var city = data.city || '北京';
        var result = [];
        var data = data.data[city];
        for (let i in data) {
            var item = [];
            for (let key in data[i]) {
                item.push(data[i][key]);
            }
            result.push(item);
        }
        result = result.map(function (item) {
            return [item[1], item[0], item[2] || '-'];
        });

        this.opts.series[0].data = result;
        echarts.init(this.container).setOption(this.opts);
    }
}
