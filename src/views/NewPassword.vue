<template>
    <div class="flex items-center justify-center h-screen">
        <HeaderSimple class="absolute left-0 top-0 right-0 z-30" />
        <NewPasswordModal
            v-if="!showSuccessModal"
            @submitted="showSuccessModal = true"
        />
        <SuccessModal
            heading="Пароль успешно изменен"
            subheading="Ваш пароль успешно изменен. Вернитесь на&nbsp;главную страницу и&nbsp;войдите с&nbsp;помощью нового пароля."
            btn-text="Войти в Re:meet"
            v-show="showSuccessModal"
            hideCloseBtn
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NewPasswordModal from '../components/Modals/NewPasswordModal.vue'
import SuccessModal from '../components/Modals/SuccessModal.vue'
import HeaderSimple from '../components/HeaderSimple.vue'

const showSuccessModal = ref<boolean>(false)
</script>
