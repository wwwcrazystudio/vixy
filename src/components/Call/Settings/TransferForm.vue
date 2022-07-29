<template>
    <Modal class="h-fit" @close="$emit('close')">
        <div class="text-2xl sm:text-32 mb-2 sm:mb-6">
            Передать пользователя
        </div>

        <div class="font-medium text-black/60 mb-6">
            Выберите оператора, которому хотите передать пользователя:
        </div>

        <ul class="list-none mb-4">
            <PersonItem
                value="1"
                v-model:model="selectedOperator"
                name="operator"
                :person="person"
                v-for="(person, key) in persons"
                :key="key"
            />
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
import Modal from '../../Modals/Modal.vue'
import Button from '../../Button.vue'
import Input from '../../Form/Input.vue'
import PersonItem from '../../PersonItem.vue'

// placeholders
import person from '@/assets/placeholder/person.jpg'

export interface Emits {
    (e: 'close'): void
}

const persons = [
    {
        img: person,
        online: true,
        name: 'Ангелина Сальникова',
        tel: '8 984 590-56-43',
    },
    {
        img: person,
        online: true,
        name: 'Мирослава Драговоз',
        tel: '8 984 590-56-43',
    },
    {
        img: person,
        online: false,
        name: 'Евгений Иванов',
        tel: '8 984 590-56-43',
    },
    {
        img: person,
        online: false,
        name: 'Константин Абдулхалилрахманов',
        tel: '8 984 590-56-43',
    },
]

defineEmits<Emits>()

const comment = ref<string>('')
const selectedOperator = ref<string>('')
</script>

<style scoped></style>
