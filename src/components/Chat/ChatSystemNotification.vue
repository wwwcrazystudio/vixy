<template>
    <li
        class="py-1 px-3 md:px-4 mb-2 bg-black/20 rounded-3xl w-fit mx-auto text-white text-sm text-center"
        v-html="content || 'Ошибка'"
    ></li>
</template>

<script setup lang="ts">
export interface NotificationProps {
    content?: string
}

defineProps<NotificationProps>()
</script>
