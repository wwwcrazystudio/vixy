<template>
    <Modal class="pb-0"
        modalClass="max-w-none w-full rounded-b-none md:rounded-2xl md:fixed md:top-0 left-0 right-0 mb-0 md:mb-auto bottom-0 z-50 h-fit"
        @close="$emit('close')">
        <div class="mx-auto lg:text-2xl mb-2 sm:mb-6 font-medium text-center">
            Заблокировать пользователя?
        </div>

        <div class="mx-auto mb-6 text-center font-light text-base lg:text-lg">
            Вы&nbsp;уверены, что хотите заблокировать&nbsp;пользователя <br />
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
