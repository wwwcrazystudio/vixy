<template>
    <div class="grow shrink w-full  px-8 flex flex-col items-start bg-darkgray">
        <div class="flex py-4 px-1.5 border-b border-gray w-full mb-6">
            <RouterLink class="flex items-center" to="/chat">
                <svg class="mr-8" width="24" height="24" viewBox="0 0 24 24" fill="none"
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
        <div class="flex items-center mb-6 w-full">
            <div class="font-medium text-32">Аналитика</div>

            <div class="flex tems-center rounded-lg bg-white shadow-basic p-3 ml-auto">
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

            <button class="p-3 rounded-lg bg-white shadow-basic grid place-content-center ml-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                        <path
                            d="M12 1L8 5H11V14H13V5H16L12 1ZM18 23H6C4.89 23 4 22.1 4 21V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H9V9H6V21H18V9H15V7H18C18.5304 7 19.0391 7.21071 19.4142 7.58579C19.7893 7.96086 20 8.46957 20 9V21C20 21.5304 19.7893 22.0391 19.4142 22.4142C19.0391 22.7893 18.5304 23 18 23Z"
                            fill="black" />
                    </g>
                </svg>
            </button>
        </div>

        <ul class="list-none w-full grid grid-cols-4 gap-4 items-stretch mb-4">
            <li class="shadow-basic bg-white rounded-2xl p-6 flex flex-col h-[274px]">
                <div class="mb-8"> Нажатия на кнопку</div>
                <div class="text-accent font-bold text-[56px]">650</div>

                <div class="mt-auto text-sm opacity-60">Общее количество нажатий на кнопку видеосвязи</div>
            </li>

            <li class="shadow-basic bg-white rounded-2xl p-6 flex flex-col h-[274px]">
                <div class="mb-8"> Количество запросов</div>
                <div class="text-accent font-bold text-[56px]">24</div>

                <div class="mt-auto text-sm opacity-60">Общее количество отправленных запросов</div>
            </li>

            <li class="shadow-basic bg-white rounded-2xl p-6 flex flex-col h-[274px]">
                <div class="mb-8"> Количество стримов</div>
                <div class="text-accent font-bold text-[56px]">344</div>

                <div class="mt-auto text-sm opacity-60">Общее количество стримов</div>
            </li>

            <li class="shadow-basic bg-white rounded-2xl p-6 flex flex-col h-[274px]">
                <div class="mb-8"> Средняя длительность</div>
                <div class="text-accent font-bold text-[56px]">3,45 <sup class="text-base align-super">мин./стрим</sup>
                </div>

                <div class="mt-auto text-sm opacity-60">Общее среднее время длительности всех стримов</div>
            </li>
        </ul>

        <div class="shadow-basic bg-white rounded-2xl p-6 w-full">
            <div>Статистика за выбранный период</div>
            <div class="text-sm opacity-60 mb-6">На этой неделе</div>

            <Chart class="w-full" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Chart from "../../components/Chart.vue";
</script>