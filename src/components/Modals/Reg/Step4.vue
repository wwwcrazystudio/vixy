<template>
    <div>
        <h1 class="text-2xl w-5/6 mb-2">
            Отлично! Давайте подключим Ваш веб-сайт
        </h1>
        <div class="mb-6 font-light">
            Обслуживайте несколько чатов на&nbsp;разных веб-сайтах в&nbsp;рамках одной
            системы.
        </div>

        <div class="text-xl font-medium mb-4" v-html="stepTitle">
        </div>

        <div v-show="step === 1">
            <Input class="mb-4" label="Введите название сайта" v-model:value="url" />
            <picture class="block mb-6">
                <img class="rounded-lg" :src="urlImg" alt="" />
            </picture>
        </div>

        <div v-show="step === 2">
            <Input class="mb-1" label="Добавьте описание " v-model:value="description" />
            <div class="mb-4 font-medium text-xs opacity-60">
                Максимум 120 символов
            </div>
            <picture class="block mb-6">
                <img class="rounded-lg" :src="descrImg" alt="" />
            </picture>
        </div>

        <div v-show="step === 3">
            <Input class="mb-1" label="Добавьте приветствие " v-model:value="greetings" />
            <div class="mb-4 font-medium text-xs opacity-60">
                Максимум 120 символов
            </div>
            <picture class="block mb-6">
                <img class="rounded-lg" :src="greetingImg" alt="" />
            </picture>
        </div>

        <div v-show="step === 4">
            <Radio class="pb-4 mb-4 border-b border-gray" label="🇺🇸 English" name="lang" value="us"
                v-model:model="lang" />

            <Radio class="pb-4 mb-4 border-b border-gray" label="🇧🇭 Русский" name="lang" value="ru"
                v-model:model="lang" />

            <Radio class="mb-6" label="🇫🇰 Franch" name="lang" value="fr" v-model:model="lang" />
        </div>

        <div class="grid grid-cols-2 gap-4">
            <Button class="w-full" light @click="step > 1 ? (step -= 1) : $emit('onStepBack')">Назад</Button>
            <Button class="w-full" @click="step < 4 ? (step += 1) : $emit('onStepComplete')">
                Следующий шаг
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Input from '../../Form/Input.vue'
import Button from '../../Button.vue'
import Radio from '../../Form/Radio.vue'

// imgs
import urlImg from '@/assets/img/urlImg.jpg'
import descrImg from '@/assets/img/descrImg.jpg'
import greetingImg from '@/assets/img/greetingImg.jpg'

export interface Emits {
    (e: 'onStepComplete'): void
    (e: 'onStepBack'): void
}
defineEmits<Emits>()

const step = ref<number>(1)

const url = ref<string>('')
const description = ref<string>('')
const greetings = ref<string>('')
const lang = ref<string>('')

const stepTitle = computed(() => {
    switch (step.value) {
        case 1:
            return 'Введите название. Шаг 1&nbsp;из&nbsp;4.'
        case 2:
            return 'Добавьте описание. Шаг 2&nbsp;из&nbsp;4.'
        case 3:
            return 'Добавьте приветствие. Шаг 3&nbsp;из&nbsp;4.'
        case 4:
            return 'Выберите язык. Шаг 4&nbsp;из&nbsp;4.'
        default:
            return ''
    }
})
</script>
