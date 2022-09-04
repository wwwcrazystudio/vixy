<template>
    <button
        class="rounded-lg py-3 px-3 md:px-6 disabled:cursor-not-allowed disabled:opacity-60 transition"
        :class="btnColor"
        @click="$emit('click')"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface BtnProps {
    light?: boolean
    transparent?: boolean
}
export interface BtnEmits {
    (e: 'click'): void
}

const props = defineProps<BtnProps>()
defineEmits<BtnEmits>()

const btnColor = computed(() => {
    if (props.light) return 'bg-darkgray hover:bg-[#EBEBEB] active:bg-[#E0E0E0] focus:bg-[#E0E0E0]'
    if (props.transparent) return

    return 'bg-accent text-white hover:bg-[#3053F4] active:bg-[#1433C2] focus:bg-[#1433C2]'
})
</script>
