<template>
    <div class="bg-dark flex flex-col">
        <div class="m-auto mb-0">
            <div class="text-white">
                <div
                    class="w-20 h-20 bg-white grid place-content-center rounded-full mb-4 mx-auto"
                >
                    <svg
                        width="38"
                        height="38"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <path
                            d="M0.333008 37.9454H37.6663V0.612029H0.333008V37.9454Z"
                            fill="url(#pattern0)"
                        />
                        <defs>
                            <pattern
                                id="pattern0"
                                patternContentUnits="objectBoundingBox"
                                width="1"
                                height="1"
                            >
                                <use
                                    xlink:href="#image0_414_4961"
                                    transform="scale(0.015625)"
                                />
                            </pattern>
                            <image
                                id="image0_414_4961"
                                width="64"
                                height="64"
                                xlink:href="data:image/png;base64,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"
                            />
                        </defs>
                    </svg>
                </div>
                Unknown Purple Oyster
            </div>

            <div class="text-white/60 text-center">Звонок завершен</div>
        </div>

        <div class="mt-auto mx-auto mb-8">
            <Button class="w-80 block">Оценить качество связи</Button>
            <Button transparent class="w-80 block text-white mt-3"
                >Вернуться к&nbsp;диалогам</Button
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '../Button.vue'
</script>
