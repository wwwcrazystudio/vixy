<template>
    <div>
        <div class="w-full" ref="chart">

        </div>
    </div>
</template>

<script setup lang="ts">
import { Line, Interpolation } from 'chartist';
import { onMounted, ref } from 'vue';
import 'chartist/dist/chartist.min.css'

const chart = ref<HTMLElement>()

onMounted(() => {
    var data = {
        // A labels array that can contain any sort of values
        labels: ['1/1/2022', '2/1/2022', '3/1/2022', '4/1/2022', '5/1/2022', '6/1/2022', '7/1/2022'],
        // Our series array that contains series objects or in this case series data arrays
        series: [{
            name: 'data',
            data: [140, 150, 138, 120, 100, 90, 110]
        }]
    };

    const options = {
        fullWidth: true,
        series: {
            'data': {
                lineSmooth: Interpolation.simple(),
                showArea: true
            },
        },
        axisX: {
            showGrid: false,
        },
        height: '350px',
        chartPadding: 0,
        high: 200,
        low: 0,
    }

    // As options we currently only set a static size of 300x200 px. We can also omit this and use aspect ratio containers

    // Create a new line chart object where as first parameter we pass in a selector
    // that is resolving to our chart container element. The Second parameter
    // is the actual data object. As a third parameter we pass in our custom options.
    new Line(chart.value, data, options);
})
</script>

<style>
.ct-series-a .ct-line {
    stroke-dasharray: 4;
    stroke-width: 2px;
    stroke: #1940F3;
}

.ct-series-a .ct-bar,
.ct-series-a .ct-line,
.ct-series-a .ct-point,
.ct-series-a .ct-slice-donut {
    width: 16px;
    height: 16px;
    stroke: #1940F3;
    border-radius: 50%;
    border: 2px solid #fff;
    position: relative;

}

.ct-grid {
    stroke-dasharray: 0;
    stroke: #d8d8d8;
}

.ct-series-a .ct-area,
.ct-series-a .ct-slice-donut-solid,
.ct-series-a .ct-slice-pie {
    fill: #1940F3;
    opacity: 0.2;
}
</style>