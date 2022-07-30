<template>
    <header class="px-2 py-4 sm:p-4 bg-white border-b border-b-gray">
        <div class="flex items-center max-w-[1220px] m-auto">
            <div class="text-2xl md:text-32 font-black">Re:meet</div>
            <div class="flex ml-auto">
                <Button transparent>Войти</Button>
                <Button class="ml-2">Присоединиться</Button>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import Button from './Button.vue'
</script>
