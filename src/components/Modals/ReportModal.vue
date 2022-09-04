<template>
    <Modal class="pb-0" modalClass="max-w-none w-full rounded-b-none md:rounded-2xl md:fixed md:top-0 left-0 right-0 mb-0 md:mb-auto bottom-0 z-50 h-fit" @close="$emit('close')">
        <div class="text-2xl sm:text-32 mb-2 sm:mb-6">Сообщить о проблеме</div>

        <div class="font-medium text-black/60 mb-6">
            Если у&nbsp;вас возникла проблема, напишите нам и&nbsp;мы&nbsp;свяжемся с&nbsp;Вами для
            ее&nbsp;устранения
        </div>

        <Textarea class="mb-4.5" v-model:value="message" label="Опишите проблему" />

        <Button class="w-full">Отправить</Button>
    </Modal>
</template>

<script setup lang="ts">
import Modal from './Modal.vue'
import Textarea from '../Form/Textarea.vue'
import { ref } from 'vue'
import Button from '../Button.vue'

export interface Emits {
    (e: 'close'): void
}

defineEmits<Emits>()

const message = ref<string>('')
</script>

<style scoped>
</style>
