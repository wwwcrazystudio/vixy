<template>
    <Modal class="max-w-[calc(100%-1rem)] md:!max-w-md h-fit" :class="selectedVideo && '!max-w-[620px] !p-4'" @close="$emit('close')">
        <div class="text-2xl mb-2 sm:mb-6 relative" :class="selectedVideo && '!text-base ml-8'">

            <button class="absolute -left-8 top-0" v-if="selectedVideo" @click="selectedVideo = undefined">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                        <path
                            d="M13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711L9.41421 12L13.7071 16.2929C14.0976 16.6834 14.0976 17.3166 13.7071 17.7071C13.3166 18.0976 12.6834 18.0976 12.2929 17.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289Z"
                            fill="black" />
                    </g>
                </svg>

            </button>
            История видеовызовов
        </div>

        <template v-if="!selectedVideo">
            <div class="relative">
                <ul class="list-none mb-4 gap-2 grid grid-cols-1" v-if="videos">
                    <VideoItem :item="video" v-for="(video, key) in videos" :key="key"
                        @remove="handleItemRemoval($event, true)" @restore="handleItemRemoval($event, false)"
                        @select="selectedVideo = $event" />
                </ul>
                <div class="bg-white/90 absolute -left-8 -right-8 top-0 bottom-0 h-full flex flex-col justify-center items-center backdrop-blur-sm"
                    v-if="!unclearedCount">
                    <svg clas="mb-2" width="56" height="56" viewBox="0 0 56 56" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                            <path
                                d="M16.3332 9.33268C16.3332 6.75535 18.4225 4.66602 20.9998 4.66602H34.9998C37.5772 4.66602 39.6665 6.75535 39.6665 9.33268V13.9993H44.3091C44.3235 13.9992 44.338 13.9992 44.3524 13.9993H48.9998C50.2885 13.9993 51.3332 15.044 51.3332 16.3327C51.3332 17.6213 50.2885 18.666 48.9998 18.666H46.5058L44.482 46.9985C44.3076 49.4406 42.2755 51.3327 39.8272 51.3327H16.1724C13.7241 51.3327 11.6921 49.4406 11.5176 46.9985L9.49389 18.666H6.99984C5.71117 18.666 4.6665 17.6213 4.6665 16.3327C4.6665 15.044 5.71117 13.9993 6.99984 13.9993H11.6472C11.6617 13.9992 11.6762 13.9992 11.6906 13.9993H16.3332V9.33268ZM20.9998 13.9993H34.9998V9.33268H20.9998V13.9993ZM14.1725 18.666L16.1724 46.666H39.8272L41.8272 18.666H14.1725ZM23.3332 23.3327C24.6218 23.3327 25.6665 24.3774 25.6665 25.666V39.666C25.6665 40.9547 24.6218 41.9994 23.3332 41.9994C22.0445 41.9994 20.9998 40.9547 20.9998 39.666V25.666C20.9998 24.3774 22.0445 23.3327 23.3332 23.3327ZM32.6665 23.3327C33.9552 23.3327 34.9998 24.3774 34.9998 25.666V39.666C34.9998 40.9547 33.9552 41.9994 32.6665 41.9994C31.3778 41.9994 30.3332 40.9547 30.3332 39.666V25.666C30.3332 24.3774 31.3778 23.3327 32.6665 23.3327Z"
                                fill="#0D0D0D" />
                        </g>
                    </svg>
                    <div class="opacity-40">История очищена</div>
                </div>
            </div>
            <Button @click="handleHistoryRemoval(true)" v-if="unclearedCount" light class="w-full">
                Очистить историю вызовов
            </Button>
            <Button @click="handleHistoryRemoval(false)" v-else class="w-full">
                Восстановить историю
            </Button>
        </template>

        <template v-else>
            <div class="-mx-4 md:-mt-2">
                <div class="relative rounded-2xl overflow-hidden">
                    <video src="" :poster="selectedVideo.img" ref="videoEl" @ended="isPlaying = false"
                        @click="playbackControl(false)"></video>
                    <Overlay class="absolute h-full">
                        <button class="w-20 h-20 m-auto" @click="playbackControl(true)">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M33.3334 54.9994V24.9993L53.3334 39.9994L33.3334 54.9994ZM40.0001 6.66602C35.6227 6.66602 31.2882 7.52821 27.244 9.20336C23.1998 10.8785 19.5251 13.3338 16.4299 16.4291C10.1786 22.6803 6.66675 31.1588 6.66675 39.9994C6.66675 48.8399 10.1786 57.3184 16.4299 63.5696C19.5251 66.6649 23.1998 69.1202 27.244 70.7953C31.2882 72.4705 35.6227 73.3327 40.0001 73.3327C48.8406 73.3327 57.3191 69.8208 63.5703 63.5696C69.8215 57.3184 73.3334 48.8399 73.3334 39.9994C73.3334 35.622 72.4712 31.2874 70.7961 27.2432C69.1209 23.199 66.6656 19.5244 63.5703 16.4291C60.475 13.3338 56.8004 10.8785 52.7562 9.20336C48.712 7.52821 44.3775 6.66602 40.0001 6.66602Z"
                                    fill="white" />
                            </svg>
                        </button>
                    </Overlay>
                </div>
                <div class="px-4 pt-4">
                    <div>{{ selectedVideo.title }}</div>
                    <div class="text-sm opacity-60">{{ selectedVideo.duration }}</div>
                </div>
            </div>
        </template>


    </Modal>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, toRaw } from 'vue'
import Modal from './Modal.vue'
import Button from '../Button.vue'
import VideoItem from '../VideoItem.vue'
import type { VideoItemType } from '@/types/components.interface'
import Overlay from '../Overlay.vue'

export interface Props {
    videos?: VideoItemType[]
}

export interface Emits {
    (e: 'close'): void
    (e: 'update:videos', value: VideoItemType[]): void
}

const emit = defineEmits<Emits>()
const props = defineProps<Props>()

const selectedVideo = ref<VideoItemType>()
const videoEl = ref<HTMLVideoElement>()
const isPlaying = ref<boolean>()

const handleHistoryRemoval = (status: boolean) => {
    if (props.videos) {
        const newVideos = props.videos.map((el) => {
            el.removed = status
            return el
        })
        emit('update:videos', newVideos)
    }
}

const handleItemRemoval = (item: VideoItemType, status: boolean) => {
    const { id } = item
    const newVideos = props.videos

    if (newVideos) {
        const video = newVideos.find(el => el.id === id)
        if (video) {
            video.removed = status
            emit('update:videos', newVideos)
        }
    }
}

const unclearedCount = computed(() => {
    if (props.videos) {
        return props.videos.filter(el => !el.removed).length
    }

    return 0
})

const playbackControl = (status: boolean) => {
    if (videoEl.value) {
        if (isPlaying.value) {
            videoEl.value.play()
            return
        }

        videoEl.value.pause()

        isPlaying.value = status
    }
}
</script>
