<template>
    <div>
        <h1 class="text-2xl mb-4">Chat created! 🎉</h1>
        <div class="mb-6 font-light">
            <p class="mb-4">
                <b>
                    All you have to do now is place the code on your website and
                    you’re ready to go!
                </b>
            </p>
            <p class="mb-4">
                ‍💻 If you have trouble doing this yourself — send the code to
                your website developer.
                <a class="text-accent underline" href=""> See instructions </a>
                and <a class="text-accent underline" href="">FAQ.</a>
            </p>
            <p class="mb-4">
                🆘 Or,
                <a href="" class="text-accent underline">
                    ask for a help on our website,
                </a>
                we will help you to connect it.
            </p>

            <p class="mb-4">
                🤳 All the settings and the management of your Live-chat happens
                here in this messenger. So you won’t need to use any additional
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
