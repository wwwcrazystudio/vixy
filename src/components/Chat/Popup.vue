<template>
    <div
        class="p-4 pl-12 border w-full h-fit max-w-[350px] border-gray bg-white rounded-2xl shadow-popup"
    >
        <slot></slot>
        <button class="absolute top-4 right-4" @click="$emit('close')">
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
    </div>
</template>

<script setup lang="ts">
export interface Emits {
    (e: 'close'): void
}

defineEmits<Emits>()
</script>
