<template>
    <li class="shadow-basic bg-white rounded-2xl p-4 md:p-6 flex flex-col h-[200px] md:h-[274px]">
        <div class="mb-2 md:mb-4 lg:mb-8" v-html="title"></div>
        <div class="text-accent font-bold  text-32 md:text-[56px]" v-html="number"></div>

        <div class="mt-auto text-sm opacity-60" v-html="description"></div>
    </li>
</template>

<script setup lang="ts">
export interface ChartsCardProps {
    title: string
    number: string
    description: string
}

defineProps<ChartsCardProps>()
</script>