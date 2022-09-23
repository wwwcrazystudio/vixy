<template>
    <div ref="wrap"
        class="transition-all duration-500 z-40 basis-80 absolute md:static grow-0 shrink-0 flex flex-col bg-black/60 md:bg-white/5 border-l border-white/5 backdrop-blur-md md:backdrop-blur-0 rounded-t-2xl md:rounded-none w-full md:w-auto before:w-10 before:h-1 before:rounded-full before:bg-white/20 before:absolute before:top-1 before:left-0 before:right-0 before:m-auto md:before:hidden min-h-[60%] md:min-h-0"
        :class="expanded && '!bg-dark'" :style="sidebarStyle" @touchmove="handleTouch" @click.stop="handleClick">
        <div class="p-4 border-b border-white/5">
            <AdvBanner class="mb-4 hidden md:flex !bg-white" :banner="banner" />
            <div class="font-medium text-white flex">
                Чат с&nbsp;клиентом
                <span v-if="unreadedMessages?.length"
                    class="ml-auto text-sm text-dark font-bold w-7 h-7 grid place-content-center bg-white rounded-full">
                    {{ unreadedMessages.length }}
                </span>
            </div>
        </div>

        <div class="p-4 grow flex">
            <ul class="list-none w-full flex flex-col gap-[10px]" v-if="messages?.length">
                <CallChatMessage :message="message" v-for="message in messages" :key="message.date" />
            </ul>

            <div class="m-auto" v-else>
                <template v-if="!isMobile">
                    <div class="w-38 h-38 grid place-content-center bg-white/5 rounded-full m-auto mb-4">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.1">
                                <path
                                    d="M6.6665 20.0002C6.6665 16.3183 9.65127 13.3335 13.3332 13.3335H66.6665C70.3484 13.3335 73.3332 16.3183 73.3332 20.0002V56.6668C73.3332 60.3487 70.3484 63.3335 66.6665 63.3335H51.3805L42.3569 72.3572C41.0551 73.6589 38.9446 73.6589 37.6428 72.3572L28.6191 63.3335H13.3332C9.65127 63.3335 6.6665 60.3487 6.6665 56.6668V20.0002ZM66.6665 20.0002H13.3332V56.6668H29.9998C30.8839 56.6668 31.7317 57.018 32.3569 57.6431L39.9998 65.2861L47.6428 57.6431C48.2679 57.018 49.1158 56.6668 49.9998 56.6668H66.6665V20.0002Z"
                                    fill="white" />
                                <path
                                    d="M44.9998 38.3335C44.9998 41.0949 42.7613 43.3335 39.9998 43.3335C37.2384 43.3335 34.9998 41.0949 34.9998 38.3335C34.9998 35.5721 37.2384 33.3335 39.9998 33.3335C42.7613 33.3335 44.9998 35.5721 44.9998 38.3335Z"
                                    fill="white" />
                                <path
                                    d="M58.3332 38.3335C58.3332 41.0949 56.0946 43.3335 53.3332 43.3335C50.5717 43.3335 48.3332 41.0949 48.3332 38.3335C48.3332 35.5721 50.5717 33.3335 53.3332 33.3335C56.0946 33.3335 58.3332 35.5721 58.3332 38.3335Z"
                                    fill="white" />
                                <path
                                    d="M31.6665 38.3335C31.6665 41.0949 29.4279 43.3335 26.6665 43.3335C23.9051 43.3335 21.6665 41.0949 21.6665 38.3335C21.6665 35.5721 23.9051 33.3335 26.6665 33.3335C29.4279 33.3335 31.6665 35.5721 31.6665 38.3335Z"
                                    fill="white" />
                            </g>
                        </svg>
                    </div>
                    <div class="text-white/40">Здесь будут Ваши сообщения</div>
                </template>
                <div class="text-white/40" v-else>Здесь пока нет сообщений</div>
            </div>
        </div>

        <form class="mt-auto border-b border-t md:border-b-0 border-white/10 md:border-white/5 py-2 mb-4 px-4">
            <div class="relative flex">
                <div class="basis-3/5 grow shrink">
                    <label for="messageControl"
                        class="font-sm text-white/40 absolute top-0 bottom-0 h-fit m-auto pointer-events-none"
                        :class="formMessage?.length && 'opacity-0'">
                        Введите сообщение...
                    </label>
                    <input id="messageControl" type="text" class="bg-transparent text-white" :value="formMessage"
                        @input="handleInput" />
                </div>
                <div class="ml-4">
                    <label for="attachment">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.6"
                                d="M18.2954 11.9163L11.2239 18.9878C10.5716 19.6402 9.6868 20.0066 8.76425 20.0066C7.84169 20.0066 6.95692 19.6402 6.30458 18.9878C5.65224 18.3355 5.28576 17.4507 5.28576 16.5281C5.28576 15.6056 5.65224 14.7208 6.30458 14.0685L13.991 6.38204C14.3987 5.97432 14.9517 5.74527 15.5283 5.74527C16.1049 5.74527 16.6579 5.97432 17.0656 6.38204C17.4733 6.78975 17.7024 7.34273 17.7024 7.91933C17.7024 8.49592 17.4733 9.0489 17.0656 9.45662L10.609 15.9132C10.4459 16.0763 10.2247 16.1679 9.99408 16.1679C9.76344 16.1679 9.54225 16.0763 9.37916 15.9132C9.21608 15.7501 9.12445 15.529 9.12445 15.2983C9.12445 15.0677 9.21608 14.8465 9.37916 14.6834L15.2209 8.8417L14.2985 7.91933L8.45679 13.761C8.04907 14.1687 7.82002 14.7217 7.82002 15.2983C7.82002 15.8749 8.04907 16.4279 8.45679 16.8356C8.8645 17.2433 9.41748 17.4724 9.99408 17.4724C10.5707 17.4724 11.1237 17.2433 11.5314 16.8356L17.988 10.379C18.6403 9.72665 19.0068 8.84188 19.0068 7.91933C19.0068 6.99677 18.6403 6.11201 17.988 5.45966C17.3356 4.80732 16.4509 4.44084 15.5283 4.44084C14.6058 4.44084 13.721 4.80732 13.0687 5.45966L5.38221 13.1461C4.48524 14.0431 3.98132 15.2596 3.98132 16.5282C3.98132 17.7967 4.48524 19.0132 5.38221 19.9102C6.27918 20.8072 7.49573 21.3111 8.76425 21.3111C10.0328 21.3111 11.2493 20.8072 12.1463 19.9102L19.2178 12.8387L18.2954 11.9163Z"
                                fill="white" />
                        </svg>
                    </label>
                    <input id="attachment" type="file" class="appearance-none absolute opacity-0" />
                </div>
                <button class="ml-2" @click.prevent="submit">
                    <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_414_4708)">
                            <path opacity="0.6" d="M0 21.4L25 10.7L0 0V8.3L17.9 10.7L0 13.1V21.4Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_414_4708">
                                <rect width="25" height="21.4" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import AdvBanner from '../AdvBanner.vue'
