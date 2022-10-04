<template>
    <div class="pt-10 pb-10 overflow-auto h-full w-screen flex">
        <div
            class="relative bg-white shadow-modal rounded-2xl p-4 sm:p-8 w-full h-fit m-auto overflow-auto max-w-[calc(100%-1rem)] lg:max-w-xl"
            :class="modalClass"
            @click.stop
        >
            <button
                v-if="!hideCloseBtn"
                class="absolute right-2 top-2 md:right-4 md:top-4"
                @click="$emit('close')"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g opacity="0.4">
                        <path
                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                            fill="black"
                        />
                    </g>
                </svg>
            </button>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

export interface Emits {
    (e: 'close'): void
}

export interface Props {
    modalClass?: string
    hideCloseBtn?: boolean
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const handleDocumentClick = () => {
    emit('close')
}

onMounted(() => {
    document.addEventListener('click', handleDocumentClick)
})

onUnmounted(() => {
    document.addEventListener('click', handleDocumentClick)
})
</script>
