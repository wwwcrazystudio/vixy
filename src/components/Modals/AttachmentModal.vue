<template>
    <Modal
        class="!p-0 !max-w-[288px] rounded-b-none md:rounded-2xl md:fixed md:top-0 left-0 right-0 -bottom-[64px] md:bottom-0 z-50"
        @close="$emit('close')">
        <ul class="list-none p-6 pb-4">
            <li class="flex items-center" v-for="(file, key) in files" :key="key">
                <div class="basis-[40px] mr-2">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.3332 3.33398H9.99984C9.11578 3.33398 8.26794 3.68517 7.64281 4.31029C7.01769 4.93542 6.6665 5.78326 6.6665 6.66732V33.334C6.6665 34.218 7.01769 35.0659 7.64281 35.691C8.26794 36.3161 9.11578 36.6673 9.99984 36.6673H29.9998C30.8839 36.6673 31.7317 36.3161 32.3569 35.691C32.982 35.0659 33.3332 34.218 33.3332 33.334V13.334L23.3332 3.33398ZM29.9998 33.334H9.99984V6.66732H21.6665V15.0007H29.9998V33.334Z"
                            fill="#D8D8D8" />
                    </svg>
                </div>
                <div>
                    <div class="font-medium text-sm w-5/6 whitespace-nowrap overflow-hidden text-ellipsis">
                        {{ file.name }}
                    </div>
                    <div class="text-xs opacity-60">
                        {{ formatBytes(file.size) }}
                    </div>
                </div>
            </li>
        </ul>

        <div class="flex items-center p-2 pl-4 border-t border-gray">
            <div class="grow shrink relative">
                <label for="messageControl"
                    class="font-sm text-black/40 absolute top-0 bottom-0 h-fit m-auto pointer-events-none"
                    :class="description?.length && 'opacity-0'">
                    Добавить подпись...
                </label>
                <input id="messageControl" type="text" class="bg-transparent text-black" :value="description"
                    @input="handleInput" />
            </div>
            <button class="ml-2 w-10 h-10 basis-10 rounded-lg bg-accent grid place-content-center"
                @click.prevent="handleSubmit">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="white" />
                </svg>
            </button>
        </div>
    </Modal>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Modal from './Modal.vue'

export interface Props {
    attachment?: FileList
}

export interface Emits {
    (e: 'close'): void
    (e: 'confirm', value: string): void
}

const emit = defineEmits<Emits>()
const props = defineProps<Props>()

const description = ref<string>('')

const files = computed(() => {
    return props.attachment ? [...props.attachment] : []
})

const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0'
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(1024))

    return parseFloat((bytes / Math.pow(1024, i)).toFixed(1)) + sizes[i]
}

const handleInput = (e: Event) => {
    const el = e.target as HTMLInputElement
    const value = el.value as string
    description.value = value
}

const handleSubmit = () => {
    emit('confirm', description.value)
}
</script>