<template>
    <div>
        <div class="relative">
            <label
                class="absolute pointer-events-none h-fit m-auto opacity-60 left-3 top-0 bottom-0 z-10"
                :class="value && '!opacity-0'"
                :for="id"
            >
                {{ label }}
            </label>
            <select
                :id="id"
                class="rounded-lg border p-3 w-full border-gray focus:border-accent hover:border-black/20 disabled:opacity-60 transition appearance-none bg-white bg-[url('@/assets/icons/arrow-down.svg')] bg-no-repeat bg-[position:calc(100%-0.75rem)]"
                :class="error && 'border-red'"
                :value="value?.value"
                @input="handleChange"
            >
                <option disabled selected value style="display: none"></option>
                <option
                    v-for="option in options"
                    :key="option.label"
                    :value="option.value"
                >
                    {{ option.label }}
                </option>
            </select>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { nanoid } from 'nanoid'
import type { SelectOption } from '@/types/components.interface.js'

export interface InputProps {
    label: string
    value?: SelectOption
    options: Array<SelectOption>
}

export interface InputEmits {
    (e: 'update:value', value: SelectOption): void
}

const props = defineProps<InputProps>()
const emit = defineEmits<InputEmits>()

const error = ref<boolean>(false)

const id = nanoid()

const handleChange = (e: Event) => {
    const selectEl = e.target as HTMLSelectElement
    const value = selectEl.value as string
    const option = props.options.find((option) => option.value === value)

    if (option) emit('update:value', option)
}
</script>

<style scoped></style>
