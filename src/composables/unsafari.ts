import { onMounted, onUnmounted } from 'vue'

export const unSafari = () => {
    // Safari crutch
    const preventDefault = (e: Event) => {
        e.preventDefault()
    }

    onMounted(() => {
        document.body.addEventListener('touchmove', preventDefault, {
            passive: false,
        })
    })

    onUnmounted(() => {
        document.body.removeEventListener('touchmove', preventDefault)
    })
}
