<template>
    <Modal class="h-fit" @close="$emit('close')">
        <div class="text-2xl sm:text-32 mb-2 sm:mb-6">
            Настройки видео
        </div>
    </Modal>
</template>

<script setup lang="ts">
import Modal from '../../Modals/Modal.vue'

export interface Emits {
    (e: 'close'): void
}

defineEmits<Emits>()
</script>

<style scoped></style>
