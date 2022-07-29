import { onMounted, onUnmounted, ref } from 'vue'

export const useMobileDetection = () => {
    const isMobile = ref<boolean>()

    const update = () => {
        isMobile.value = window.matchMedia('(max-width: 768px)').matches
    }

    onMounted(() => {
        update()
        window.addEventListener('resize', update)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', update)
    })

    return { isMobile }
}
