import { onMounted, onUnmounted, ref } from 'vue'

export const useMobileDetection = () => {
    const isMobile = ref<boolean>()
    const isTablet = ref<boolean>()

    const update = () => {
        isMobile.value = window.matchMedia('(max-width: 768px)').matches
        isTablet.value = window.matchMedia('(max-width: 1024px)').matches
    }

    onMounted(() => {
        update()
        window.addEventListener('resize', update)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', update)
    })

    return { isMobile, isTablet }
}
