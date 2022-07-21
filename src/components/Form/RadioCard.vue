<template>
    <div class="relative">
        <input
            class="sr-only peer"
            type="radio"
            :name="name"
            :id="id"
            :value="value"
            :checked="value === model"
            @change="handleChange"
        />
        <label
            class="p-4 pr-16 rounded-lg bg-darkgray block cursor-pointer border border-transparent duration-500 peer-checked:border-[#E4E4E4] peer-checked:shadow-cardshadow peer-checked:-translate-y-4"
            :class="pseudoElements"
            :for="id"
        >
            <span class="block text-2xl mb-2">{{ label }}</span>
            <span class="block text-sm mb-6">{{ subheading }}</span>

            <span
                class="block mb-2"
                :class="!advantage.active && 'opacity-40'"
                v-for="advantage in advantages"
                :key="advantage.label"
            >
                {{ advantage.label }}
            </span>

            <span class="block mt-4 text-32">
                {{ price }}
                <span class="text-sm font-medium">₽/мес.</span>
            </span>
        </label>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { nanoid } from 'nanoid'

export interface Advantage {
    label: string
    active?: boolean
}

export interface RadioCardProps {
    label: string
    subheading: string
    advantages: Array<Advantage>
    price: number
    value: string
    model: string
    name: string
}

export interface RadioCardEmits {
    (e: 'update:model', value: string): void
}

defineProps<RadioCardProps>()
const emit = defineEmits<RadioCardEmits>()

const handleChange = (e: Event) => {
    const inputEl = e.target as HTMLInputElement
    const value = inputEl.value as string

    emit('update:model', value)
}

const id = nanoid()

const pseudoElements = computed(() => {
    const before =
        'before:w-8 before:h-8 before:border before:border-gray before:rounded-full before:absolute before:right-4 before:top-4 before:bg-white'
    const after =
        'after:w-6 after:h-6 after:absolute after:top-5 after:right-5 after:bg-check after:opacity-0 after:transition after:duration-500 peer-checked:after:opacity-100'

    return before + ' ' + after
})
</script>

<style scoped></style>
