<template>
    <Modal>
        <div class="mx-auto text-2xl sm:text-32 mb-2 sm:mb-6 font-medium text-center" v-html="heading">
        </div>
        <div class="mx-auto mb-4 sm:mb-6 text-center font-light text-lg" v-html="subheading">
        </div>

        <template v-if="!submitted">
            <Input class="mb-4" type="email" label="Введите email" v-model:value="email" />
            <div class="flex">
                <Button light class="basis-1/4 m-auto block mr-4">Назад</Button>
                <Button class="grow m-auto block" @click="submitted = true">
                    Выслать ссылку
                </Button>
            </div>
        </template>

        <template v-else>
            <Button class="w-4/6 m-auto block">Вернуться к&nbsp;входу</Button>
        </template>
    </Modal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Button from '../Button.vue'
import Input from '../Form/Input.vue'
import Modal from './Modal.vue'

const email = ref<string>('')
const submitted = ref<boolean>(false)

const heading = computed(() => {
    if (submitted.value) return 'Ссылка отправлена'

    return 'Забыли пароль?'
})

const subheading = computed(() => {
    if (submitted.value)
        return 'На&nbsp;указанный имейл была отправлена ссылка. Измените пароль и&nbsp;войдите с&nbsp;новыми данными.'

    return 'Укажите email, на&nbsp;который зарегистрирован аккаунт и&nbsp;мы&nbsp;вышлем вам ссылку для изменения&nbsp;пароля.'
})
</script>
