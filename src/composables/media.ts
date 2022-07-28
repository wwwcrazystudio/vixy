import { onMounted, ref } from 'vue'

export const useMobileDetection = () => {
    const matches = ref<boolean>(false)

    const update = () => {
        console.log('tet')
        console.log(window.matchMedia('(max-width: 768px)').matches)
        matches.value = window.matchMedia('(max-width: 768px)').matches
    }

    onMounted(() => window.addEventListener('resize', update))

    return matches.value
}
