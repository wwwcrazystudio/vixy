<template>
    <div class="w-full flex flex-col">
        <div class="bg-white px-4 py-2 w-full flex items-center mb-auto">
            <ContactIcon
                class="border border-gray basis-10 w-10 h-10 mr-2 rounded text-[10px]"
                :name="contact.name"
                :color="contact.color"
                v-if="!contact.img"
            />
            <picture
                class="border border-gray basis-10 w-10 h-10 mr-2 rounded"
                v-else
            >
                <img
                    :src="contact.img"
                    clas="w-full h-full rounded-full object-cover"
                    alt=""
                />
            </picture>

            <div class="font-medium">
                {{ contact.name }}
            </div>

            <div class="ml-auto flex">
                <button class="ml-4">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.4">
                            <path
                                d="M4 3C2.89543 3 2 3.89543 2 5V10V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V10V5C22 3.89543 21.1046 3 20 3H4Z"
                                fill="black"
                            />
                            <rect
                                x="4"
                                y="5"
                                width="16"
                                height="14"
                                rx="0.5"
                                fill="white"
                            />
                            <path d="M15 12L10 15L10 9L15 12Z" fill="black" />
                        </g>
                    </svg>
                </button>

                <button class="ml-4">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.4">
                            <path
                                d="M5.68014 7.09436C4.62708 8.44904 4 10.1513 4 12C4 16.4183 7.58172 20 12 20C13.8487 20 15.551 19.3729 16.9056 18.3199L5.68014 7.09436ZM7.09436 5.68014L18.3199 16.9056C19.3729 15.551 20 13.8487 20 12C20 7.58172 16.4183 4 12 4C10.1513 4 8.44904 4.62708 7.09436 5.68014ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
                                fill="#0D0D0D"
                            />
                        </g>
                    </svg>
                </button>

                <button class="ml-4">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.4">
                            <path
                                d="M14.2929 2.29289C14.6834 1.90237 15.3166 1.90237 15.7071 2.29289L19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L15.7071 11.7071C15.3166 12.0976 14.6834 12.0976 14.2929 11.7071C13.9024 11.3166 13.9024 10.6834 14.2929 10.2929L16.5858 8L5 8C4.44772 8 4 7.55228 4 7C4 6.44771 4.44772 6 5 6L16.5858 6L14.2929 3.70711C13.9024 3.31658 13.9024 2.68342 14.2929 2.29289ZM9.70711 12.2929C10.0976 12.6834 10.0976 13.3166 9.70711 13.7071L7.41421 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H7.41421L9.70711 20.2929C10.0976 20.6834 10.0976 21.3166 9.70711 21.7071C9.31658 22.0976 8.68342 22.0976 8.29289 21.7071L4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17C4 16.7348 4.10536 16.4804 4.29289 16.2929L8.29289 12.2929C8.68342 11.9024 9.31658 11.9024 9.70711 12.2929Z"
                                fill="black"
                            />
                        </g>
                    </svg>
                </button>
            </div>
        </div>

        <div class="p-6">
            <div
                class="py-1 px-4 bg-black/20 rounded-3xl w-fit mx-auto mb-3 text-white text-xs"
            >
                Дмитрий взял пользователя, сегодня
            </div>
            <ul class="list-none grid gap-2">
                <ChatMessageItem
                    v-for="(message, key) in contact.history"
                    :key="key"
                    :message="message"
                    :contact="contact"
                />
            </ul>
        </div>

        <form class="bg-white border-t border-gray py-2 px-4">
            <div class="relative flex items-center">
                <div class="basis-3/5 grow shrink">
                    <label
                        for="messageControl"
                        class="font-sm text-black/40 absolute top-0 bottom-0 h-fit m-auto pointer-events-none"
                        :class="formMessage?.length && 'opacity-0'"
                    >
                        Сообщение...
                    </label>
                    <input
                        id="messageControl"
                        type="text"
                        class="bg-transparent text-black"
                        :value="formMessage"
                        @input="handleInput"
                    />
                </div>
                <div class="ml-4">
                    <label for="attachment">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g opacity="0.4">
                                <path
                                    d="M19.4628 5.57573C18.7755 4.82597 17.5344 4.77977 16.7071 5.60711L8.60706 13.7071C8.39758 13.9166 8.39758 14.1834 8.60706 14.3929C8.81653 14.6024 9.08337 14.6024 9.29284 14.3929L15.9928 7.6929C16.3834 7.30238 17.0165 7.30238 17.4071 7.6929C17.7976 8.08342 17.7976 8.71659 17.4071 9.10711L10.7071 15.8071C9.71653 16.7976 8.18337 16.7976 7.19284 15.8071C6.20232 14.8166 6.20232 13.2834 7.19284 12.2929L15.2928 4.1929C16.8604 2.62537 19.4077 2.57436 20.9223 4.20821C22.4746 5.77662 22.5203 8.31157 20.8928 9.82133L11.4071 19.3071C9.21653 21.4976 5.78337 21.4976 3.59284 19.3071C1.40232 17.1166 1.40232 13.6834 3.59284 11.4929L11.6928 3.3929C12.0834 3.00238 12.7165 3.00238 13.1071 3.3929C13.4976 3.78342 13.4976 4.41659 13.1071 4.80711L5.00706 12.9071C3.59758 14.3166 3.59758 16.4834 5.00706 17.8929C6.41653 19.3024 8.58337 19.3024 9.99284 17.8929L19.4928 8.3929C19.5031 8.38266 19.5135 8.37264 19.5242 8.36285C20.274 7.67557 20.3202 6.43446 19.4928 5.60711C19.4826 5.59687 19.4726 5.58641 19.4628 5.57573Z"
                                    fill="black"
                                />
                            </g>
                        </svg>
                    </label>
                    <input
                        id="attachment"
                        type="file"
                        class="appearance-none absolute opacity-0"
                    />
                </div>
                <button
                    class="ml-4 w-10 h-10 basis-10 rounded-full bg-accent grid place-content-center"
                    @click.prevent="submit"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_987_883)">
                            <path
                                d="M21.0711 2.92849C21.3389 3.19633 21.4324 3.59249 21.3126 3.95183L14.9487 23.0437C14.8267 23.4097 14.5051 23.6729 14.1222 23.72C13.7393 23.7671 13.3635 23.5898 13.1563 23.2644L8.3259 15.6737L0.735208 10.8432C0.409746 10.6361 0.23244 10.2603 0.279576 9.87738C0.326711 9.4945 0.589879 9.17287 0.955856 9.05088L20.0477 2.68692C20.4071 2.56714 20.8032 2.66066 21.0711 2.92849ZM10.3246 15.0892L13.7157 20.4181L18.0757 7.33806L10.3246 15.0892ZM16.6615 5.92385L3.58147 10.2839L8.91037 13.675L16.6615 5.92385Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_987_883">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ContactIcon from '../../components/Chat/ContactIcon.vue'
