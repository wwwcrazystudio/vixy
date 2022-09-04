<template>
    <Modal hideCloseBtn>
        <div class="mx-auto text-2xl sm:text-32 mb-2 sm:mb-6 font-medium text-center">
            Изменить пароль
        </div>
        <div class="mx-auto mb-4 text-center font-light text-md sm:text-lg">
            Введите новый пароль для входа в&nbsp;систему.
        </div>

        <Input class="mb-4" type="password" new-password label="Новый пароль" v-model:value="password" />

        <div class="text-red text-sm mb-4">
            Пароль должен быть более 8&nbsp;символов, включать прописные буквы,
            содержать цифры
        </div>

        <Button class="w-full m-auto block" @click="$emit('submitted')">
            Установить новый пароль
        </Button>
    </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '../Button.vue'
import Input from '../Form/Input.vue'
import Modal from './Modal.vue'

export interface Emits {
    (e: 'submitted'): void
}

defineEmits<Emits>()

const password = ref<string>('')
</script>
