<template>
    <div class="flex bg-dark h-screen overflow-hidden relative">
        <div
            class="basis-9/12 grow shrink relative overflow-hidden grid place-content-center"
        >
            <transition name="slide">
                <CallStatus
                    class="absolute left-0 right-0 top-4 m-auto z-20"
                    :status="status"
                    v-if="showStatus"
                />
            </transition>

            <CallVideo
                class="w-full h-full absolute transition-all duration-1000 left-0 top-0 z-10"
                :class="videoPositionClass"
                :poster="video"
                :status="status"
                :show="true"
            />
            <CallVideo
                class="w-full h-full object-cover object-center transition-all duration-1000"
                :poster="video2"
                :status="status"
                :show="showPeerVideo"
                nickname="Unknown Purple Oyster"
            />

            <CallControls
                class="absolute bottom-20 md:bottom-0 left-0 right-0 z-10"
            />
        </div>

        <CallSidebar :banner="banner" />

        <CallFinished
            class="absolute left-0 top-0 right-0 bottom-0 w-full h-screen z-30"
            nickname="Unknown Purple Oyster"
            v-if="status === 'finished'"
        />
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import CallSidebar from '../components/Call/CallSidebar.vue'
import CallControls from '../components/Call/CallControls.vue'
import CallStatus from '../components/Call/CallStatus.vue'
import CallVideo from '../components/Call/CallVideo.vue'
import CallFinished from '../components/Call/CallFinished.vue'

// placeholders
import video from '@/assets/placeholder/video.jpg'
import video2 from '@/assets/placeholder/video2.jpg'
import bannerimg from '@/assets/placeholder/phone.jpg'

// connection status
const status = ref<string>('connecting')

// show connection status popup
const showStatus = ref<boolean>(true)

// show second participant video
const showPeerVideo = ref<boolean>(false)

const banner = {
    img: bannerimg,
    title: 'Xiaomi / Смартфон Redmi 9A 2/32Gb...',
    price: '9 093 ₽',
    discount: '15 093 ₽',
}

// placeholder interactions
/* setTimeout(() => {
    status.value = 'connected'

    setTimeout(() => {
        showStatus.value = false
    }, 1000)

    setTimeout(() => {
        showPeerVideo.value = true
    }, 3000)

    setTimeout(() => {
        status.value = 'finished'
    }, 10000)
}, 5000) */

const videoPositionClass = computed(() => {
    if (status.value === 'connected') {
        return 'top-6 left-6 scale-[0.19] clip-video-y origin-top-left'
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
