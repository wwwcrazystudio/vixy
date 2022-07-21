<template>
    <Overlay>
        <NewPasswordModal
            v-if="!showSuccessModal"
            @submitted="showSuccessModal = true"
        />
        <SuccessModal
            heading="Пароль успешно изменен"
            subheading="Ваш пароль успешно изменен. Вернитесь на главную страницу и войдите с помощью нового пароля."
            btn-text="Войти в Re:meet"
            v-else
        />
    </Overlay>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Overlay from '../components/Overlay.vue'
import NewPasswordModal from '../components/Modals/NewPasswordModal.vue'
import SuccessModal from '../components/Modals/SuccessModal.vue'

const showSuccessModal = ref<boolean>(false)
</script>
