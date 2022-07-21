<template>
    <div
        class="bg-white rounded-2xl p-4 sm:p-8 w-full m-auto h-auto max-h-[calc(100vh-2rem)] max-w-[calc(100%-1rem)] overflow-auto"
        :class="widthByStep"
    >
        <h1
            class="text-2xl sm:text-32 mb-2 sm:mb-6 text-center"
            v-if="currentStep < 4"
        >
            {{ heading }}
        </h1>
        <div class="mb-4 text-center font-light" v-if="currentStep < 4">
            {{ subheading }}
        </div>
        <component
            :is="Step"
            :key="currentStep"
            @onStepComplete="currentStep += 1"
            @onStepBack="currentStep -= 1"
            @finish="$emit('finish')"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Step1 from './Reg/Step1.vue'
import Step2 from './Reg/Step2.vue'
import Step3 from './Reg/Step3.vue'
import Step4 from './Reg/Step4.vue'
import Step5 from './Reg/Step5.vue'

export interface Emits {
    (e: 'finish'): void
}
defineEmits<Emits>()

const currentStep = ref<number>(1)

const widthByStep = computed(() => {
    if (currentStep.value === 3) {
        return 'lg:max-w-5xl'
    }

    if (currentStep.value === 4) {
        return 'sm:max-w-md'
    }

    return 'sm:max-w-xl'
})

const Step = computed(() => {
    switch (currentStep.value) {
        case 1:
            return Step1
        case 2:
            return Step2
        case 3:
            return Step3
        case 4:
            return Step4
        case 5:
            return Step5
        default:
            return Step1
    }
})

const heading = computed(() => {
    switch (currentStep.value) {
        case 1:
            return 'Присоединиться к Re:meet'
        case 2:
            return 'Добро пожаловать в Re:meet'
        case 3:
            return 'Как вы планируете использовать Re:meet?'
        default:
            return ''
    }
})

const subheading = computed(() => {
    switch (currentStep.value) {
        case 1:
            return 'Продолжить с помощью социальных сетей'
        case 2:
            return 'Для начала, расскажите немного о себе'
        case 3:
            return 'Выберите решение, которое подходит именно Вам:'
        default:
            return ''
    }
})
</script>
