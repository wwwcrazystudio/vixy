<template>
    <div>
        <svg class="absolute h-0">
            <defs>
                <linearGradient id="shadowRegionGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop style="stop-color: #1940F3" offset="0%" stop-opacity="0.1"></stop>
                    <stop style="stop-color: #1940F3" offset="20%" stop-opacity="0.05"></stop>
                    <stop style="stop-color: #1940F3" offset="60%" stop-opacity="0"></stop>
                    <stop style="stop-color: #1940F3" offset="100%" stop-opacity="0"></stop>
                </linearGradient>
            </defs>
        </svg>
        <div class="w-full" ref="chartEl"> </div>
    </div>
</template>

<script setup lang="ts">
import { Chart } from "frappe-charts"
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';

export interface ChartProps {
    chartData: object
}

const props = defineProps<ChartProps>()

const chartEl = ref<HTMLElement>()
const chartInstance = ref<any>()

onMounted(async () => {
    await nextTick()
    if (chartEl.value && !chartInstance.value) {
        chartInstance.value = new Chart(chartEl.value, {
            data: {
                labels: ['1/1/2022', '2/1/2022', '3/1/2022', '4/1/2022', '5/1/2022', '6/1/2022', '7/1/2022'],
                datasets: [
                    {
                        values: [140, 170, 128, 140, 100, 90, 110]
                    }
                ]
            },
            type: 'line',
            height: 260,
            colors: ['#1940F3'],
            lineOptions: {
                spline: 1,
                regionFill: 1
            },
            tooltipOptions: {
                // Format timescale in case of timestamp data
                formatTooltipX: (d: any) => (d).toUpperCase(),
            },
            animate: false,
            axisOptions: {
                xIsSeries: true,   //default:false
                xAxisMode: "tick",
                yAxisMode: "span"
            },

        })
    }
})

watch(() => props.chartData, () => {
    if (chartInstance.value)
        chartInstance.value.update(props.chartData)
})

onUnmounted(() => {
    if (chartInstance.value) chartInstance.value.destroy()
})


</script>

<style>
.graph-svg-tip.comparison {
    display: flex !important;
    flex-direction: column-reverse !important;
    background: rgba(0, 0, 0, 0.6) !important;
    backdrop-filter: blur(2px) !important;
    border-radius: 4px !important;
    font-size: 16px !important;
    padding: 4px 8px !important;
    align-items: center !important;
    max-width: 70px !important;
    transform: translateY(-14px) !important;
}

.graph-svg-tip.comparison li {
    padding: 0 !important;
    margin-bottom: 4px !important;
}

.graph-svg-tip.comparison .title {
    font-size: 0.75rem !important;
    padding: 0 !important;
    margin-bottom: 6px !important;
}

.graph-svg-tip.comparison li {
    padding: 0 !important;
    border-top: none !important;
    text-align: center !important;
}

.graph-svg-tip .svg-pointer {
    border-top-color: rgba(0, 0, 0, 0.6) !important;
    backdrop-filter: blur(2px) !important;
    margin: 0 0 -14px -5px !important;
}

.chart-container .dataset-units .line-graph-path {
    stroke-dasharray: 6 !important;
    fill: none !important;
}

.chart-container .dataset-units .region-fill {
    fill: url(#shadowRegionGradient) !important;
}

.chart-container .dataset-units circle {
    fill: #fff !important;
    stroke: #1940F3 !important;
    r: 6 !important;
    stroke-width: 6px !important;
    transition: 350ms !important;
}

.chart-container .dataset-units circle:hover {
    r: 8 !important;
    transition: 350ms !important;
}

.chart-container .axis text {
    font-size: 18px !important;
    opacity: 0.6 !important;
}

@media (max-width: 1024px) {
    .chart-container .dataset-units circle {
        r: 4 !important;
        stroke-width: 3px !important;
        transition: 350ms !important;
    }

    .chart-container .axis text {
        font-size: 14px !important;
    }
}

.chart-container .x {
    transform: translateY(10px) !important;

}


.chart-container .y {
    transform: translatex(-10px) !important;

}
</style>