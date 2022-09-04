<template>
    <div>
        <div class="relative">
            <label
                class="absolute pointer-events-none h-fit m-auto opacity-60 left-10 top-0 bottom-0 z-10"
                :class="value.length && '!opacity-0'"
                :for="id"
            >
                {{ label }}
            </label>

            <input
                :id="id"
                type="text"
                class="rounded-lg md:text-sm p-2.5 pl-10 pr-10 w-full bg-[#F4F4F4] transition appearance-none bg-[url('@/assets/icons/magnify.svg')] bg-no-repeat bg-[0.5rem_center]"
                :value="value"
                @input="handleInput"
            />
            <button
                class="absolute h-fit m-auto right-3 top-0 bottom-0 z-10"
                @click="handleClear"
                :class="!value.length && '!opacity-0 pointer-events-none'"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g opacity="0.4">
                        <path
                            d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                            fill="black"
                        />
                    </g>
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid'

export interface SearchInputProps {
    label: string
    value: string
}

export interface SearchInputEmits {
    (e: 'update:value', value: string): void
}

const emit = defineEmits<SearchInputEmits>()
defineProps<SearchInputProps>()

const id = nanoid()

const handleInput = (e: Event) => {
    const inputEl = e.target as HTMLInputElement
    emit('update:value', inputEl.value)
}

const handleClear = () => {
    emit('update:value', '')
}
</script>

<style scoped></style>
