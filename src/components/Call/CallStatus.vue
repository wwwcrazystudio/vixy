<template>
    <div
        class="px-3 py-1.5 bg-black/20 rounded-full w-fit text-white font-light text-sm flex items-center backdrop-blur-md"
        :class="[
            isSlowConnection && 'bg-[#FFC458CC]/80 text-dark',
            isError && 'bg-red',
        ]"
    >
        <template v-if="isConnecting">
            <svg
                class="animate-spin mr-1 md:mr-4"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.3333 21.5586L25.6349 20.6931C23.8683 24.2774 20.2174 26.7383 16.0001 26.7383C10.0536 26.7383 5.23327 21.8456 5.23327 15.8099C5.23327 10.6853 8.70817 6.3847 13.3969 5.20308L12.9287 3.3335C7.41717 4.72687 3.33325 9.78439 3.33325 15.8099C3.33325 22.9104 9.00452 28.6668 16.0001 28.6668C20.9599 28.6668 25.254 25.7733 27.3333 21.5586ZM28.667 15.8287C28.667 15.8225 28.667 15.8162 28.667 15.8099C28.667 15.8036 28.667 15.7973 28.667 15.791V15.8287Z"
                    fill="white"
                />
            </svg>
        </template>
        <template v-if="isConnected">
            <svg
                class="mr-1 md:mr-4"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M27.9998 9.33312L11.9998 25.3331L4.6665 17.9998L6.5465 16.1198L11.9998 21.5598L26.1198 7.45312L27.9998 9.33312Z"
                    fill="white"
                />
            </svg>
        </template>
        <template v-if="isSlowConnection">
            <svg
                class="mr-1 md:mr-4"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16 13.3337C14.5334 13.3337 13.3334 14.5337 13.3334 16.0003C13.3334 17.467 14.5334 18.667 16 18.667C17.4667 18.667 18.6667 17.467 18.6667 16.0003C18.6667 14.5337 17.4667 13.3337 16 13.3337ZM24 16.0003C24 11.6003 20.4 8.00033 16 8.00033C11.6 8.00033 8.00002 11.6003 8.00002 16.0003C8.00002 18.9337 9.60002 21.467 12 22.9337L13.3334 20.667C11.7334 19.7337 10.6667 18.0003 10.6667 16.1337C10.6667 13.2003 13.0667 10.8003 16 10.8003C18.9334 10.8003 21.3334 13.2003 21.3334 16.1337C21.3334 18.1337 20.2667 19.867 18.6667 20.667L20 22.9337C22.4 21.6003 24 18.9337 24 16.0003ZM16 2.66699C8.66669 2.66699 2.66669 8.66699 2.66669 16.0003C2.66669 20.9337 5.33335 25.2003 9.33335 27.467L10.6667 25.2003C7.46669 23.3337 5.33335 19.867 5.33335 16.0003C5.33335 10.1337 10.1334 5.33366 16 5.33366C21.8667 5.33366 26.6667 10.1337 26.6667 16.0003C26.6667 20.0003 24.5334 23.3337 21.3334 25.2003L22.6667 27.467C26.6667 25.2003 29.3334 20.9337 29.3334 16.0003C29.3334 8.66699 23.3334 2.66699 16 2.66699Z"
                    fill="#43361D"
                />
            </svg>
        </template>
        <template v-if="isError">
            <svg
                class="mr-1 md:mr-4"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14.6666 20.0003H17.3333V22.667H14.6666V20.0003ZM14.6666 9.33366H17.3333V17.3337H14.6666V9.33366ZM16 2.66699C8.62663 2.66699 2.66663 8.66699 2.66663 16.0003C2.66663 19.5365 4.07138 22.9279 6.57187 25.4284C7.80998 26.6665 9.27984 27.6487 10.8975 28.3187C12.5152 28.9888 14.249 29.3337 16 29.3337C19.5362 29.3337 22.9276 27.9289 25.4281 25.4284C27.9285 22.9279 29.3333 19.5365 29.3333 16.0003C29.3333 14.2494 28.9884 12.5156 28.3184 10.8979C27.6483 9.2802 26.6662 7.81035 25.4281 6.57224C24.1899 5.33412 22.7201 4.35199 21.1024 3.68193C19.4847 3.01187 17.7509 2.66699 16 2.66699ZM16 26.667C13.171 26.667 10.4579 25.5432 8.45749 23.5428C6.4571 21.5424 5.33329 18.8293 5.33329 16.0003C5.33329 13.1713 6.4571 10.4582 8.45749 8.45785C10.4579 6.45747 13.171 5.33366 16 5.33366C18.8289 5.33366 21.542 6.45747 23.5424 8.45785C25.5428 10.4582 26.6666 13.1713 26.6666 16.0003C26.6666 18.8293 25.5428 21.5424 23.5424 23.5428C21.542 25.5432 18.8289 26.667 16 26.667Z"
                    fill="white"
                />
            </svg>
        </template>
        {{ statusText }}
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface StatusProps {
    status: string
}

const props = defineProps<StatusProps>()

const isConnecting = computed(() => {
    // RE for several different conditions
    return /connecting/.test(props.status)
})

const isConnected = computed(() => {
    // RE for several different conditions
    return /connected/.test(props.status)
})

const isError = computed(() => {
    return props.status === 'error'
})

const isSlowConnection = computed(() => {
    return props.status === 'slow_connection'
})

const statusText = computed(() => {
    switch (props.status) {
        case 'connecting':
            return 'Присоединение'
        case 'connecting_client':
            return 'Соединение с оператором'
        case 'connected':
            return 'Вы вошли в комнату'
        case 'connected_client':
            return 'Диана присоединен'
        case 'slow_connection':
            return 'Слабый сигнал'
        case 'error':
            return 'Ошибка соединения'
        default:
            return null
    }
})
</script>
