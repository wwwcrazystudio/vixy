<template>
    <li>
        <input
            type="radio"
            class="sr-only peer"
            :name="name"
            :id="id"
            :value="value"
            :checked="value === model"
            @change="handleChange"
        />
        <label
            :for="id"
            class="relative p-2 rounded-md flex gap-4 items-center hover:bg-[#F4F4F4] peer-checked:bg-accent peer-checked:text-white after:transition after:bg-checkWhite after:opacity-0 after:absolute after:right-5 after:top-0 after:bottom-0 after:m-auto after:w-5 after:w-5 after:bg-no-repeat after:bg-center transition cursor-pointer duration-300 peer-checked:after:opacity-100"
        >
            <picture
                class="w-11 h-11 relative rounded-full block border border-gray before:absolute before:rounded-full before:-right-0.5 before:-bottom-0.5 before:w-3 before:h-3 before:bg-gray before:border-2 before:border-white"
                :class="person.online && 'before:bg-green'"
            >
                <img
                    :src="person.img"
                    :alt="person.name"
                    class="rounded-full w-full h-full"
                />
            </picture>
            <span>
                <span class="block">{{ person.name }}</span>
                <span class="text-sm opacity-60">{{ person.tel }}</span>
            </span>
        </label>
    </li>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid'

export interface PersonItemProps {
    value: string
    model: string
    name: string
    person: {
        name: string
        online: boolean
        img: string
        tel: string
    }
}

export interface PersonItemEmits {
    (e: 'update:model', value: string): void
}

defineProps<PersonItemProps>()
const emit = defineEmits<PersonItemEmits>()

const handleChange = (e: Event) => {
    const inputEl = e.target as HTMLInputElement
    const value = inputEl.value as string

    emit('update:model', value)
}

const id = nanoid()
</script>
