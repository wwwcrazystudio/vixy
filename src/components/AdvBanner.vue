<template>
    <div class="bg-white/60 backdrop-blur-md p-1 flex rounded items-center">
        <picture
            class="d-block mr-2 basis-12 grow-0 shrink-0"
            v-if="banner.img"
        >
            <img class="w-full" :src="banner.img" alt="" />
        </picture>
        <div
            class="shrink grow-0 text-ellipsis whitespace-nowrap overflow-hidden"
        >
            <div class="text-sm">{{ banner.title }}</div>
            <div class="text-xs">
                {{ banner.price }}
                <span
                    class="line-through opacity-40 ml-1"
                    v-if="banner.discount"
                >
                    {{ banner.discount }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
export interface BannerProps {
    banner: {
        img?: string
        title: string
        price: string
        discount: string
    }
}

defineProps<BannerProps>()
</script>
