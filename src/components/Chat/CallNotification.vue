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
                        d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.2652 15.5 20.5196 15.6054 20.7071 15.7929C20.8946 15.9804 21 16.2348 21 16.5V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21C15.4913 21 11.1673 19.2089 7.97918 16.0208C4.79107 12.8327 3 8.50868 3 4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H7.5C7.76522 3 8.01957 3.10536 8.20711 3.29289C8.39464 3.48043 8.5 3.73478 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
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
                        d="M12 9C10.4 9 8.85 9.25 7.4 9.72V12.82C7.4 13.22 7.17 13.56 6.84 13.72C5.86 14.21 4.97 14.84 4.17 15.57C4 15.75 3.75 15.86 3.5 15.86C3.2 15.86 2.95 15.74 2.77 15.56L0.29 13.08C0.11 12.9 0 12.65 0 12.38C0 12.1 0.11 11.85 0.29 11.67C3.34 8.77 7.46 7 12 7C16.54 7 20.66 8.77 23.71 11.67C23.89 11.85 24 12.1 24 12.38C24 12.65 23.89 12.9 23.71 13.08L21.23 15.56C21.05 15.74 20.8 15.86 20.5 15.86C20.25 15.86 20 15.75 19.82 15.57C19.03 14.84 18.14 14.21 17.16 13.72C16.83 13.56 16.6 13.22 16.6 12.82V9.72C15.15 9.25 13.6 9 12 9Z"
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
