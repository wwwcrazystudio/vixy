<template>
    <Modal class="pb-0"
        modalClass="max-w-none w-full rounded-b-none md:rounded-2xl md:fixed md:top-0 left-0 right-0 mb-0 md:mb-auto bottom-0 z-50 h-fit" @close="$emit('close')">
        <div class="text-2xl sm:text-32 mb-2 sm:mb-6">
            Настройки видео
        </div>

        <div class="mb-4">
            <div class="text-xs opacity-60">Камера</div>
            <Select label="Камера" v-model:value="cam" :options="camOptions" />
        </div>
        <div class="mb-4">
            <div class="text-xs opacity-60">Разрешение получаемого видео</div>
            <Select label="Разрешение получаемого видео" v-model:value="resIn" :options="resOptions" />
        </div>
        <div>
            <div class="text-xs opacity-60">Разрешение отправляемого видео</div>

            <Select label="Разрешение отправляемого видео" v-model:value="resOut" :options="resOptions" />
        </div>

    </Modal>
</template>

<script setup lang="ts">
import type { SelectOption } from '@/types/components.interface';
import { ref } from 'vue';
import Modal from '../../Modals/Modal.vue'
import Select from '../../Form/Select.vue'

export interface Emits {
    (e: 'close'): void
}

defineEmits<Emits>()

const cam = ref<SelectOption>()

const camOptions = ref<SelectOption[]>(
    [{
        label: 'FaceTime HD',
        value: 'FaceTime HD',
    },
    {
        label: 'Built-In Microphone 2',
        value: 'Built-In Microphone 2',
    }]
)

const resIn = ref<SelectOption>()
const resOut = ref<SelectOption>()

const resOptions = ref<SelectOption[]>(
    [{
        label: 'Высокое',
        value: 'Высокое',
    },
    {
        label: 'Built-In Microphone 2',
        value: 'Built-In Microphone 2',
    }]
)
</script>

<style scoped>
</style>
