<template>
    <button @mouseover="showLabel = true" @mouseout="showLabel = false"
        class="bg-[#f4f4f4] w-10 h-10 rounded-full grid place-content-center relative hover:bg-gray active:bg-[#BEBEBE] disabled:opacity-20 transition"
        @click.stop="$emit('click')">
        <slot></slot>

        <span class="absolute left-[125%] top-0 bottom-0 m-auto h-fit text-xs text-white px-2 py-1 rounded bg-black/80 backdrop-blur-xs whitespace-nowrap
        before:absolute before:-left-4 before:top-2 before:border-solid before:border-r-black/80 before: before:border-b-4 before:border-transparent before:border-x-8 before:border-t-4
        " v-if="label" v-show="showLabel">
            {{ label }}
        </span>
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

export interface Props {
    label?: string
}

export interface Emits {
    (e: 'click'): void
}

const showLabel = ref<boolean>(false)

defineEmits<Emits>()
defineProps<Props>()
</script>

<style scoped>
</style>
