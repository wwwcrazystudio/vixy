<template>
    <div class="flex">
        <div class="w-fit m-auto" v-if="!show">
            <svg
                class="mx-auto mb-6"
                width="152"
                height="69"
                viewBox="0 0 152 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="48" width="8" height="69" rx="4" fill="white" />
                <rect x="80" width="8" height="69" rx="4" fill="white" />
                <rect
                    opacity="0.5"
                    x="112"
                    y="16"
                    width="8"
                    height="37"
                    rx="4"
                    fill="white"
                />
                <rect
                    opacity="0.5"
                    x="32"
                    y="21"
                    width="8"
                    height="28"
                    rx="4"
                    fill="white"
                />
                <rect
                    opacity="0.6"
                    x="128"
                    y="12"
                    width="8"
                    height="45"
                    rx="4"
                    fill="white"
                />
                <rect
                    opacity="0.6"
                    x="16"
                    y="14"
                    width="8"
                    height="41"
                    rx="4"
                    fill="white"
                />
                <rect
                    opacity="0.3"
                    x="96"
                    y="32"
                    width="8"
                    height="6"
                    rx="3"
                    fill="white"
                />
                <rect
                    opacity="0.3"
                    y="31"
                    width="8"
                    height="8"
                    rx="4"
                    fill="white"
                />
                <rect
                    opacity="0.3"
                    x="144"
                    y="32"
                    width="8"
                    height="6"
                    rx="3"
                    fill="white"
                />
                <rect
                    opacity="0.9"
                    x="64"
                    y="4"
                    width="8"
                    height="61"
                    rx="4"
                    fill="white"
                />
            </svg>
            <div class="flex text-white" v-if="nickname">
                <span class="bg-white rounded-full w-6 h-6 mr-2">💼</span>
                {{ nickname }}
            </div>
        </div>
        <div class="flex w-full" v-show="show">
            <video
                class="object-cover object-center w-full h-full"
                :class="status === 'error' && 'blur-xl'"
                :poster="poster"
                src=""
            ></video>
            <div
                v-if="status === 'error'"
                class="bg-black/40 absolute left-0 top-0 w-full h-full"
            ></div>
        </div>
    </div>
</template>

<script setup lang="ts">
export interface VideoProps {
    show: boolean
    nickname?: string
    poster?: string
    src?: string
    status?: string
}

defineProps<VideoProps>()
</script>
