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
        <div class="w-full" ref="chartEl">

        </div>
    </div>
</template>

<script setup lang="ts">
import { Chart } from "frappe-charts"
import { onMounted, ref, watch } from 'vue';

export interface ChartProps {
    data: object
}

const props = defineProps<ChartProps>()

const chartEl = ref<HTMLElement>()
const chart = ref<any>()

onMounted(() => {
    if (chartEl.value) {
        chart.value = new Chart(chartEl.value, {
            data: props.data,
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

watch(() => props.data, () => {
    if (chart.value)
        chart.value.update(props.data)
})


</script>

<style>
.graph-svg-tip.comparison {
    display: flex;
    flex-direction: column-reverse;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(2px);
    border-radius: 4px;
    font-size: 16px;
    padding: 4px 8px;
    align-items: center;
    max-width: 70px;
    transform: translateY(-10px);
}

.graph-svg-tip.comparison li {
    padding: 0 !important;
    margin-bottom: 4px;
}

.graph-svg-tip.comparison .title {
    font-size: 0.75rem;
    padding: 0 !important;
}

.graph-svg-tip.comparison li {
    padding: 0;
    border-top: none !important;
    text-align: center;
}

.graph-svg-tip .svg-pointer {
    border-top-color: rgba(0, 0, 0, 0.6) !important;
    backdrop-filter: blur(2px);
    margin: 0 0 -14px -5px !important;
}

.chart-container .dataset-units .line-graph-path {
    stroke-dasharray: 6;
    fill: none !important;
}

.chart-container .dataset-units .region-fill {
    fill: url(#shadowRegionGradient) !important;
}

.chart-container .dataset-units circle {
    fill: #fff !important;
    stroke: #1940F3 !important;
    r: 6;
    stroke-width: 6px;
    transition: 350ms;
}

.chart-container .dataset-units circle:hover {
    r: 8;
    transition: 350ms;
}

.chart-container .axis text {
    font-size: 18px;
    opacity: 0.6;
}

@media (max-width: 1024px) {
    .chart-container .dataset-units circle {
        r: 4;
        stroke-width: 3px;
        transition: 350ms;
    }

    .chart-container .axis text {
        font-size: 14px;
    }
}

.chart-container .x {
    transform: translateY(10px);

}


.chart-container .y {
    transform: translatex(-10px);

}
</style>