<template>
    <div class="p-4 bg-black/80 rounded-xl">
        <div class="flex mb-4 items-center">
            <ChatContactIcon
                class="border-2 border-white basis-10 w-10 h-10 mr-2 text-xs"
                :name="contact.name"
                :color="contact.color"
                v-if="!contact.img"
            />
            <picture
                class="border-2 block border-white basis-10 w-10 h-10 mr-2"
                v-else
            >
                <img
                    :src="contact.img"
                    clas="w-full h-full rounded-full object-cover"
                    alt=""
                />
            </picture>
            <div>
                <div class="font-medium flex text-white items-center">
                    {{ contact.name }}
                </div>
                <div class="text-white/60 text-sm">Аудиозвонок</div>
            </div>
        </div>

        <AdvBanner
            v-if="banner"
            class="mb-3 bg-white/10 text-white border border-white/10 rounded"
            :banner="banner"
        />

        <div class="grid grid-cols-3 gap-2">
            <CallBtn color="green">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21.5 6.1C21.2 5.9 20.8 5.9 20.5 6.1L16.1 9.1V7C16.1 5.9 15.2 5 14.1 5H4C2.9 5 2 5.9 2 7V17C2 18.1 2.9 19 4 19H14C15.1 19 16 18.1 16 17V14.9L20.4 17.9C20.6 18 20.8 18.1 21 18.1C21.2 18.1 21.3 18.1 21.5 18C21.8 17.8 22 17.5 22 17.1V7C22 6.6 21.8 6.3 21.5 6.1ZM14 17H4V7H14V11V13V17ZM20 15.1L16 12.4V11.5L20 8.8V15.1Z"
                        fill="white"
                    />
                </svg>
            </CallBtn>

            <CallBtn color="green">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21.5 6.1C21.2 5.9 20.8 5.9 20.5 6.1L16.1 9.1V7C16.1 5.9 15.2 5 14.1 5H4C2.9 5 2 5.9 2 7V17C2 18.1 2.9 19 4 19H14C15.1 19 16 18.1 16 17V14.9L20.4 17.9C20.6 18 20.8 18.1 21 18.1C21.2 18.1 21.3 18.1 21.5 18C21.8 17.8 22 17.5 22 17.1V7C22 6.6 21.8 6.3 21.5 6.1ZM14 17H4V7H14V11V13V17ZM20 15.1L16 12.4V11.5L20 8.8V15.1Z"
                        fill="white"
                    />
                </svg>
            </CallBtn>

            <CallBtn color="red">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21.5 6.1C21.2 5.9 20.8 5.9 20.5 6.1L16.1 9.1V7C16.1 5.9 15.2 5 14.1 5H4C2.9 5 2 5.9 2 7V17C2 18.1 2.9 19 4 19H14C15.1 19 16 18.1 16 17V14.9L20.4 17.9C20.6 18 20.8 18.1 21 18.1C21.2 18.1 21.3 18.1 21.5 18C21.8 17.8 22 17.5 22 17.1V7C22 6.6 21.8 6.3 21.5 6.1ZM14 17H4V7H14V11V13V17ZM20 15.1L16 12.4V11.5L20 8.8V15.1Z"
                        fill="white"
                    />
                </svg>
            </CallBtn>
        </div>
    </div>
</template>

<script setup lang="ts">
import ChatContactIcon from './ContactIcon.vue'
import AdvBanner from '../AdvBanner.vue'
import CallBtn from './CallBtn.vue'

export interface CallNotificationProps {
    contact: {
        name: string
        color: string
        img: string
    }
    banner?: {
        img: string
        title: string
        price: string
        discount: string
    }
}

defineProps<CallNotificationProps>()
</script>
