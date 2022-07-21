<template>
    <div
        class="bg-white rounded-2xl p-4 sm:p-10 w-full m-auto h-auto max-h-[calc(100vh-2rem)] max-w-[calc(100%-1rem)] sm:max-w-xl overflow-auto"
    >
        <img
            class="m-auto mb-4 sm:mb-8 h-40 sm:h-auto"
            src="@/assets/img/helloModal.svg"
            alt=""
        />

        <div class="mx-auto mb-2 text-2xl sm:text-32 font-medium text-center">
            Привет, *Username*
        </div>

        <div class="mx-auto mb-6 text-center font-light text-md sm:text-lg">
            Рады видеть Вас снова. Для пользования сервисом необходимо завершить
            регистрацию. Это не займет много времени.
        </div>

        <Button class="w-5/6 m-auto block">Продолжить</Button>
    </div>
</template>

<script setup lang="ts">
import Button from '../Button.vue'
</script>
