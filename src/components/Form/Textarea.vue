<template>
    <div>
        <div class="relative">
            <label
                class="absolute pointer-events-none h-fit m-auto opacity-60 left-3 top-3 z-10"
                :class="value.length && 'opacity-0'"
                :for="id"
            >
                {{ label }}
            </label>
            <textarea
                :id="id"
                class="rounded-lg border p-3 w-full h-60 border-gray focus:border-accent hover:border-black/20 disabled:opacity-60 transition appearance-none"
                :class="error && 'border-red'"
                :value="value"
                @input="handleInput"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { nanoid } from 'nanoid'

export interface TextareaProps {
    label: string
    value: string
}

export interface TextareaEmits {
    (e: 'update:value', value: string): void
}

defineProps<TextareaProps>()
const emit = defineEmits<TextareaEmits>()

const error = ref<boolean>(false)
const id = nanoid()

const handleInput = (e: Event) => {
    const inputEl = e.target as HTMLInputElement
    emit('update:value', inputEl.value)
}
</script>

<style scoped></style>
