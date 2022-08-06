<template>
    <div class="w-full">
        <div class="relative">
            <div ref="container" class="w-full keen-slider">
                <AdvBanner
                    class="keen-slider__slide number-slide1"
                    v-for="(banner, key) in banners"
                    :key="key"
                    :banner="banner"
                />
            </div>
            <button
                @click="slider?.next()"
                class="w-10 h-10 rounded-full bg-accent absolute right-4 top-0 bottom-0 m-auto grid place-content-center z-20"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.2929 17.7071C9.90237 17.3166 9.90237 16.6834 10.2929 16.2929L14.5858 12L10.2929 7.70711C9.90237 7.31658 9.90237 6.68342 10.2929 6.29289C10.6834 5.90237 11.3166 5.90237 11.7071 6.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L11.7071 17.7071C11.3166 18.0976 10.6834 18.0976 10.2929 17.7071Z"
                        fill="white"
                    />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import AdvBanner from './AdvBanner.vue'
import { useKeenSlider } from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'
import type { BannerType } from '@/types/components.interface';

export interface Props {
    banners: BannerType[]
}

const [container, slider] = useKeenSlider({
    slides: {
        perView: 1,
    },
    loop: true,
    breakpoints: {
        '(min-width: 768px)': {
            slides: {
                perView: 2.8,
                spacing: 8,
            },
        },
    },
})

defineProps<Props>()
</script>
