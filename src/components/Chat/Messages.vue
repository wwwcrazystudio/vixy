<template>
    <div class="w-full flex flex-col">
        <div class="bg-white px-2 md:px-4 py-2 w-full flex flex-wrap items-center mb-auto">
            <RouterLink to="/chat" class="grid place-content-center xl:hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                        <path
                            d="M13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711L9.41421 12L13.7071 16.2929C14.0976 16.6834 14.0976 17.3166 13.7071 17.7071C13.3166 18.0976 12.6834 18.0976 12.2929 17.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289Z"
                            fill="black" />
                    </g>
                </svg>
            </RouterLink>
            <div class="flex gap-2 items-center w-[40%] shrink">
                <div class="hidden md:flex">
                    <ContactIcon class="border border-gray w-8 h-8 md:w-10 md:h-10 rounded text-[10px]"
                        :name="contact.name" :color="contact.color" v-if="!contact.img" />
                    <picture class="border border-gray  w-8 h-8 md:w-10 md:h-10 rounded" v-else>
                        <img :src="contact.img" clas="w-full h-full rounded-full object-cover" alt="" />
                    </picture>
                </div>
                <div class="font-medium text-ellipsis overflow-hidden whitespace-nowrap w-5/6">
                    {{ contact.name }}
                </div>
            </div>

            <div class="ml-auto gap-4 flex">
                <button @click.stop="videoHistoryModal = true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                            <path
                                d="M4 3C2.89543 3 2 3.89543 2 5V10V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V10V5C22 3.89543 21.1046 3 20 3H4Z"
                                fill="black" />
                            <rect x="4" y="5" width="16" height="14" rx="0.5" fill="white" />
                            <path d="M15 12L10 15L10 9L15 12Z" fill="black" />
                        </g>
                    </svg>
                </button>

                <button @click.stop="blacklistUserModal = true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                            <path
                                d="M5.68014 7.09436C4.62708 8.44904 4 10.1513 4 12C4 16.4183 7.58172 20 12 20C13.8487 20 15.551 19.3729 16.9056 18.3199L5.68014 7.09436ZM7.09436 5.68014L18.3199 16.9056C19.3729 15.551 20 13.8487 20 12C20 7.58172 16.4183 4 12 4C10.1513 4 8.44904 4.62708 7.09436 5.68014ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
                                fill="#0D0D0D" />
                        </g>
                    </svg>
                </button>

                <button @click.stop="transferUserModal = true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                            <path
                                d="M14.2929 2.29289C14.6834 1.90237 15.3166 1.90237 15.7071 2.29289L19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L15.7071 11.7071C15.3166 12.0976 14.6834 12.0976 14.2929 11.7071C13.9024 11.3166 13.9024 10.6834 14.2929 10.2929L16.5858 8L5 8C4.44772 8 4 7.55228 4 7C4 6.44771 4.44772 6 5 6L16.5858 6L14.2929 3.70711C13.9024 3.31658 13.9024 2.68342 14.2929 2.29289ZM9.70711 12.2929C10.0976 12.6834 10.0976 13.3166 9.70711 13.7071L7.41421 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H7.41421L9.70711 20.2929C10.0976 20.6834 10.0976 21.3166 9.70711 21.7071C9.31658 22.0976 8.68342 22.0976 8.29289 21.7071L4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17C4 16.7348 4.10536 16.4804 4.29289 16.2929L8.29289 12.2929C8.68342 11.9024 9.31658 11.9024 9.70711 12.2929Z"
                                fill="black" />
                        </g>
                    </svg>
                </button>
            </div>
        </div>

        <div class="p-6 overflow-auto grow shrink basis-3/6 flex flex-col-reverse">
            <ul class="list-none grid gap-1">
                <template v-for="(message, key) in contact.history" :key="key">
                    <ChatMessageItem v-if="!message.isNotification" :query="searchQuery" :message="message"
                        :contact="contact" />
                    <ChatSystemNotification @click="
                        message.isBlackListNotification &&
                        $emit('unblacklist')
                    " :content="message.content" v-else />
                </template>
            </ul>
        </div>

        <form class="bg-white border-t border-gray py-2 px-4">
            <div class="relative flex items-center">
                <div class="basis-3/5 grow shrink">
                    <label for="messageControl"
                        class="font-sm text-black/40 absolute top-0 bottom-0 h-fit m-auto pointer-events-none"
                        :class="formMessage?.length && 'opacity-0'">
                        Сообщение...
                    </label>
                    <input id="messageControl" type="text" class="bg-transparent text-black" :value="formMessage"
                        @input="handleInput" />
                </div>
                <Attachment class="ml-4" @change="handleAttachment" />
                <button class="ml-4 w-10 h-10 basis-10 rounded-full bg-accent grid place-content-center"
                    @click.prevent="submit">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_987_883)">
                            <path
                                d="M21.0711 2.92849C21.3389 3.19633 21.4324 3.59249 21.3126 3.95183L14.9487 23.0437C14.8267 23.4097 14.5051 23.6729 14.1222 23.72C13.7393 23.7671 13.3635 23.5898 13.1563 23.2644L8.3259 15.6737L0.735208 10.8432C0.409746 10.6361 0.23244 10.2603 0.279576 9.87738C0.326711 9.4945 0.589879 9.17287 0.955856 9.05088L20.0477 2.68692C20.4071 2.56714 20.8032 2.66066 21.0711 2.92849ZM10.3246 15.0892L13.7157 20.4181L18.0757 7.33806L10.3246 15.0892ZM16.6615 5.92385L3.58147 10.2839L8.91037 13.675L16.6615 5.92385Z"
                                fill="white" />
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

        <Overlay v-if="transferUserModal">
            <TransferModal
                class="max-w-none w-full rounded-b-none md:rounded-2xl md:fixed md:top-0 left-0 right-0 mb-0 md:mb-auto bottom-0 z-50"
                @close="transferUserModal = false" />
        </Overlay>

        <Overlay v-if="blacklistUserModal">
            <BlacklistModal class="mb-0  w-full md:mb-auto bottom-0" :username="contact.name"
                @close="blacklistUserModal = false" />
        </Overlay>

        <Overlay v-if="attachmentsModal">
            <AttachmentModal class="max-w-none md:fixed md:top-0 left-0 right-0 bottom-0 z-50" :attachment="attachment"
                @close="attachmentsModal = false" @confirm="handleFileUpload" />
        </Overlay>

        <Overlay v-if="videoHistoryModal">
            <VideoHistoryModal
                class="max-w-none  w-full rounded-b-none md:rounded-2xl md:fixed md:top-0 left-0 right-0  mb-0 md:mb-auto bottom-0 z-50"
                v-model:videos="videos" @close="videoHistoryModal = false" />
        </Overlay>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ContactIcon from './ContactIcon.vue'
