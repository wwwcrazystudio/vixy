<template>
    <div class="grow shrink flex">
        <div class="grow basis-[31%] xl:grow-0 p-4 shrink flex flex-col border-r border-gray"
            v-show="isTablet ? isBasePage : true">
            <div class="flex items-center mb-4">
                <div class="font-medium text-lg">Настройки чата</div>

                <IconBtn class="ml-auto" @click="$router.push('/chat/')">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                            <path
                                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                                fill="#0D0D0D" />
                        </g>
                    </svg>
                </IconBtn>
            </div>

            <ul class="list-none overflow-auto scrollbar -mr-2.5 pr-2.5" @touchmove.stop>
                <li v-for="setting in menu" :key="setting.url">
                    <RouterLink class="flex px-2.5 py-2 rounded-lg" :to="`/chat/general-settings/${setting.url}`"
                        active-class="bg-accent text-white" v-slot="{ isActive }">
                        {{ setting.icon }} {{ setting.title }}

                        <span class="ml-auto">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path
                                        d="M10.2929 17.7071C9.90237 17.3166 9.90237 16.6834 10.2929 16.2929L14.5858 12L10.2929 7.70711C9.90237 7.31658 9.90237 6.68342 10.2929 6.29289C10.6834 5.90237 11.3166 5.90237 11.7071 6.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L11.7071 17.7071C11.3166 18.0976 10.6834 18.0976 10.2929 17.7071Z"
                                        :fill="isActive ? 'white' : 'black'" />
                                </g>
                            </svg>
                        </span>
                    </RouterLink>
                </li>
            </ul>


        </div>
        <div class="grow basis-auto shrink flex bg-white" v-show="isTablet ? !isBasePage : true">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import IconBtn from "../../components/Chat/IconBtn.vue";
import { useMobileDetection } from '@/composables/useMobileDetection'

import type { SettingMenuItemType } from '@/types/components.interface.js';

// Placeholders
import { placeholderGeneralSettings } from "@/placeholderData/chatSettings";
import { useRoute } from "vue-router";
const { isTablet } = useMobileDetection()

const route = useRoute()

const menu = ref<SettingMenuItemType[]>()

menu.value = placeholderGeneralSettings

const isBasePage = computed(() => {
    if (route.name === 'generalsettings') return true

    return false
})
</script>