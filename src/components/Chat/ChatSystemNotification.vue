<template>
    <li
        class="py-1 px-4 mb-2 bg-black/20 rounded-3xl w-fit mx-auto text-white text-xs"
        v-html="content"
    ></li>
</template>

<script setup lang="ts">
export interface NotificationProps {
    content: string
}

defineProps<NotificationProps>()
</script>
