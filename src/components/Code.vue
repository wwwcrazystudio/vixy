<template>
    <code class="relative block text-sm mb-6 p-6 pt-12 md:pt-6 md:pb-12 md:pl-14 bg-[#011627] rounded-lg shadow-md">
            <button
                @click="copyCode"
                class="absolute right-4 top-4 rounded-sm font-sans font-medium text-xs p-2 text-white bg-white/20"
            >
                {{ !copied ? 'Скопировать' : 'Скопировано' }}
            </button>
            <span
                class="absolute hidden md:flex flex-col leading-normal left-6 top-5 text-[#1F385C]"
            >
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
            </span>
            <span ref="code">
                <span class="text-[#ADDB67]">.about </span>
                <span class="text-white opacity-75">{</span>
                <span class="pl-8 block border border-white-500/15">
                    <span class="text-[#637777]">/* basic info 🡣 */</span>
                    <span class="block">
                        <span class="text-[#80CAC3]">name:</span>
                        <span class="text-[#C591E8] ml-5">tovi;</span>
                    </span>
                    <span class="block">
                        <span class="text-[#80CAC3]">superpower:</span>
                        <span class="text-[#C591E8] ml-5">
                            learning-new-things, design-system;
                        </span>
                    </span>
                    <span class="block">
                        <span class="text-[#80CAC3]">weakness:</span>
                        <span class="text-[#C591E8] ml-5">visual-design;</span>
                    </span>
                    <span class="block">
                        <span class="text-[#80CAC3]">guilty-pleasures:</span
                        ><span class="text-[#C591E8] ml-5">
                            minecraft, age-of-empires;</span
                        >
                    </span>
                    <span class="block">
                        <span class="text-[#80CAC3]">personality:</span>
                        <span class="text-[#C591E8] ml-5"> introvert; </span>
                    </span>
                </span>
                <span class="text-white opacity-75">}</span>
            </span>
        </code>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const code = ref<HTMLElement>()

const copied = ref<boolean>(false)

const copyCode = async () => {
    const codeWrap = code.value
    const text = codeWrap?.innerText
    if (text) {
        await navigator.clipboard.writeText(text)

        copied.value = true

        setTimeout(() => {
            copied.value = false
        }, 2000)
    }
}
</script>