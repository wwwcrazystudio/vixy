<template>
    <Modal>
        <div>
            <h1 class="text-2xl sm:text-32 mb-2 sm:mb-6 text-center">
                Войти в Re:meet
            </h1>
            <div class="mb-4 text-center font-light">
                Продолжить с помощью социальных сетей
            </div>
            <SocialsLogin class="mb-4 sm:mb-6" />

            <div class="w-5/6 sm:w-full mx-auto mb-4 text-center">
                или создайте новый аккаунт с использованием e-mail
            </div>

            <Input
                class="mb-4"
                type="email"
                label="Введите email"
                v-model:value="email"
            />

            <Input
                v-if="emailChecked"
                class="mb-4"
                type="password"
                label="Введите пар"
                v-model:value="password"
            />

            <button
                class="bg-accent rounded-lg p-3 w-full text-white mb-4"
                @click="handleClick"
            >
                {{ btnText }}
            </button>

            <div class="mb-4 text-center font-light w-5/6 m-auto">
                Нажимая на кнопку, вы даете согласие на
                <a class="text-accent underline font-normal text-sm" href="">
                    обработку своих персональных данных.
                </a>
            </div>

            <div class="pt-6 mt-6 border-t border-gray text-center">
                У вас еще нет аккаунта?
                <RouterLink class="text-accent undeline" to="/reg">
                    Зарегистрироваться
                </RouterLink>
            </div>
        </div>
    </Modal>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import Input from '../Form/Input.vue'
import SocialsLogin from '../SocialsLogin.vue'
import Modal from './Modal.vue'

const email = ref<string>('')
const password = ref<string>('')

const emailChecked = ref<boolean>(false)

const handleClick = () => {
    // Emit event if email is already checked
    if (emailChecked.value) {
        return
    }

    // Show password field
    emailChecked.value = true
}

const btnText = computed(() => {
    if (emailChecked.value) return 'Войти в Re:meet'

    return 'Продолжить с email'
})
</script>
