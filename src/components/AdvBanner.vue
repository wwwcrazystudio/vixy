<template>
    <div class="bg-white/60 backdrop-blur-md">
        <a class="flex w-full items-center rounded p-1" href="">
            <picture
                class="d-block mr-2 basis-12 grow-0 shrink-0"
                v-if="banner.img"
            >
                <img class="w-full rounded-sm" :src="banner.img" alt="" />
            </picture>
            <div class="shrink grow-0 overflow-hidden">
                <div
                    class="text-sm text-ellipsis whitespace-nowrap overflow-hidden"
                >
                    {{ banner.title }}
                </div>
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
        </a>
    </div>
</template>

<script setup lang="ts">
import type { BannerType } from '@/types/components.interface.js';

export interface BannerProps {
    banner: BannerType
}

defineProps<BannerProps>()
</script>
