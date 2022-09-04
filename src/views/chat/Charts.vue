<template>
    <div class="grow shrink px-4 md:px-8 flex flex-col items-start bg-darkgray overflow-auto pb-8" @touchmove.stop>
        <div class="flex py-4 px-1.5 border-b border-gray w-full mb-6">
            <RouterLink class="flex items-center" to="/chat">
                <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                        <path
                            d="M13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711L9.41421 12L13.7071 16.2929C14.0976 16.6834 14.0976 17.3166 13.7071 17.7071C13.3166 18.0976 12.6834 18.0976 12.2929 17.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289Z"
                            fill="black" />
                    </g>
                </svg>

                Назад к чату
            </RouterLink>
        </div>
        <div class="flex flex-wrap md:items-center mb-6 w-full">
            <div class="font-medium w-full mb-4 md:mb-0 md:w-auto text-2xl md:text-32">Аналитика</div>

            <div class="flex grow md:grow-0 justify-center items-center rounded-lg bg-white shadow-basic  px-2 md:px-3 ml-auto h-12">
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 7.42L10.83 12L15.41 16.59L14 18L8.00003 12L14 6L15.41 7.42Z" fill="black" />
                    </svg>
                </button>
                <div class="mx-2 text-lg">На этой неделе</div>
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.58997 16.58L13.17 12L8.58997 7.41L9.99997 6L16 12L9.99997 18L8.58997 16.58Z"
                            fill="black" />
                    </svg>
                </button>
            </div>

            <button class="w-12 h-12 ml-4 rounded-lg bg-white shadow-basic grid place-content-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                        <path
                            d="M12 1L8 5H11V14H13V5H16L12 1ZM18 23H6C4.89 23 4 22.1 4 21V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H9V9H6V21H18V9H15V7H18C18.5304 7 19.0391 7.21071 19.4142 7.58579C19.7893 7.96086 20 8.46957 20 9V21C20 21.5304 19.7893 22.0391 19.4142 22.4142C19.0391 22.7893 18.5304 23 18 23Z"
                            fill="black" />
                    </g>
                </svg>
            </button>
        </div>

        <ul class="list-none w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch mb-4">
            <ChartsCard title="Нажатия на кнопку" number="650"
                description="Общее количество нажатий на&nbsp;кнопку&nbsp;видеосвязи" />

            <ChartsCard title="Количество запросов" number="24"
                description="Общее количество нажатий на&nbsp;кнопку&nbsp;видеосвязи" />

            <ChartsCard title="Количество стримов" number="344" description="Общее количество&nbsp;стримов" />

            <ChartsCard title="Средняя длительность"
                number="3,45 <sup class='text-base align-super'>мин./стрим</sup>"
                description="Общее среднее время длительности всех&nbsp;стримов" />

        </ul>

        <div class="shadow-basic bg-white rounded-2xl p-4 md:p-6 w-full">
            <div>Статистика за&nbsp;выбранный период</div>
            <div class="text-sm opacity-60 mb-4 md:mb-6">На этой неделе</div>

            <Chart :data="data" class="w-full" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Chart from "../../components/Chart.vue";
import ChartsCard from "@/components/ChartsCard.vue";

const data = {
    labels: ['1/1/2022', '2/1/2022', '3/1/2022', '4/1/2022', '5/1/2022', '6/1/2022', '7/1/2022'],
    datasets: [
        {
            values: [140, 170, 138, 120, 100, 90, 110]
        }
    ]
};
</script>