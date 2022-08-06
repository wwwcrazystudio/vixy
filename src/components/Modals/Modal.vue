<template>
    <div
        class="relative bg-white shadow-modal rounded-2xl p-4 sm:p-8 w-full h-fit m-auto overflow-auto max-h-[85vh] sm:max-w-[calc(100%-1rem)] lg:max-w-xl"
        @click.stop
    >
        <button
            class="absolute right-1 top-1 md:right-4 md:top-4"
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
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

export interface Emits {
    (e: 'close'): void
}

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
