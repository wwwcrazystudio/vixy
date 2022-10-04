<template>
    <li>
        <button class="w-6 h-6 sm:w-10 sm:h-10 rounded-full border border-gray block" :class="
            selected && `btn-outline`
        " @click="$emit('click', group)">
            <picture class="block">
                <img class="w-full h-full object-cover" :src="group.icon" :alt="group.title" />
            </picture>
        </button>
    </li>
</template>

<script setup lang="ts">
import type { GroupItemType } from '@/types/components.interface.js'

export interface Group {
    group: GroupItemType
    selected: boolean
}

export interface Emits {
    (e: 'click', value: GroupItemType): void
}

defineEmits<Emits>()
defineProps<Group>()
</script>

<style scoped>
.btn-outline {
    box-shadow: 0px 0px 0px 2px #1940F3;
}
</style>
