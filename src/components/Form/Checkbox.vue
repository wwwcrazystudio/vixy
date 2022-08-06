<template>
    <div class="relative">
        <input class="sr-only peer" type="checkbox" :name="name" :id="id" :value="value" :checked="value === model"
            @change="handleChange" />
        <label class="pl-10 flex cursor-pointer peer-disabled:opacity-60" :class="pseudoElements" :for="id">
            {{ label }}
        </label>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { nanoid } from 'nanoid'

export interface CheckboxProps {
    label: string
    value: string
    model: string
    name?: string
}

export interface CheckboxEmits {
    (e: 'update:model', value: string): void
}

defineProps<CheckboxProps>()
const emit = defineEmits<CheckboxEmits>()

const handleChange = (e: Event) => {
    const inputEl = e.target as HTMLInputElement
    const value = inputEl.value as string

    emit('update:model', value)
}

const id = nanoid()

const pseudoElements = computed(() => {
    const before =
        'hover:before:border-[#adadad] active:before:border-[#828282] before:w-6 before:h-6 before:border before:border-gray before:rounded-sm before:absolute before:left-0 before:top-0 before:bg-white'
    const after =
        'after:w-5 after:h-5 after:absolute after:top-0 after:bg-check after:left-0 after:opacity-0 after:transition after:duration-500 peer-checked:after:opacity-100'

    return before + ' ' + after
})
</script>

<style scoped>
</style>
