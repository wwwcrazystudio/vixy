<template>
    <button
        class="rounded-lg py-3 px-6 disabled:cursor-not-allowed disabled:opacity-40 transition"
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
    if (props.light) return 'bg-darkgray'
    if (props.transparent) return null

    return 'bg-accent text-white'
})
</script>
