<template>
    <button
        class="w-full grid place-content-center py-1 px-2 rounded disabled:opacity-50"
        :class="buttonColor"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface BtnProps {
    color: string
}

const props = defineProps<BtnProps>()

const buttonColor = computed(() => {
    switch (props.color) {
        case 'red':
            return 'bg-[#FE2E22] hover:bg-[#FE584E] active:bg-[#CB251B]'
        case 'green':
            return 'bg-[#35C659] hover:bg-[#35C659] active:bg-[#2A9E47]'
        default:
            return 'bg-accent'
    }
})
</script>

<style scoped></style>
