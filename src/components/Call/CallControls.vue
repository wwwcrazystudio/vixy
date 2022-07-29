<template>
    <div>
        <div class="relative">
            <div
                class="md:bg-black/80 flex gap-3 md:gap-6 justify-center items-center md:p-4"
            >
                <button
                    class="rounded-full bg-white/40 w-11 h-11 grid place-content-center"
                    @click.stop="openModal('transfer')"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.2929 2.29289C14.6834 1.90237 15.3166 1.90237 15.7071 2.29289L19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L15.7071 11.7071C15.3166 12.0976 14.6834 12.0976 14.2929 11.7071C13.9024 11.3166 13.9024 10.6834 14.2929 10.2929L16.5858 8L5 8C4.44772 8 4 7.55228 4 7C4 6.44771 4.44772 6 5 6L16.5858 6L14.2929 3.70711C13.9024 3.31658 13.9024 2.68342 14.2929 2.29289ZM9.70711 12.2929C10.0976 12.6834 10.0976 13.3166 9.70711 13.7071L7.41421 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H7.41421L9.70711 20.2929C10.0976 20.6834 10.0976 21.3166 9.70711 21.7071C9.31658 22.0976 8.68342 22.0976 8.29289 21.7071L4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17C4 16.7348 4.10536 16.4804 4.29289 16.2929L8.29289 12.2929C8.68342 11.9024 9.31658 11.9024 9.70711 12.2929Z"
                            fill="white"
                        />
                    </svg>
                </button>
                <button
                    class="rounded-full bg-white/40 w-11 h-11 grid place-content-center"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 11C19 12.19 18.66 13.3 18.1 14.28L16.87 13.05C17.14 12.43 17.3 11.74 17.3 11H19ZM15 11.16L9 5.18V5C9 4.20435 9.31607 3.44129 9.87868 2.87868C10.4413 2.31607 11.2044 2 12 2C12.7956 2 13.5587 2.31607 14.1213 2.87868C14.6839 3.44129 15 4.20435 15 5V11V11.16ZM4.27 3L21 19.73L19.73 21L15.54 16.81C14.77 17.27 13.91 17.58 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1C12.81 16.1 13.6 15.91 14.31 15.58L12.65 13.92L12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11V10.28L3 4.27L4.27 3Z"
                            fill="white"
                        />
                    </svg>
                </button>
                <button
                    class="rounded-full bg-white/40 w-11 h-11 grid place-content-center"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.41 1.85986L2 3.26986L4.73 5.99986H4C3.73478 5.99986 3.48043 6.10522 3.29289 6.29276C3.10536 6.48029 3 6.73465 3 6.99986V16.9999C3 17.2651 3.10536 17.5194 3.29289 17.707C3.48043 17.8945 3.73478 17.9999 4 17.9999H16C16.21 17.9999 16.39 17.9199 16.55 17.8199L19.73 20.9999L21.14 19.5899L12.28 10.7299L3.41 1.85986ZM5 15.9999V7.99986H6.73L14.73 15.9999H5ZM15 7.99986V10.6099L21 16.6099V6.49986L17 10.4999V6.99986C17 6.73465 16.8946 6.48029 16.7071 6.29276C16.5196 6.10522 16.2652 5.99986 16 5.99986H10.39L12.39 7.99986H15Z"
                            fill="white"
                        />
                    </svg>
                </button>
                <button
                    class="rounded-full bg-white/40 w-11 h-11 grid place-content-center"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M23 4V16C23 17.11 22.11 18 21 18H15V16H21V4H3V16H9V18H3C1.9 18 1 17.11 1 16V4C1 2.89 1.89 2 3 2H21C22.1 2 23 2.89 23 4ZM13 13H16L12 9L8 13H11V20H8V22H16V20H13V13Z"
                            fill="white"
                        />
                    </svg>
                </button>
                <button
                    class="rounded-full bg-white/40 w-11 h-11 grid place-content-center"
                    @click.stop="showSettings = !showSettings"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.0001 8C13.061 8 14.0784 8.42143 14.8285 9.17157C15.5787 9.92172 16.0001 10.9391 16.0001 12C16.0001 13.0609 15.5787 14.0783 14.8285 14.8284C14.0784 15.5786 13.061 16 12.0001 16C10.9392 16 9.9218 15.5786 9.17166 14.8284C8.42151 14.0783 8.00008 13.0609 8.00008 12C8.00008 10.9391 8.42151 9.92172 9.17166 9.17157C9.9218 8.42143 10.9392 8 12.0001 8ZM12.0001 10C11.4697 10 10.9609 10.2107 10.5859 10.5858C10.2108 10.9609 10.0001 11.4696 10.0001 12C10.0001 12.5304 10.2108 13.0391 10.5859 13.4142C10.9609 13.7893 11.4697 14 12.0001 14C12.5305 14 13.0392 13.7893 13.4143 13.4142C13.7894 13.0391 14.0001 12.5304 14.0001 12C14.0001 11.4696 13.7894 10.9609 13.4143 10.5858C13.0392 10.2107 12.5305 10 12.0001 10ZM10.0001 22C9.75008 22 9.54008 21.82 9.50008 21.58L9.13008 18.93C8.50008 18.68 7.96008 18.34 7.44008 17.94L4.95008 18.95C4.73008 19.03 4.46008 18.95 4.34008 18.73L2.34008 15.27C2.21008 15.05 2.27008 14.78 2.46008 14.63L4.57008 12.97L4.50008 12L4.57008 11L2.46008 9.37C2.27008 9.22 2.21008 8.95 2.34008 8.73L4.34008 5.27C4.46008 5.05 4.73008 4.96 4.95008 5.05L7.44008 6.05C7.96008 5.66 8.50008 5.32 9.13008 5.07L9.50008 2.42C9.54008 2.18 9.75008 2 10.0001 2H14.0001C14.2501 2 14.4601 2.18 14.5001 2.42L14.8701 5.07C15.5001 5.32 16.0401 5.66 16.5601 6.05L19.0501 5.05C19.2701 4.96 19.5401 5.05 19.6601 5.27L21.6601 8.73C21.7901 8.95 21.7301 9.22 21.5401 9.37L19.4301 11L19.5001 12L19.4301 13L21.5401 14.63C21.7301 14.78 21.7901 15.05 21.6601 15.27L19.6601 18.73C19.5401 18.95 19.2701 19.04 19.0501 18.95L16.5601 17.95C16.0401 18.34 15.5001 18.68 14.8701 18.93L14.5001 21.58C14.4601 21.82 14.2501 22 14.0001 22H10.0001ZM11.2501 4L10.8801 6.61C9.68008 6.86 8.62008 7.5 7.85008 8.39L5.44008 7.35L4.69008 8.65L6.80008 10.2C6.40008 11.37 6.40008 12.64 6.80008 13.8L4.68008 15.36L5.43008 16.66L7.86008 15.62C8.63008 16.5 9.68008 17.14 10.8701 17.38L11.2401 20H12.7601L13.1301 17.39C14.3201 17.14 15.3701 16.5 16.1401 15.62L18.5701 16.66L19.3201 15.36L17.2001 13.81C17.6001 12.64 17.6001 11.37 17.2001 10.2L19.3101 8.65L18.5601 7.35L16.1501 8.39C15.3801 7.5 14.3201 6.86 13.1201 6.62L12.7501 4H11.2501Z"
                            fill="white"
                        />
                    </svg>
                </button>
                <button
                    class="rounded-full bg-red w-11 h-11 grid place-content-center"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 9C10.4 9 8.85 9.25 7.4 9.72V12.82C7.4 13.22 7.17 13.56 6.84 13.72C5.86 14.21 4.97 14.84 4.17 15.57C4 15.75 3.75 15.86 3.5 15.86C3.2 15.86 2.95 15.74 2.77 15.56L0.29 13.08C0.11 12.9 0 12.65 0 12.38C0 12.1 0.11 11.85 0.29 11.67C3.34 8.77 7.46 7 12 7C16.54 7 20.66 8.77 23.71 11.67C23.89 11.85 24 12.1 24 12.38C24 12.65 23.89 12.9 23.71 13.08L21.23 15.56C21.05 15.74 20.8 15.86 20.5 15.86C20.25 15.86 20 15.75 19.82 15.57C19.03 14.84 18.14 14.21 17.16 13.72C16.83 13.56 16.6 13.22 16.6 12.82V9.72C15.15 9.25 13.6 9 12 9Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
            <ul
                class="w-fit m-auto list-none bg-white rounded-md absolute left-0 right-0 bottom-20"
                v-if="showSettings"
                @click.stop
            >
                <li class="border-b border-black/10">
                    <button
                        class="p-4 font-medium w-full text-left"
                        @click="openModal('audio')"
                    >
                        Аудио
                    </button>
                </li>
                <li class="border-b border-black/10">
                    <button
                        class="p-4 font-medium w-full text-left"
                        @click="openModal('video')"
                    >
                        Видео
                    </button>
                </li>
                <li class="border-b border-black/10">
                    <button
                        class="p-4 font-medium w-full text-left"
                        @click="openModal('report')"
                    >
                        Сообщить о проблеме
                    </button>
                </li>
            </ul>
        </div>

        <transition name="slide">
            <AudioSettings
                class="absolute max-w-none rounded-b-none md:rounded-2xl md:fixed md:top-0 left-0 right-0 -bottom-[64px] md:bottom-0 z-50 !h-fit"
                v-if="showAudioSettings"
                @close="showAudioSettings = false"
            />
        </transition>

        <transition name="slide">
            <VideoSettings
                class="absolute max-w-none rounded-b-none md:rounded-2xl md:fixed md:top-0 left-0 right-0 -bottom-[64px] md:bottom-0 z-50 !h-fit"
                v-if="showVideoSettings"
                @close="showVideoSettings = false"
            />
        </transition>

        <transition name="slide">
            <ReportForm
                class="absolute max-w-none rounded-b-none md:rounded-2xl md:fixed md:top-0 left-0 right-0 -bottom-[64px] md:bottom-0 z-50 !h-fit"
                v-if="showReportForm"
                @close="showReportForm = false"
            />
        </transition>

        <transition name="slide">
            <TransferForm
                class="absolute max-w-none rounded-b-none md:rounded-2xl md:fixed md:top-0 left-0 right-0 -bottom-[64px] md:bottom-0 z-50 !h-fit"
                v-if="showTransferForm"
                @close="showTransferForm = false"
            />
        </transition>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import AudioSettings from './Settings/Audio.vue'
import VideoSettings from './Settings/Video.vue'
import ReportForm from './Settings/ReportForm.vue'
import TransferForm from './Settings/TransferForm.vue'

const showSettings = ref<boolean>(false)
const showAudioSettings = ref<boolean>(false)
const showVideoSettings = ref<boolean>(false)
const showReportForm = ref<boolean>(false)
const showTransferForm = ref<boolean>(false)

const handleDocumentClick = () => {
    showSettings.value = false
    showAudioSettings.value = false
    showVideoSettings.value = false
    showReportForm.value = false
    showTransferForm.value = false
}

onMounted(() => {
    document.addEventListener('click', handleDocumentClick)
})

onUnmounted(() => {
    document.addEventListener('click', handleDocumentClick)
})

const openModal = (type: string) => {
    showSettings.value = false

    switch (type) {
        case 'audio':
            showAudioSettings.value = true
            return
        case 'video':
            showVideoSettings.value = true
            return
        case 'report':
            showReportForm.value = true
            return
        case 'transfer':
            showTransferForm.value = true
            return
    }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(60vh);
    opacity: 0;
}
</style>