import operatorImg from '@/assets/placeholder/person.jpg'
import ChatMessageItem from '../../components/Chat/MessageItem.vue'

const formMessage = ref<string>('')

const contact = {
    img: '',
    name: 'Безымянный Желтый Ящер',
    operator: {
        name: 'Дмитрий',
        img: operatorImg,
    },
    color: {
        bg: '#1BBE49',
        text: '#fff',
    },
    url: '123',
    history: [
        {
            content: 'Спасибо за файл, это круто. Файл мне ок.',
            date: '16:23',
            isOperatorMessage: true,
        },
        {
            date: '16:23',
            call: {
                type: 'incoming',
                duration: '14 мин.',
            },
        },
        {
            date: '16:23',
            call: {
                type: 'incoming',
                duration: '14 мин.',
            },
        },
        {
            content:
                'Да, у нас есть еще дополнительные модули полезные для вашего бизнеса с ними вы можете',
            date: '16:23',
            isOperatorMessage: true,
            unreaded: true,
        },
        {
            date: '16:23',
            call: {
                type: 'incoming',
                duration: '14 мин.',
            },
        },
    ],
}

const handleInput = (e: Event) => {
    const el = e.target as HTMLInputElement
    const value = el.value as string
    formMessage.value = value
}

const submit = () => {
    return
}
</script>

<style scoped></style>
