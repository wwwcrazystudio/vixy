<template>
    <Modal
        class="max-w-[calc(100%-1rem)] md:!max-w-[600px] rounded-b-none md:rounded-2xl md:fixed md:top-0 left-0 right-0 bottom-0 z-50"
        @close="$emit('close')">
        <div class="mx-auto text-2xl mb-2 sm:mb-6 font-medium text-center">
            Подтвердите регистрацию
        </div>

        <div class="mx-auto mb-6 text-center font-light text-lg  w-11/12">
            Ранее мы высылали Вам письмо на email с подтверждением регистрации. Пожлауйста, подтвердите регистрацию —
            это позволит Вам продолжить пользоваться сервисом Re:meet.
        </div>

        <Button class="block  w-4/6 mx-auto"> Выслать повторный email </Button>
    </Modal>
</template>

<script setup lang="ts">
import Button from '../Button.vue'
import Modal from './Modal.vue'

export interface Emits {
    (e: 'close'): void
}

defineEmits<Emits>()
</script>
