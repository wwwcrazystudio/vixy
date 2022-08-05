<template>
    <li
        class="flex items-end w-2/5"
        :class="message.isOperatorMessage && 'ml-auto'"
    >
        <template v-if="!message.isOperatorMessage">
            <ChatContactIcon
                class="mr-2.5 w-6 h-6 text-[8px]"
                :name="contact.name"
                :color="contact.color"
                v-if="!contact.img"
            />
            <picture class="mr-2 w-6 h-6 rounded-full" v-else>
                <img
                    :src="contact.img"
                    class="w-full h-full object-cover"
                    :alt="contact.name"
                />
            </picture>
        </template>

        <div
            class="relative w-fit p-2 bg-white shadow-basic rounded-lg before:absolute before:-left-2 before:bottom-0 before:border-solid before:border-b-white before:border-b-8 before:border-x-transparent before:border-x-8 before:border-t-0"
            :class="
                message.isOperatorMessage &&
                'before:left-[unset] before:-right-2 before:border-b-white ml-auto'
            "
        >
            <template v-if="message.call">
                <div class="flex">
                    <div class="mr-2 basis-[38px]">
                        <svg
                            width="38"
                            height="38"
                            viewBox="0 0 38 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.33333 4.75C5.91341 4.75 5.51068 4.91681 5.21375 5.21375C4.91681 5.51068 4.75 5.91341 4.75 6.33333C4.75 13.4721 7.58585 20.3184 12.6337 25.3663C17.6816 30.4141 24.5279 33.25 31.6667 33.25C32.0866 33.25 32.4893 33.0832 32.7863 32.7863C33.0832 32.4893 33.25 32.0866 33.25 31.6667V26.125C33.25 25.7051 33.0832 25.3023 32.7863 25.0054C32.4893 24.7085 32.0866 24.5417 31.6667 24.5417C29.6875 24.5417 27.7875 24.225 26.0142 23.6392C25.46 23.465 24.8425 23.5917 24.3992 24.0192L20.9158 27.5025C16.435 25.2225 12.7617 21.565 10.4817 17.0683L13.965 13.5692C14.4083 13.1575 14.535 12.54 14.3608 11.9858C13.775 10.2125 13.4583 8.3125 13.4583 6.33333C13.4583 5.91341 13.2915 5.51068 12.9946 5.21375C12.6977 4.91681 12.2949 4.75 11.875 4.75H6.33333ZM29.0833 17.4167C29.6356 17.4167 30.0833 16.969 30.0833 16.4167V16.0417C30.0833 15.4894 29.6356 15.0417 29.0833 15.0417H24.5417L32.5429 7.04044C32.9334 6.64992 32.9334 6.01675 32.5429 5.62623L32.3738 5.45711C31.9833 5.06658 31.3501 5.06658 30.9596 5.45711L22.9583 13.4583V8.91667C22.9583 8.36438 22.5106 7.91667 21.9583 7.91667H21.5833C21.031 7.91667 20.5833 8.36438 20.5833 8.91667V16.4167C20.5833 16.969 21.031 17.4167 21.5833 17.4167H29.0833Z"
                                fill="#D8D8D8"
                            />
                        </svg>
                    </div>
                    <div>
                        <div class="text-sm font-medium">
                            {{ callType }}
                        </div>
                        <div class="text-xs opacity-60 flex">
                            <div>
                                {{ message.call.duration }}
                                <a class="underline" href="">Запись звонка.</a>
                            </div>
                            <div class="ml-7">{{ message.date }}</div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="text-xs pr-8 relative">
                    {{ message.content }}
                    <span
                        class="opacity-60 flex items-center absolute right-0 bottom-0"
                        :class="
                            message.unreaded &&
                            'after:w-2 after:h-2 aftet:block after:ml-1 after:rounded-full after:bg-black/20'
                        "
                        >{{ message.date }}</span
                    >
                </div>
            </template>
        </div>

        <template v-if="message.isOperatorMessage">
            <picture class="ml-2.5 w-6 h-6 rounded-full">
                <img
                    :src="contact.operator.img"
                    class="w-full h-full object-cover"
                    :alt="contact.operator.name"
                />
            </picture>
        </template>
    </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ChatContactIcon from './ContactIcon.vue'
export interface Message {
    message: {
        unreaded?: boolean
        date: string
        content?: string
        isOperatorMessage?: boolean
        call?: {
            type: string
            duration: string
        }
    }
    contact: {
        name: string
        img: string
        color: {
            bg: string
            text: string
        }
        operator: {
            name: string
            img: string
        }
    }
}

const props = defineProps<Message>()

const callType = computed(() => {
    if (props.message.call) {
        const { type } = props.message.call
        switch (type) {
            case 'incoming':
                return 'Входящий вызов'
            case 'outgoing':
                return 'Исходящий вызов'
            default:
                return ''
        }
    }

    return null
})
</script>
