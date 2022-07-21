<template>
    <div
        class="bg-white rounded-2xl p-4 sm:p-8 w-full m-auto h-auto sm:max-w-xl max-h-[calc(100vh-2rem)] max-w-[calc(100%-1rem)] overflow-auto"
    >
        <div
            class="mx-auto text-2xl sm:text-32 mb-2 sm:mb-6 font-medium text-center"
        >
            {{ heading }}
        </div>
        <div class="mx-auto mb-4 sm:mb-6 text-center font-light text-lg">
            {{ subheading }}
        </div>

        <template v-if="!submitted">
            <Input
                class="mb-4"
                type="email"
                label="Введите email"
                v-model:value="email"
            />
            <div class="flex">
                <Button laight class="basis-1/4 m-auto block mr-4"
                    >Назад</Button
                >
                <Button class="grow m-auto block" @click="submitted = true">
                    Выслать ссылку
                </Button>
            </div>
        </template>

        <template v-else>
            <Button class="w-4/6 m-auto block">Вернуться к входу</Button>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Button from '../Button.vue'
import Input from '../Form/Input.vue'

const email = ref<string>('')
const submitted = ref<boolean>(false)

const heading = computed(() => {
    if (submitted.value) return 'Ссылка отправлена'

    return 'Забыли пароль?'
})

const subheading = computed(() => {
    if (submitted.value)
        return 'На указанный имейл была отправлена ссылка. Измените пароль и войдите с новыми данными.'

    return 'Укажите email, на который зарегистрирован аккаунт и мы вышлем вам ссылку для изменения пароля.'
})
</script>
