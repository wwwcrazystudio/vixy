<template>
    <div>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 sm:mb-6"
        >
            <RadioCard
                v-for="card in solutions"
                :key="card.value"
                :value="card.value"
                :label="card.label"
                :subheading="card.subheading"
                :advantages="card.advantages"
                :price="card.price"
                name="solution"
                v-model:model="solution"
            />
        </div>

        <div class="text-md sm:text-lg mb-6 text-center">
            Попробуйте 14 дней (240 стримов) бесплатно
        </div>

        <div class="flex flex-col sm:flex-row">
            <Button
                class="mr-auto mb-2 sm:mb-0 w-full sm:w-32"
                light
                @click="$emit('onStepBack')"
            >
                Назад
            </Button>
            <Button class="mb-2 sm:mb-0" transparent>
                Оплатить тариф сразу
            </Button>
            <Button
                class="w-full sm:w-72 sm:ml-2"
                @click="$emit('onStepComplete')"
            >
                Продолжить
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RadioCard from '../../Form/RadioCard.vue'
import Button from '../../Button.vue'

export interface Emits {
    (e: 'onStepComplete'): void
    (e: 'onStepBack'): void
}
defineEmits<Emits>()

const solutions = [
    {
        label: 'Простой',
        subheading: 'До 150 трансляций в месяц',
        advantages: [
            {
                label: 'До 3000 трансляций в месяц',
                active: true,
            },
            {
                label: 'Круглосуточная поддержка',
            },
            {
                label: 'Аналитический дешборд',
            },
            {
                label: 'CRM-интеграции',
            },
        ],
        price: 600,
        value: '1',
    },
    {
        label: 'Простой',
        subheading: 'До 200 трансляций в месяц',
        advantages: [
            {
                label: 'До 3000 трансляций в месяц',
                active: true,
            },
            {
                label: 'Круглосуточная поддержка',
                active: true,
            },
            {
                label: 'Аналитический дешборд',
            },
            {
                label: 'CRM-интеграции',
            },
        ],
        price: 1200,
        value: '2',
    },
    {
        label: 'Про+',
        subheading: 'До 1000 трансляций в месяц',
        advantages: [
            {
                label: 'До 3000 трансляций в месяц',
                active: true,
            },
            {
                label: 'Круглосуточная поддержка',
                active: true,
            },
            {
                label: 'Аналитический дешборд',
                active: true,
            },
            {
                label: 'CRM-интеграции',
                active: true,
            },
        ],
        price: 2200,
        value: '3',
    },
]

const solution = ref<string>('')
</script>
