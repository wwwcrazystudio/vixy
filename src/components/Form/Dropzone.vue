<template>
    <div>
        <div class="p-9 border mb-4 flex items-center justify-center border-dashed rounded-lg border-gray" @dragover.prevent
            @dragenter.prevent @drop.prevent="handleDrop">
            <template v-if="!files">
                <label for="attachment" class="cursor-pointer text-accent underline mr-1">
                    Выберите файл
                </label>
                или перетащите его в это поле
            </template>
            <template v-else>
                <div class="flex items-center" v-for="file in [...files]">
                    <div class="basis-[40px] mr-2">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.2">
                                <path
                                    d="M23.3332 3.33398H9.99984C9.11578 3.33398 8.26794 3.68517 7.64281 4.31029C7.01769 4.93542 6.6665 5.78326 6.6665 6.66732V33.334C6.6665 34.218 7.01769 35.0659 7.64281 35.691C8.26794 36.3161 9.11578 36.6673 9.99984 36.6673H29.9998C30.8839 36.6673 31.7317 36.3161 32.3569 35.691C32.982 35.0659 33.3332 34.218 33.3332 33.334V13.334L23.3332 3.33398ZM29.9998 33.334H9.99984V6.66732H21.6665V15.0007H29.9998V33.334Z"
                                    fill="#1940F3" />
                            </g>
                        </svg>
                    </div>
                    <div>
                        <div class="font-medium text-sm w-5/6 whitespace-nowrap overflow-hidden text-ellipsis">
                            {{ file.name }}
                        </div>
                        <div class="text-xs opacity-60 flex">
                            {{ formatBytes(file.size) }}
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <input id="attachment" type="file" class="appearance-none absolute opacity-0 pointer-events-none top-0"
            @change="handleFile" />
    </div>
</template>

<script setup lang="ts">
export interface DropzoneEmits {
    (e: 'change', value: FileList): void
}

export interface DropzoneProps {
    files?: FileList
}

const emit = defineEmits<DropzoneEmits>()
const props = defineProps<DropzoneProps>()

const handleDrop = (e: any) => {
    const files = e.dataTransfer.files
    const transfer = new DataTransfer()
    const currentFiles = props.files as FileList

    if (currentFiles) {
        // iterate current files and add to dt
        for (let i = 0; i < currentFiles.length; i++) {
            transfer.items.add(currentFiles[i])
        }
    }

    // iterate dropped files and add to dt
    for (let i = 0; i < files.length; i++) {
        transfer.items.add(files[i])
    }

    emit('change', transfer.files)
}

const handleFile = (e: Event) => {
    const el = e.target as HTMLInputElement
    const files = el.files
    emit('change', files)
}

const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0'
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(1024))

    return parseFloat((bytes / Math.pow(1024, i)).toFixed(1)) + sizes[i]
}
</script>
