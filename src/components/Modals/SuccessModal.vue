<template>
    <div
        class="bg-white rounded-2xl p-4 sm:p-10 w-full m-auto h-auto sm:max-w-xl max-h-[calc(100vh-2rem)] max-w-[calc(100%-1rem)] overflow-auto"
    >
        <img
            class="m-auto mb-4 sm:mb-8 h-40 sm:h-auto"
            src="@/assets/img/successModal.svg"
            alt=""
        />

        <div
            class="mx-auto text-2xl sm:text-32 mb-2 sm:mb-6 font-medium text-center"
        >
            {{ heading }}
        </div>

        <div class="mx-auto mb-6 text-center font-light text-md sm:text-lg">
            {{ subheading }}
        </div>

        <Button class="m-auto w-full block">{{ btnText }}</Button>
    </div>
</template>

<script setup lang="ts">
import Button from '../Button.vue'

export interface Props {
    heading: string
    subheading: string
    btnText: string
}

defineProps<Props>()
</script>
