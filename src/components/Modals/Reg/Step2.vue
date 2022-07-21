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

        <button
            class="bg-accent rounded-lg p-3 w-full text-white mb-4"
            @click="$emit('onStepComplete')"
        >
            Продолжить
        </button>

        <div class="mb-4 text-center font-light w-full m-auto">
            Вы создаете новый аккаунт для example@ex.com. Если вы не хотите
            создавать новый аккаунт, вы можете войти
            <a class="text-accent underline font-normal text-sm" href="">
                с другим аккаунтом.
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Select from '../../Form/Select.vue'
import Input from '../../Form/Input.vue'

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
const scope = ref<object>()
const size = ref<object>()
</script>
