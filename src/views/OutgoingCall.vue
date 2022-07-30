<template>
    <div class="flex bg-dark h-screen overflow-hidden relative">
        <div class="basis-9/12 grow shrink relative overflow-hidden grid">
            <transition name="slide">
                <CallStatus
                    class="absolute left-0 right-0 top-4 m-auto z-20"
                    :status="status"
                    v-if="showStatus"
                />
            </transition>

            <button
                class="z-30 absolute right-4 top-4 rounded-full bg-black/20 w-11 h-11 grid place-content-center backdrop-blur-md lg:hidden"
                :disabled="!hasCam"
            >
                <svg
                    :opacity="!hasCam ? '0.4' : 1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 5H16.83L15 3H9L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.11 2.9 21 4 21H20C21.11 21 22 20.11 22 19V7C22 5.9 21.11 5 20 5ZM20 19H4V7H8.05L9.88 5H14.12L16 7H20V19ZM5 12H7.1C7.65 9.29 10.29 7.55 13 8.1C13.76 8.25 14.43 8.59 15 9L13.56 10.45C13.11 10.17 12.58 10 12 10C10.74 10 9.6 10.8 9.18 12H11L8 15L5 12ZM16.91 14C16.36 16.71 13.72 18.45 11 17.9C10.25 17.74 9.58 17.41 9 17L10.44 15.55C10.9 15.83 11.43 16 12 16C13.27 16 14.41 15.2 14.83 14H13L16 11L19 14H16.91Z"
                        fill="white"
                    />
                </svg>
            </button>

            <CallReactions
                class="absolute left-6 top-40 z-20"
                :class="!hasCam && '!top-4'"
            />

            <CallVideo
                v-if="hasCam"
                class="w-full h-full absolute transition-all duration-1000 left-0 top-0 z-10"
                :class="videoPositionClass"
                :poster="video2"
                :status="status"
                :show="true"
            />

            <CallNoCam
                v-else
                v-show="!shiftVideo"
                class="absolute z-5 left-0 top-0 right-0 bottom-0 m-auto w-full h-full bg-dark"
            />

            <CallVideo
                class="w-full h-screen object-cover object-center transition-all duration-1000"
                :class="expandedSidebar && 'h-2/6'"
                :poster="video"
                :status="status"
                :show="showPeerVideo"
                nickname="Unknown Purple Oyster"
            />

            <AdvBannerCarousel
                :banners="placeholderBanners"
                class="absolute left-2 bottom-32 md:bottom-24"
            />

            <CallControls
                class="absolute bottom-16 md:bottom-0 left-0 right-0"
            />
        </div>

        <CallSidebar
            @onSidebarExpanded="expandedSidebar = $event"
            :messages="messages"
            :banner="banner"
            class="z-40"
        />

        <CallFinished
            class="absolute left-0 top-0 right-0 bottom-0 w-full h-screen z-40"
            nickname="Unknown Purple Oyster"
            v-if="status === 'finished'"
        />
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import CallSidebar from '../components/Call/CallSidebar.vue'
import CallControls from '../components/Call/CallControls.vue'
import CallStatus from '../components/Call/CallStatus.vue'
import CallVideo from '../components/Call/CallVideo.vue'
import CallFinished from '../components/Call/CallFinished.vue'
import CallReactions from '../components/Call/CallReactions.vue'
import CallNoCam from '../components/Call/CallNoCam.vue'
import AdvBannerCarousel from '../components/AdvBannerCarousel.vue'
import { unSafari } from '@/composables/unsafari'

// placeholders
import video from '@/assets/placeholder/video.jpg'
import video2 from '@/assets/placeholder/video2.jpg'
import bannerimg from '@/assets/placeholder/phone.jpg'

unSafari()

const placeholderMessages = [
    {
        author: 'Unknown Purple Oyster',
        date: '1 мая 2021 г. 11:11',
        unreaded: true,
        content: 'Линус Торвальдс (Linus Torvalds)',
    },
    {
        date: '1 мая 2021 г. 11:11',
        content: 'Линус Торвальдс (Linus Torvalds)',
    },
]

const placeholderBanners = [
    {
        img: bannerimg,
        title: 'Xiaomi / Смартфон Redmi 9A 2/32Gb...',
        price: '9 093 ₽',
        discount: '15 093 ₽',
    },
    {
        img: bannerimg,
        title: 'Samsung Galaxy Ace 10',
        price: '9 093 ₽',
        discount: '15 093 ₽',
    },
    {
        img: bannerimg,
        title: 'Honor Super Mobile Phone Pro',
        price: '9 093 ₽',
        discount: '15 093 ₽',
    },
    {
        img: bannerimg,
        title: 'Xiaomi / Смартфон Redmi 9A 2/32Gb...',
        price: '9 093 ₽',
        discount: '15 093 ₽',
    },
    {
        img: bannerimg,
        title: 'Samsung Galaxy Ace 10',
        price: '9 093 ₽',
        discount: '15 093 ₽',
    },
    {
        img: bannerimg,
        title: 'Honor Super Mobile Phone Pro',
        price: '9 093 ₽',
        discount: '15 093 ₽',
    },
]

// chat messages
const messages = ref<Array<any>>([])

// connection status
const status = ref<string>('connecting_client')

// show connection status popup
const showStatus = ref<boolean>(true)

// show second participant video
const showPeerVideo = ref<boolean>(false)

// is bottom-menu (sidebar) expanded
const expandedSidebar = ref<boolean>(false)

// is video shifted
const shiftVideo = ref<boolean>(false)

// is user has cam
const hasCam = ref<boolean>(false)

const banner = {
    img: bannerimg,
    title: 'Xiaomi / Смартфон Redmi 9A 2/32Gb...',
    price: '9 093 ₽',
    discount: '15 093 ₽',
}

// placeholder interactions
setTimeout(() => {
    status.value = 'connected_client'
    shiftVideo.value = true

    setTimeout(() => {
        showStatus.value = false
    }, 1000)

    setTimeout(() => {
        messages.value = placeholderMessages
    }, 1500)

    setTimeout(() => {
        showPeerVideo.value = true
    }, 3000)

    setTimeout(() => {
        showStatus.value = true
        status.value = 'slow_connection'
    }, 5000)

    setTimeout(() => {
        status.value = 'error'
    }, 10000)
}, 5000)

const videoPositionClass = computed(() => {
    if (shiftVideo.value) {
        return 'top-4 left-4 md:top-6 md:left-6 scale-[0.16] md:scale-[0.19] clip-video-y origin-top-left'
    }

    return null
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(-100px);
}
</style>