import CallChatMessage from './CallChatMessage.vue'
import { useMobileDetection } from '@/composables/useMobileDetection'
import type { BannerType, VideoChatMessageType } from '@/types/components.interface'

export interface Emits {
    (e: 'onSidebarExpanded', value: boolean): void
}

export interface SidebarProps {
    banner: BannerType
    messages?: VideoChatMessageType[]
}

const props = defineProps<SidebarProps>()
const emit = defineEmits<Emits>()

const { isMobile } = useMobileDetection()

// Input value
const formMessage = ref<string>('')
const wrap = ref<HTMLElement>()
const expanded = ref<boolean>(false)
const viewportHeight = ref<number>(window.innerHeight);
const wrapHeight = ref<number>(0)

const submit = () => {
    return
}

const handleTouch = (e: TouchEvent) => {
    const wrapEl = wrap.value
    const touchY = e.touches[0].clientY
    const elOffset = wrapEl?.offsetTop || 0

    if (touchY < elOffset) {
        expanded.value = true
        emit('onSidebarExpanded', expanded.value)
        return
    }

    if (touchY > elOffset) {
        expanded.value = false
        emit('onSidebarExpanded', expanded.value)
        return
    }
}

const handleClick = () => {
    expanded.value = true
    emit('onSidebarExpanded', expanded.value)
}

const handleInput = (e: Event) => {
    const el = e.target as HTMLInputElement
    const value = el.value as string
    formMessage.value = value
}

const unreadedMessages = computed(() => {
    return props.messages?.filter((el: VideoChatMessageType) => el.unreaded)
})

const sidebarStyle = computed(() => {
    if (expanded.value) {
        return {
            top: `calc(${viewportHeight.value}px - ${wrapHeight.value}px)`
        }
    }

    return {
        top: `calc(${viewportHeight.value}px - 60px)`
    }
})

const handleDocumentClick = () => {
    if (expanded.value) {
        expanded.value = false
        emit('onSidebarExpanded', expanded.value)
        return
    }
}

const handleDocumentResize = () => {
    wrapHeight.value = wrap.value!.offsetHeight
    viewportHeight.value = window.innerHeight
}


onMounted(() => {
    wrapHeight.value = wrap.value!.offsetHeight
    document.addEventListener('click', handleDocumentClick)
    window.addEventListener('resize', handleDocumentResize)
})

onUnmounted(() => {
    document.removeEventListener('click', handleDocumentClick)
    window.removeEventListener('resize', handleDocumentResize)
})
</script>