import ChatMessageItem from './MessageItem.vue'
import ChatSystemNotification from './ChatSystemNotification.vue'
import TransferModal from '../Modals/TransferModal.vue'
import Overlay from '../Overlay.vue'
import BlacklistModal from '../Modals/BlacklistModal.vue'
import AttachmentModal from '../Modals/AttachmentModal.vue'
import VideoHistoryModal from '../Modals/VideoHistoryModal.vue'
import Attachment from '../Form/Attachment.vue'
import type { ContactItemType, VideoItemType, FileItemType } from '@/types/components.interface'

// placeholders
import { videosPlaceholder } from '@/placeholderData/videos'

export interface MessagesProps {
    contact: ContactItemType
    searchQuery: string
}

export interface MessagesEmits {
    (e: 'unblacklist'): void
    (e: 'uploadFile', value: {
        contact: string
        file: FileItemType
    }): void
}

const formMessage = ref<string>('')
const attachment = ref<FileList>()
const videos = ref<VideoItemType[]>([])

videos.value = videosPlaceholder

// Modals
const blacklistUserModal = ref<boolean>(false)
const transferUserModal = ref<boolean>(false)
const videoHistoryModal = ref<boolean>(false)
const attachmentsModal = ref<boolean>(false)

const props = defineProps<MessagesProps>()
const emit = defineEmits<MessagesEmits>()

const handleInput = (e: Event) => {
    const el = e.target as HTMLInputElement
    const value = el.value as string
    formMessage.value = value
}

const handleAttachment = (files: FileList) => {
    attachmentsModal.value = true
    attachment.value = files
}

const handleFileUpload = (description: string) => {
    if (attachment.value) {
        const file = {
            file: {
                file: attachment.value[0],
                description,
                url: '',
            },
            contact: props.contact.id,
        }

        emit('uploadFile', file)
        attachmentsModal.value = false
    }
}

const submit = () => {
    return
}
</script>