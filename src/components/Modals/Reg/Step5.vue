<template>
    <div>
        <h1 class="text-2xl mb-4">Chat created! 🎉</h1>
        <div class="mb-6 font-light">
            <p class="mb-4">
                <b>
                    All you have to&nbsp;do&nbsp;now is&nbsp;place the code on&nbsp;your website and
                    you&rsquo;re ready to&nbsp;go!
                </b>
            </p>
            <p class="mb-4">
                ‍💻 If&nbsp;you have trouble doing this yourself&nbsp;&mdash; send the code to
                your website developer.
                <a class="text-accent underline" href=""> See instructions </a>
                and <a class="text-accent underline" href="">FAQ.</a>
            </p>
            <p class="mb-4">
                🆘 Or,
                <a href="" class="text-accent underline">
                    ask for a&nbsp;help on&nbsp;our website,
                </a>
                we&nbsp;will help you to&nbsp;connect&nbsp;it.
            </p>

            <p class="mb-4">
                🤳 All the settings and the management of&nbsp;your Live-chat happens
                here in&nbsp;this messenger. So&nbsp;you won&rsquo;t need to&nbsp;use any additional
                applications.
            </p>
        </div>
        <Code />
        <div class="grid grid-cols-2 gap-4">
            <Button class="w-full" light @click="$emit('onStepBack')">
                Назад
            </Button>
            <Button class="w-full" @click="$emit('finish')"> Завершить </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '../../Button.vue'
import Code from '../../Code.vue'

export interface Emits {
    (e: 'finish'): void
    (e: 'onStepBack'): void
}
defineEmits<Emits>()
</script>

<style scoped>
</style>
