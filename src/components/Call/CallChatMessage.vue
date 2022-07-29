<template>
    <li
        class="text-white relative w-fit p-[10px] rounded-md bg-[#3c424a] before:absolute before:-left-2 before:bottom-0 before:border-solid before:border-b-[#3c424a] before:border-b-8 before:border-x-transparent before:border-x-8 before:border-t-0"
        :class="[
            message.unreaded &&
                'after:w-2 after:h-2 after:rounded-full after:absolute after:-top-1 after:-right-1 after:bg-white',
            !message.author &&
                '!bg-white text-dark before:left-[unset] before:-right-2 before:border-b-white ml-auto',
        ]"
    >
        <div
            class="font-bold text-ellipsis whitespace-nowrap text-[13px] text-white/60 mb-1"
            :class="!message.author && 'text-dark/50'"
        >
            {{ message.author || 'Вы' }}, {{ message.date }}
        </div>
        <div class="text-sm">{{ message.content }}</div>
    </li>
</template>

<script setup lang="ts">
export interface Message {
    message: {
        unreaded?: boolean
        author?: string
        date: string
        content: string
    }
}

defineProps<Message>()
</script>
