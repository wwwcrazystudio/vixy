<template>
    <Modal :hideCloseBtn="hideCloseBtn">
        <img class="m-auto mb-4 sm:mb-8 h-40 sm:h-auto" src="@/assets/img/successModal.svg" alt="" />

        <div class="mx-auto text-2xl sm:text-32 mb-2 sm:mb-6 font-medium text-center" v-html="heading">

        </div>

        <div class="mx-auto mb-6 text-center font-light text-md sm:text-lg" v-html="subheading">

        </div>

        <Button class="m-auto w-full block">{{ btnText }}</Button>
    </Modal>
</template>

<script setup lang="ts">
import Button from '../Button.vue'
import Modal from './Modal.vue'

export interface Props {
    heading: string
    subheading: string
    btnText: string
    hideCloseBtn?: boolean
}

defineProps<Props>()
</script>
