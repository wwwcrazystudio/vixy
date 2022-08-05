<template>
    <div
        class="grid place-content-center rounded-full font-bold"
        :style="itemColor"
    >
        {{ shortname }}
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface IconProps {
    color: {
        bg: string
        text: string
    }
    name: string
}

const props = defineProps<IconProps>()

const shortname = computed(() => {
    const { name } = props
    const letters = name
        .split(' ')
        .map((el) => el.substring(0, 1))
        .join('')

    return letters
})

const itemColor = computed(() => {
    const { color } = props
    return {
        background: color.bg || 'transparent',
        color: color.text || '#000',
    }
})
</script>
