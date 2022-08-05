<template>
    <li>
        <button
            class="w-10 h-10 rounded-full border border-gray block"
            :class="
                active && `outline outline-offset-2 outline-2 outline-accent`
            "
            @click="$emit('click', group.title)"
        >
            <picture class="block">
                <img
                    class="w-full h-full object-cover"
                    :src="group.img || newGroup"
                    :alt="group.title"
                />
            </picture>
        </button>
    </li>
</template>

<script setup lang="ts">
import newGroup from '@/assets/icons/newGroup.svg'

export interface Group {
    group: {
        url: string
        img?: string
        title: string
    }
    active: boolean
}

export interface Emits {
    (e: 'click', value: string): void
}

defineEmits<Emits>()
defineProps<Group>()
</script>
