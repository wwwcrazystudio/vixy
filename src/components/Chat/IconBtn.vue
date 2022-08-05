<template>
    <button
        class="bg-[#f4f4f4] w-10 h-10 rounded-full grid place-content-center"
        @click="$emit('click')"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
export interface Emits {
    (e: 'click'): void
}

defineEmits<Emits>()
</script>

<style scoped></style>
