<template>
    <div class="flex gap-2.5 items-center p-2 pr-4 bg-black/80 rounded-lg text-white ">
        <picture class="w-10 h-10 basis-auto grow-0 shrink-0 relative rounded-full block border-[2px] border-white">
            <img :src="person.img" :alt="person.name" class="rounded-full w-full h-full object-cover" />
        </picture>
        <div class="flex flex-col overflow-hidden">
            <div class="block text-sm text-ellipsis whitespace-nowrap overflow-hidden">{{ person.name }}</div>
            <div class="text-xs opacity-60">{{ person.job }}</div>
        </div>
        <RouterLink class="block ml-auto" to="/">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                    <path
                        d="M10.2929 17.7071C9.90237 17.3166 9.90237 16.6834 10.2929 16.2929L14.5858 12L10.2929 7.70711C9.90237 7.31658 9.90237 6.68342 10.2929 6.29289C10.6834 5.90237 11.3166 5.90237 11.7071 6.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L11.7071 17.7071C11.3166 18.0976 10.6834 18.0976 10.2929 17.7071Z"
                        fill="white" />
                </g>
            </svg>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import type { ChatAdminType } from '@/types/components.interface.js';

export interface ChatAdminProps {
    person: ChatAdminType
}

defineProps<ChatAdminProps>()
</script>
