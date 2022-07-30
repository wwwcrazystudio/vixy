<template>
    <Overlay>
        <RegModal @finish="showHelloModal = true" v-if="!showHelloModal" />
        <HelloModal v-show="showHelloModal" />
    </Overlay>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RegModal from '@/components/Modals/RegModal.vue'
import HelloModal from '../components/Modals/HelloModal.vue'
import Overlay from '../components/Overlay.vue'

const showHelloModal = ref<boolean>(false)
</script>

<style scoped></style>
