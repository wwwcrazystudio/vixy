<template>
    <Modal class="h-fit" @close="$emit('close')">
        <div class="text-2xl sm:text-32 mb-2 sm:mb-6">Сообщить о проблеме</div>

        <div class="font-medium text-black/60 mb-6">
            Если у вас возникла проблема, напишите нам и мы свяжемся с Вами для
            ее устранения
        </div>

        <Textarea
            class="mb-4.5"
            v-model:value="message"
            label="Опишите проблему"
        />

        <Button class="w-full">Отправить</Button>
    </Modal>
</template>

<script setup lang="ts">
import Modal from '../../Modals/Modal.vue'
import Textarea from '../../Form/Textarea.vue'
import { ref } from 'vue'
import Button from '../../Button.vue'

export interface Emits {
    (e: 'close'): void
}

defineEmits<Emits>()

const message = ref<string>('')
</script>

<style scoped></style>
