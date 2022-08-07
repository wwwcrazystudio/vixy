<template>
    <li>
        <div class="relative p-2 pr-4 flex gap-4 items-center rounded-lg border border-gray">
            <picture class="w-14 h-12 block cursor-pointer" @click="$emit('select', item)">
                <img :src="item.img" :alt="item.title" class="rounded-sm w-full h-full" />
            </picture>
            <div>
                <div class="block font-medium text-sm cursor-pointer" @click="$emit('select', item)">
                    {{ item.title }}
                </div>
                <div class="text-xs opacity-60">{{ item.duration }}</div>
            </div>

            <button class="ml-auto" @click="$emit('remove', item)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                        <path
                            d="M7 4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V6H18.9897C18.9959 5.99994 19.0021 5.99994 19.0083 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H19.9311L19.0638 20.1425C18.989 21.1891 18.1182 22 17.0689 22H6.93112C5.88184 22 5.01096 21.1891 4.9362 20.1425L4.06888 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H4.99174C4.99795 5.99994 5.00414 5.99994 5.01032 6H7V4ZM9 6H15V4H9V6ZM6.07398 8L6.93112 20H17.0689L17.926 8H6.07398ZM10 10C10.5523 10 11 10.4477 11 11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V11C9 10.4477 9.44772 10 10 10ZM14 10C14.5523 10 15 10.4477 15 11V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V11C13 10.4477 13.4477 10 14 10Z"
                            fill="#0D0D0D" />
                    </g>
                </svg>
            </button>

            <transition name="fade">
                <div class="absolute flex justify-center items-center left-0 top-0 h-full w-full text-sm bg-white/90 sm:bg-white/30 backdrop-blur-md"
                    v-if="item.removed">
                    Видеозвонок удален.
                    <button class="text-accent" @click="$emit('restore', item)">
                        Восстановить.
                    </button>
                </div>
            </transition>
        </div>
    </li>
</template>

<script setup lang="ts">
import type { VideoItemType } from '@/types/components.interface'

export interface VideoItem {
    item: VideoItemType
}

export interface VideoItemEmits {
    (e: 'remove', value: VideoItemType): void
    (e: 'restore', value: VideoItemType): void
    (e: 'select', value: VideoItemType): void
}

defineProps<VideoItem>()
defineEmits<VideoItemEmits>()
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
