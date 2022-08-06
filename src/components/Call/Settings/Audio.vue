<template>
    <Modal class="h-fit" @close="$emit('close')">
        <div class="text-2xl sm:text-32 mb-2 sm:mb-6">Настройки аудио</div>

        <div class="mb-4">
            <div class="text-xs opacity-60">Микрофон</div>
            <Select label="Микрофон" v-model:value="micro" :options="microOptions" />
        </div>
        <div>
            <div class="text-xs opacity-60">Динамики</div>
            <Select label="Динамики" v-model:value="sound" :options="soundOptions" />
        </div>

    </Modal>
</template>

<script setup lang="ts">
import Modal from '../../Modals/Modal.vue'
import Select from '../../Form/Select.vue'
import type { SelectOption } from '@/types/components.interface';
import { ref } from 'vue';

export interface Emits {
    (e: 'close'): void
}

defineEmits<Emits>()

const micro = ref<SelectOption>()

const microOptions = ref<SelectOption[]>(
    [{
        label: 'Built-In Microphone',
        value: 'Built-In Microphone',
    },
    {
        label: 'Built-In Microphone 2',
        value: 'Built-In Microphone 2',
    }]
)

const sound = ref<SelectOption>()

const soundOptions = ref<SelectOption[]>(
    [{
        label: 'Динамик по умолчанию',
        value: 'Динамик по умолчанию',
    },
    {
        label: 'Built-In Microphone 2',
        value: 'Built-In Microphone 2',
    }]
)
</script>

<style scoped>
</style>
