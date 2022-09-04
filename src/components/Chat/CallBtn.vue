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
            return 'bg-[#FE2E22] hover:bg-[#FE584E] active:bg-[#CB251B] focus:bg-[#CB251B]'
        case 'green':
            return 'bg-[#35C659] hover:bg-[#5DD17A] active:bg-[#2A9E47] focus:bg-[#2A9E47]'
        default:
            return 'bg-accent hover:bg-[#3053F4] active:bg-[#1433C2] focus:bg-[#1433C2]'
    }
})
</script>

<style scoped></style>
