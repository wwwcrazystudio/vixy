<template>
    <div>
        <div class="relative">
            <label
                class="absolute pointer-events-none h-fit m-auto opacity-60 left-3 top-0 bottom-0 z-10"
                :class="value.length && 'opacity-0'"
                :for="id"
            >
                {{ label }}
            </label>
            <input
                :id="id"
                :type="inputType"
                class="rounded-lg border p-3 w-full border-gray focus:border-accent hover:border-black/20 disabled:opacity-60 transition appearance-none"
                :class="error && 'border-red'"
                :value="value"
                @input="handleInput"
            />
            <button
                v-if="type === 'password'"
                class="absolute h-fit m-auto right-3 top-0 bottom-0 z-10"
                :class="!showPassword && 'opacity-40'"
                @click="showPassword = !showPassword"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z"
                        fill="black"
                    />
                </svg>
            </button>
        </div>
        <template v-if="newPassword">
            <div class="grid grid-cols-3 gap-2 mt-4.5 mb-2">
                <div
                    class="h-1.5 bg-gray transition"
                    :class="getStrengthColor"
                ></div>
                <div
                    class="h-1.5 bg-gray transition"
                    :class="passwordStrength > 1 && getStrengthColor"
                ></div>
                <div
                    class="h-1.5 bg-gray transition"
                    :class="passwordStrength > 2 && getStrengthColor"
                ></div>
            </div>
            <div class="font-light text-sm">
                Надежность пароля:
                <b class="font-medium">{{ passwordStrengthTitle }}</b>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { nanoid } from 'nanoid'

export interface InputProps {
    label: string
    type?: string
    value: string
    newPassword?: boolean
}

export interface InputEmits {
    (e: 'update:value', value: string): void
}

const props = defineProps<InputProps>()
const emit = defineEmits<InputEmits>()

const error = ref<boolean>(false)
const showPassword = ref<boolean>(false)

const id = nanoid()

const inputType = computed(() => {
    if (!props.type) return 'text'
    if (showPassword.value) return 'text'

    return props.type
})

const passwordStrength = computed(() => {
    if (props.type !== 'password') return 0

    if (props.value.length > 3) return 3

    switch (props.value.length) {
        case 1:
            return 1
        case 2:
            return 2
        case 3:
            return 3
        default:
            return 0
    }
})

const passwordStrengthTitle = computed(() => {
    switch (passwordStrength.value) {
        case 1:
            return 'слабый'
        case 2:
            return 'удовлетворительный'
        case 3:
            return 'надежный'
        default:
            return 'слабый'
    }
})

const getStrengthColor = computed(() => {
    switch (passwordStrength.value) {
        case 1:
            return 'bg-red'
        case 2:
            return 'bg-yellow'
        case 3:
            return 'bg-green'
        default:
            return ''
    }
})

const handleInput = (e: Event) => {
    const inputEl = e.target as HTMLInputElement
    emit('update:value', inputEl.value)
}
</script>

<style scoped></style>
