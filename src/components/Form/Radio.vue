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
            class="pl-10 flex cursor-pointer"
            :class="pseudoElements"
            :for="id"
        >
            {{ label }}
        </label>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { nanoid } from 'nanoid'

export interface RadioCardProps {
    label: string
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
        'before:w-6 before:h-6 before:border before:border-gray before:rounded-full before:absolute before:left-0 before:top-0 before:bg-white'
    const after =
        'after:w-3 after:h-3 after:absolute after:top-1.5 after:rounded-full after:left-1.5 after:bg-accent after:opacity-0 after:transition after:duration-500 peer-checked:after:opacity-100'

    return before + ' ' + after
})
</script>

<style scoped></style>
