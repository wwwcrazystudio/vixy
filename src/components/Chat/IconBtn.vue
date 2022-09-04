<template>
    <button @mouseover="showLabel = true" @mouseout="showLabel = false"
        class="group w-6 h-6 sm:w-10 sm:h-10 rounded-full relative disabled:opacity-20 transition"
        :class="[!transparent && 'bg-[#f4f4f4] hover:bg-gray active:bg-[#BEBEBE] focus:bg-[#BEBEBE]']" @click.stop="$emit('click')">
        <div class="flex justify-center items-center opacity-40 group-hover:opacity-50 group-active:opacity-60 group-focus:opacity-60">
            <slot></slot>
        </div>

        <span class="absolute left-[125%] hidden lg:inline-block top-0 bottom-0 m-auto h-fit text-xs text-white px-2 py-1 rounded bg-black/80 backdrop-blur-xs whitespace-nowrap z-20
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
    transparent?: boolean
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
