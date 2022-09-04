<template>
    <div>
        <Input class="mb-4" label="Имя и фамилия" v-model:value="name" />

        <Input class="mb-4" label="Название компании" v-model:value="company" />

        <Select
            class="mb-4"
            label="Выберите сферу деятельности"
            :options="scopeOptions"
            v-model:value="scope"
        />

        <Select
            class="mb-6"
            label="Размер компании"
            :options="sizeOptions"
            v-model:value="size"
        />

        <Button
            class="bg-accent rounded-lg p-3 w-full text-white mb-4"
            @click="$emit('onStepComplete')"
        >
            Продолжить
        </Button>

        <div class="mb-4 text-center font-light w-full m-auto">
           Вы&nbsp;создаете новый аккаунт для example@ex.com. Если вы&nbsp;не&nbsp;хотите
создавать новый аккаунт, вы&nbsp;можете войти
            <a class="text-accent underline font-normal text-sm" href="">
                с&nbsp;другим аккаунтом.
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Select from '../../Form/Select.vue'
import Input from '../../Form/Input.vue'
import Button from '../../Button.vue'

export interface Option {
    label: string
    value: string
}

export interface Emits {
    (e: 'onStepComplete'): void
}

const scopeOptions = [
    {
        label: 'Продажа техники',
        value: '1',
    },
    {
        label: 'Продажа не техники',
        value: '2',
    },
]

const sizeOptions = [
    {
        label: '0-10',
        value: '1',
    },
    {
        label: '10-20',
        value: '2',
    },
]

defineEmits<Emits>()

const name = ref<string>('')
const company = ref<string>('')
const scope = ref<Option>()
const size = ref<Option>()
</script>
