<template>
    <Modal
        class="max-w-[calc(100%-1rem)] md:!max-w-md rounded-b-none md:rounded-2xl md:fixed md:top-0 left-0 right-0 bottom-0 z-50"
        @close="$emit('close')"
    >
        <div class="mx-auto text-2xl mb-2 sm:mb-6 font-medium text-center">
            Заблокировать пользователя?
        </div>

        <div class="mx-auto mb-6 text-center font-light text-lg">
            Вы уверены, что хотите заблокировать пользователя <br />
            {{ username }}?
        </div>

        <div class="grid grid-cols-2 gap-4">
            <Button light class="block" @click="$emit('close')">
                Отмена
            </Button>
            <Button class="block"> Заблокировать </Button>
        </div>
    </Modal>
</template>

<script setup lang="ts">
import Button from '../Button.vue'
import Modal from './Modal.vue'

export interface Props {
    username: string
}

export interface Emits {
    (e: 'close'): void
}

defineEmits<Emits>()

defineProps<Props>()
</script>
