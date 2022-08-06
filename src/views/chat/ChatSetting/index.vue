<template>
    <div class="overflow-auto scrollbar w-full p-4 md:p-8">
        <RouterLink to="/chat/settings" class="flex items-center xl:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                    <path
                        d="M13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711L9.41421 12L13.7071 16.2929C14.0976 16.6834 14.0976 17.3166 13.7071 17.7071C13.3166 18.0976 12.6834 18.0976 12.2929 17.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289Z"
                        fill="black" />
                </g>
            </svg>
            Назад
        </RouterLink>
        <div class="max-w-xl w-full mx-auto py-4 md:py-10 ">
            <div class="mb-2 text-[20px]">Name</div>
            <div class="text-sm opacity-60 mb-6">Название чата будет отображаться в виджете на вашем сайте.</div>

            <Input class="mb-6" v-model:value="name" label="Название чата" />

            <img src="@/assets/img/urlImg.jpg" class="block w-full mb-6" alt="">

            <Button class="w-full">Изменить название чата</Button>
        </div>

        <div class="max-w-xl w-full mx-auto py-4 md:py-10 ">
            <div class="mb-6 text-[20px]">Choose a language - Radiobuttons</div>

            <Radio class="pb-4 mb-4 border-b border-gray" label="🇺🇸 English" name="lang" value="us"
                v-model:model="lang" />

            <Radio class="pb-4 mb-4 border-b border-gray" label="🇧🇭 Русский" name="lang" value="ru"
                v-model:model="lang" />

            <Radio label="🇫🇰 Franch" name="lang" value="fr" v-model:model="lang" />
        </div>

        <div class="max-w-xl w-full mx-auto py-4 md:py-10 ">
            <div class="mb-6 text-[20px]">Logo</div>

            <Dropzone :files="files" @change="files = $event" />

            <div class="text-xs opacity-60">Maximum file size 512 kb. <br>
                The recommended image size is at least 80x80</div>
        </div>

        <div class="max-w-xl w-full mx-auto py-4 md:py-10 ">
            <div class="mb-6 text-[20px]">Schedule</div>

            <Radio class="pb-4 mb-4 border-b border-gray" label="Offline" name="schedule" value="Offline"
                v-model:model="schedule" />

            <Radio class="pb-4 mb-4 border-b border-gray" label="Online" name="schedule" value="Online"
                v-model:model="schedule" />

            <Radio class="mb-8" label="Schedule" name="schedule" value="Schedule" v-model:model="schedule" />

            <Button light class="w-full">Schedule settings</Button>
        </div>

        <div class="max-w-xl w-full mx-auto py-4 md:py-10 ">
            <div class="mb-6 text-[20px]">Working days</div>

            <Checkbox class="mb-4" label="Tuesday" value="Offline" v-model:model="days" />

            <Checkbox class="mb-4 " label="Tuesday" value="Online" v-model:model="days" />

            <Checkbox label="Schedule" value="Wednesday" v-model:model="days" />
        </div>

        <div class="max-w-xl w-full mx-auto py-4 md:py-10 ">
            <div class="mb-6 text-[20px]">Invite for Telegram</div>

            <div class="py-10">

            </div>

            <div class="flex mb-6">
                <div class="text-xs opacity-60">Valid 24 hours</div>

                <button class="underline text-xs ml-auto text-accent">Copy link</button>

            </div>

            <div class="border border-gray p-4 rounded-lg">
                <div class="mb-2">Section title here. Hint or additional description.</div>
                <div class="text-sm opacity-60">Zoom uses cookies and similar technologies as strictly necessary to make
                    our site work. We and our
                    partners would also like to set additional cookies to analyze your use of our site, to personalize
                    and enhance your visit to our site and to show you more relevant content and advertising. These will
                    be set only if you accept.</div>
            </div>
        </div>

        <div class="max-w-xl w-full mx-auto py-4 md:py-10 ">
            <div class="mb-6 text-[20px]">Code to insert into the site</div>

            <Code />

        </div>


    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Input from "../../../components/Form/Input.vue";
import Button from "../../../components/Button.vue";
import Radio from "../../../components/Form/Radio.vue";
import Dropzone from "../../../components/Form/Dropzone.vue";
import Checkbox from "../../../components/Form/Checkbox.vue";
import Code from "../../../components/Code.vue";

const name = ref<string>('')
const lang = ref<string>('')
const files = ref<FileList>()
const schedule = ref<string>('')
const days = ref<string>('')
</script>