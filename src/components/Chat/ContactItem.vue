<template>
    <li>
        <RouterLink :to="`/chat/${item.url}`" v-slot="{ isActive }"
            class="flex items-center w-full relative gap-2 sm:gap-3" exact-active-class="bg-accent">
            <div class="pl-2 sm:pl-4">
                <ChatContactIcon
                    class="border-2 md:border-[3px] border-white w-8 h-8 sm:w-10 sm:h-10 text-[8px] sm:text-xs md:text-base md:w-14 md:h-14"
                    :name="item.name" :color="item.color" v-if="!item.img" />
                <picture class="border-[3px] block border-white w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14" v-else>
                    <img :src="item.img" clas="w-full h-full rounded-full object-cover" alt="" />
                </picture>
            </div>
            <div class="grow shrink py-2 sm:py-4 pr-2 sm:pr-4 border-b min-w-0" :class="!isActive && 'border-gray '">
                <div class="font-medium flex items-center" :class="isActive && 'text-white'">
                    <div class="whitespace-nowrap text-ellipsis overflow-hidden">{{ item.name }}</div>
                    <span class="ml-auto opacity-40 text-xs">{{ date }}</span>
                </div>
                <div :class="hasUnreaded && 'md:pr-7 relative'">
                    <div class="text-sm whitespace-nowrap text-ellipsis overflow-hidden"
                        :class="[isActive && 'text-white/80 active', !isActive && 'text-black/60']" v-html="content"></div>
                    <div class="rounded-full w-5 h-5 absolute right-0 top-0 bottom-0 m-auto grid place-content-center font-semibold text-xs"
                        :class="[isActive && 'bg-white text-accent', !isActive && 'bg-accent text-white']" v-if="hasUnreaded">
                        {{ hasUnreaded }}
                    </div>
                </div>
            </div>
        </RouterLink>
    </li>
</template>

<script setup lang="ts">
import type { ContactItemType } from '@/types/components.interface'
import { computed } from 'vue'
import ChatContactIcon from './ContactIcon.vue'

export interface ContactItem {
    item: ContactItemType
}

const props = defineProps<ContactItem>()

const content = computed(() => {
    const { history, excerpt } = props.item
    const withoutNotifications = history.filter((el) => !el.isNotification)
    const lastMessage = withoutNotifications[withoutNotifications.length - 1]

    console.log(lastMessage)

    if (excerpt) {
        return excerpt
    }

    if (lastMessage.call) {
        return `
        <div class="flex items-center">
            <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33333 0.5C1.11232 0.5 0.900358 0.587797 0.744078 0.744078C0.587797 0.900358 0.5 1.11232 0.5 1.33333C0.5 5.09057 1.99256 8.69391 4.64932 11.3507C7.30609 14.0074 10.9094 15.5 14.6667 15.5C14.8877 15.5 15.0996 15.4122 15.2559 15.2559C15.4122 15.0996 15.5 14.8877 15.5 14.6667V11.75C15.5 11.529 15.4122 11.317 15.2559 11.1607C15.0996 11.0045 14.8877 10.9167 14.6667 10.9167C13.625 10.9167 12.625 10.75 11.6917 10.4417C11.4 10.35 11.075 10.4167 10.8417 10.6417L9.00833 12.475C6.65 11.275 4.71667 9.35 3.51667 6.98333L5.35 5.14167C5.58333 4.925 5.65 4.6 5.55833 4.30833C5.25 3.375 5.08333 2.375 5.08333 1.33333C5.08333 1.11232 4.99554 0.900358 4.83926 0.744078C4.68298 0.587797 4.47101 0.5 4.25 0.5H1.33333ZM13.8333 7.16667V5.91667H10.9167L15.5 1.33333L14.6667 0.5L10.0833 5.08333V2.16667H8.83333V7.16667H13.8333Z" fill="#000000"/>
            </svg>
            Входящий вызов
        </div>`
    }

    if (lastMessage.isOperatorMessage) {
        return `
         <div class="flex items-center">
            <img class="mr-2 rounded-full w-5 h-5" src="
                ${props.item.operator.img}" />
            <div class="whitespace-nowrap text-ellipsis overflow-hidden">
                ${lastMessage.file ? 'Файл' : lastMessage.content}
            </div>
        </div>
        `
    }

    if (lastMessage.file) {
        return `<div class="whitespace-nowrap text-ellipsis overflow-hidden">Файл</div>`
    }

    return `<div class="whitespace-nowrap text-ellipsis overflow-hidden">${lastMessage.content}</div>`
})

const date = computed(() => {
    const { history } = props.item
    return history[history.length - 1].date
})

const hasUnreaded = computed(() => {
    const { history } = props.item
    return history.filter((el) => el.unreaded).length
})
</script>

<style>
.active svg path {
    fill: #fff;
}
</style>
