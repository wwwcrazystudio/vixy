<template>
    <div
        class="p-4 bg-[#FDF4A7] rounded-lg border-2 border-black/5 max-w-[calc(100%-1rem)] md:max-w-2xl absolute z-10 right-2 bottom-2">
        <button class="absolute right-2 top-2" @click="$emit('close')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                    <path
                        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                        fill="black" />
                </g>
            </svg>
        </button>
        <div class="text-sm mb-2">
            Подтвердите регистрацию
        </div>
        <div class="text-xs font-light">
            Ранее мы&nbsp;высылали Вам письмо на&nbsp;email с&nbsp;подтверждением регистрации. Пожлауйста, подтвердите
            регистрацию &mdash;
            это поможет вам безопасно пользоваться сервисом Re:meet.
            <button class="font-medium" @click.stop="$emit('resend')">
                Выслать email с
                подтверждением повторно.
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
export interface Emits {
    (e: 'close'): void
    (e: 'resend'): void
}

defineEmits<Emits>()
</script>