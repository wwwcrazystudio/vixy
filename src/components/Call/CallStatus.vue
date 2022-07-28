<template>
    <div
        class="p-3 bg-black/20 rounded-full w-fit text-white font-light text-sm flex items-center backdrop-blur-md"
    >
        <template v-if="status === 'connecting'">
            <svg
                class="animate-spin mr-4"
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
            Присоединение
        </template>

        <template v-if="status === 'connected'">
            <svg
                class="mr-4"
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

            Вы вошли в комнату
        </template>
    </div>
</template>

<script setup lang="ts">
export interface StatusProps {
    status: string
}

defineProps<StatusProps>()
</script>
