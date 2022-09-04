<template>
    <Modal class="pb-0" modalClass="max-w-none w-full rounded-b-none md:rounded-2xl md:fixed md:top-0 left-0 right-0 mb-0 md:mb-auto bottom-0 z-50 h-fit" @close="$emit('close')">
        <div class="text-2xl sm:text-32 mb-2 sm:mb-6">
            Передать пользователя
        </div>

        <div class="font-medium text-black/60 mb-6">
            Выберите оператора, которому хотите передать пользователя:
        </div>

        <ul class="list-none mb-4">
            <PersonItem :value="person.name + key" v-model:model="selectedOperator" name="operator" :person="person"
                v-for="(person, key) in operators" :key="key" />
        </ul>

        <Input class="mb-4.5" v-model:value="comment" label="Комментарий" />

        <div class="grid grid-cols-2 gap-4">
            <Button @click="$emit('close')" light class="w-full">Отмена</Button>
            <Button :disabled="!selectedOperator" class="w-full">
                Перевести
            </Button>
        </div>
    </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Modal from './Modal.vue'
import Button from '../Button.vue'
import Input from '../Form/Input.vue'
import PersonItem from '../PersonItem.vue'

// placeholders
import { placeholderOperators } from '@/placeholderData/operators'
import type { PersonItemType } from '@/types/components.interface'

export interface Emits {
    (e: 'close'): void
}

defineEmits<Emits>()

const comment = ref<string>('')
const selectedOperator = ref<string>('')
const operators = ref<PersonItemType[]>()

operators.value = placeholderOperators
</script>

<style scoped>
</style>
