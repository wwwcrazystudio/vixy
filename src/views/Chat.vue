<template>
    <div class="flex bg-white h-screen overflow-hidden">
        <aside class="w-[72px] border-r flex flex-col border-gray p-4">
            <ul class="list-none">
                <GroupItem v-for="(group, key) in groups" :key="key" :group="group" :active="true" class="mb-3"
                    :selected="selectedGroup === group.title" @click="selectedGroup = $event" />
                <li class="mb-3">
                    <IconBtn @click="connectSiteModal = true">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.4">
                                <path
                                    d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
                                    fill="black" />
                            </g>
                        </svg>
                    </IconBtn>
                </li>
            </ul>

            <ul class="list-none mt-auto">
                <li class="mb-3">
                    <IconBtn label="Общие настройки" @click="$router.push('/chat/general-settings')">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.4">
                                <path
                                    d="M12 4C11.4477 4 11 4.44772 11 5C11 6.69226 8.95399 7.53974 7.75738 6.34314C7.36686 5.95261 6.73369 5.95261 6.34317 6.34314C5.95265 6.73366 5.95265 7.36683 6.34317 7.75735C7.53982 8.954 6.69223 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13C6.69236 13 7.53964 15.0461 6.34311 16.2426C5.95258 16.6332 5.95258 17.2663 6.34311 17.6569C6.73363 18.0474 7.3668 18.0474 7.75732 17.6569C8.9539 16.4603 11 17.3077 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 17.3077 15.046 16.4602 16.2427 17.6568C16.6332 18.0474 17.2664 18.0474 17.6569 17.6568C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426C16.4603 15.0461 17.3077 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C17.3078 11 16.4601 8.95405 17.6568 7.75737C18.0473 7.36684 18.0473 6.73368 17.6568 6.34315C17.2663 5.95263 16.6331 5.95263 16.2426 6.34315C15.046 7.53979 13 6.69219 13 5C13 4.44772 12.5523 4 12 4ZM9.00816 4.77703C9.12224 3.2243 10.4181 2 12 2C13.5819 2 14.8778 3.2243 14.9918 4.77703C16.1704 3.75977 17.9525 3.8104 19.071 4.92894C20.1896 6.04748 20.2402 7.82955 19.2229 9.00816C20.7757 9.12221 22 10.4181 22 12C22 13.5819 20.7757 14.8778 19.223 14.9918C20.2403 16.1704 20.1896 17.9525 19.0711 19.0711C17.9525 20.1896 16.1705 20.2402 14.9918 19.2229C14.8778 20.7757 13.5819 22 12 22C10.4181 22 9.12221 20.7757 9.00816 19.2229C7.82955 20.2402 6.04745 20.1896 4.92889 19.0711C3.81034 17.9525 3.75972 16.1704 4.77702 14.9918C3.2243 14.8778 2 13.5819 2 12C2 10.4181 3.22433 9.12221 4.77709 9.00816C3.75978 7.82955 3.81041 6.04747 4.92896 4.92892C6.0475 3.81038 7.82955 3.75975 9.00816 4.77703Z"
                                    fill="black" />
                                <path
                                    d="M12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10ZM9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157Z"
                                    fill="black" />
                            </g>
                        </svg>
                    </IconBtn>
                </li>

                <li>
                    <IconBtn>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.4">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M11 20C11 19.4477 10.5523 19 10 19H5V5H10C10.5523 5 11 4.55228 11 4C11 3.44771 10.5523 3 10 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H10C10.5523 21 11 20.5523 11 20Z"
                                    fill="black" />
                                <path
                                    d="M21.7136 12.7005C21.8063 12.6062 21.8764 12.498 21.9241 12.3828C21.9727 12.2657 21.9996 12.1375 22 12.003L22 12L22 11.997C21.9992 11.7421 21.9016 11.4874 21.7071 11.2929L17.7071 7.29289C17.3166 6.90237 16.6834 6.90237 16.2929 7.29289C15.9024 7.68342 15.9024 8.31658 16.2929 8.70711L18.5858 11H9C8.44771 11 8 11.4477 8 12C8 12.5523 8.44771 13 9 13H18.5858L16.2929 15.2929C15.9024 15.6834 15.9024 16.3166 16.2929 16.7071C16.6834 17.0976 17.3166 17.0976 17.7071 16.7071L21.7064 12.7078L21.7136 12.7005Z"
                                    fill="black" />
                            </g>
                        </svg>
                    </IconBtn>
                </li>
            </ul>
        </aside>
        <div class="grow shrink flex" v-if="isBaseChat">
            <div class="basis-[31%] grow-0 shrink flex flex-col border-r border-gray">
                <div class="px-4 py-2 flex border-b border-gray">
                    <div class="pl-3">
                        <div
                            class="text-sm relative before:w-1.5 before:h-1.5 before:absolute before:-left-3 before:top-0 before:bottom-0 before:m-auto before:rounded-full before:bg-green">
                            My business
                        </div>
                        <div class="text-xs opacity-60">
                            The best chat in the world!
                        </div>
                    </div>

                    <div class="ml-auto flex">
                        <IconBtn class="ml-2" @click="$router.push('/chat/analytics')">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path
                                        d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM19 5H5V19H19V5ZM12 7C12.5523 7 13 7.44772 13 8V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V8C11 7.44772 11.4477 7 12 7ZM16 9C16.5523 9 17 9.44772 17 10V16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16V10C15 9.44772 15.4477 9 16 9ZM8 11C8.55228 11 9 11.4477 9 12V16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16V12C7 11.4477 7.44772 11 8 11Z"
                                        fill="black" />
                                </g>
                            </svg>
                        </IconBtn>
                        <IconBtn class="ml-2" label="Настройки чата" @click="$router.push('/chat/settings')">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2 5.77778C2 4.79594 2.80589 4 3.8 4H18.2C19.1941 4 20 4.79594 20 5.77778V12.3414C19.4341 12.1414 18.8293 12.0239 18.2 12.0033V5.77778H3.8V15.5556H8.3C8.53869 15.5556 8.76761 15.6492 8.9364 15.8159L11 17.854L12.1337 16.7343C12.0461 17.1423 12 17.5658 12 18C12 18.4292 12.0451 18.8478 12.1307 19.2514L11.6364 19.7397C11.2849 20.0868 10.7151 20.0868 10.3636 19.7397L7.92721 17.3333H3.8C2.80589 17.3333 2 16.5374 2 15.5556V5.77778ZM5.6 8.88889C5.6 8.39797 6.00294 8 6.5 8H15.5C15.9971 8 16.4 8.39797 16.4 8.88889C16.4 9.37981 15.9971 9.77778 15.5 9.77778H6.5C6.00294 9.77778 5.6 9.37981 5.6 8.88889ZM5.6 12.4444C5.6 11.9535 6.00294 11.5556 6.5 11.5556H11.9C12.3971 11.5556 12.8 11.9535 12.8 12.4444C12.8 12.9354 12.3971 13.3333 11.9 13.3333H6.5C6.00294 13.3333 5.6 12.9354 5.6 12.4444ZM16.8033 15.1108C16.8489 14.4897 17.3673 14 18 14C18.6327 14 19.1511 14.4897 19.1967 15.1108C19.6682 14.7039 20.381 14.7242 20.8284 15.1716C21.2758 15.619 21.2961 16.3318 20.8892 16.8033C21.5103 16.8489 22 17.3672 22 18C22 18.6327 21.5103 19.1511 20.8892 19.1967C21.2961 19.6682 21.2759 20.381 20.8284 20.8284C20.381 21.2758 19.6682 21.2961 19.1967 20.8892C19.1511 21.5103 18.6327 22 18 22C17.3673 22 16.8489 21.5103 16.8033 20.8892C16.3318 21.2961 15.619 21.2759 15.1716 20.8284C14.7241 20.381 14.7039 19.6682 15.1108 19.1967C14.4897 19.1511 14 18.6327 14 18C14 17.3672 14.4897 16.8489 15.1108 16.8033C14.7039 16.3318 14.7242 15.619 15.1716 15.1716C15.619 14.7242 16.3318 14.7039 16.8033 15.1108ZM19.2 18C19.2 18.6627 18.6627 19.2 18 19.2C17.3373 19.2 16.8 18.6627 16.8 18C16.8 17.3373 17.3373 16.8 18 16.8C18.6627 16.8 19.2 17.3373 19.2 18Z"
                                        fill="black" />
                                </g>
                            </svg>
                        </IconBtn>
                    </div>
                </div>

                <SearchInput class="m-4 mb-2" label="Пользователи, сообщения..." v-model:value="searchQuery" />

                <ChatIcomingCall class="m-4 mt-0" :contact="coloredContacts[0]" :banner="banner" />

                <div class="flex flex-col items-center m-auto" v-if="!contacts">
                    <svg class="mb-6" width="80" height="80" viewBox="0 0 80 80" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.1">
                            <path
                                d="M6.66669 19.9997C6.66669 16.3178 9.65146 13.333 13.3334 13.333H66.6667C70.3486 13.333 73.3334 16.3178 73.3334 19.9997V56.6663C73.3334 60.3482 70.3486 63.333 66.6667 63.333H51.3807L42.357 72.3567C41.0553 73.6584 38.9447 73.6584 37.643 72.3567L28.6193 63.333H13.3334C9.65146 63.333 6.66669 60.3482 6.66669 56.6663V19.9997ZM66.6667 19.9997H13.3334V56.6663H30C30.8841 56.6663 31.7319 57.0175 32.357 57.6427L40 65.2856L47.643 57.6427C48.2681 57.0175 49.116 56.6663 50 56.6663H66.6667V19.9997Z"
                                fill="black" />
                            <path
                                d="M45 38.333C45 41.0944 42.7614 43.333 40 43.333C37.2386 43.333 35 41.0944 35 38.333C35 35.5716 37.2386 33.333 40 33.333C42.7614 33.333 45 35.5716 45 38.333Z"
                                fill="black" />
                            <path
                                d="M58.3334 38.333C58.3334 41.0944 56.0948 43.333 53.3334 43.333C50.5719 43.333 48.3334 41.0944 48.3334 38.333C48.3334 35.5716 50.5719 33.333 53.3334 33.333C56.0948 33.333 58.3334 35.5716 58.3334 38.333Z"
                                fill="black" />
                            <path
                                d="M31.6667 38.333C31.6667 41.0944 29.4281 43.333 26.6667 43.333C23.9053 43.333 21.6667 41.0944 21.6667 38.333C21.6667 35.5716 23.9053 33.333 26.6667 33.333C29.4281 33.333 31.6667 35.5716 31.6667 38.333Z"
                                fill="black" />
                        </g>
                    </svg>

                    <div class="opacity-40 w-4/6 text-center">
                        Здесь будет список Ваших диалогов
                    </div>
                </div>

                <ul class="overflow-hidden" v-else>
                    <ChatContactItem class="overflow-hidden" v-for="(contact, key) in filteredContacts" :item="contact"
                        :key="key" />
                </ul>
            </div>
            <div class="grow basis-auto shrink flex bg-darkgray">
                <Messages :contact="selectedContact" :search-query="searchQuery" v-if="selectedContact"
                    @unblacklist="unblacklistNotification = true" @upload-file="handleFileUpload" />
                <template v-else>
                    <div class="m-auto flex flex-col items-center" v-if="hasWidget">
                        <div class="w-38 h-38 mb-4 rounded-full grid place-content-center bg-white shadow-basic">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.1">
                                    <path
                                        d="M6.66675 20.0007C6.66675 16.3188 9.65152 13.334 13.3334 13.334H66.6668C70.3486 13.334 73.3334 16.3188 73.3334 20.0007V56.6673C73.3334 60.3492 70.3486 63.334 66.6668 63.334H51.3808L42.3571 72.3577C41.0554 73.6594 38.9448 73.6594 37.6431 72.3577L28.6194 63.334H13.3334C9.65152 63.334 6.66675 60.3492 6.66675 56.6673V20.0007ZM66.6668 20.0007H13.3334V56.6673H30.0001C30.8841 56.6673 31.732 57.0185 32.3571 57.6436L40.0001 65.2866L47.6431 57.6436C48.2682 57.0185 49.116 56.6673 50.0001 56.6673H66.6668V20.0007Z"
                                        fill="#0D0D0D" />
                                    <path
                                        d="M45.0001 38.334C45.0001 41.0954 42.7615 43.334 40.0001 43.334C37.2387 43.334 35.0001 41.0954 35.0001 38.334C35.0001 35.5726 37.2387 33.334 40.0001 33.334C42.7615 33.334 45.0001 35.5726 45.0001 38.334Z"
                                        fill="#0D0D0D" />
                                    <path
                                        d="M58.3334 38.334C58.3334 41.0954 56.0948 43.334 53.3334 43.334C50.572 43.334 48.3334 41.0954 48.3334 38.334C48.3334 35.5726 50.572 33.334 53.3334 33.334C56.0948 33.334 58.3334 35.5726 58.3334 38.334Z"
                                        fill="#0D0D0D" />
                                    <path
                                        d="M31.6667 38.334C31.6667 41.0954 29.4282 43.334 26.6667 43.334C23.9053 43.334 21.6667 41.0954 21.6667 38.334C21.6667 35.5726 23.9053 33.334 26.6667 33.334C29.4282 33.334 31.6667 35.5726 31.6667 38.334Z"
                                        fill="#0D0D0D" />
                                </g>
                            </svg>
                        </div>
                        <div class="opacity-40">Выберите диалог</div>
                    </div>
                    <div class="m-auto max-w-[290px] flex flex-col items-center" v-else>
                        <div class="w-38 h-38 mb-6 rounded-full grid place-content-center bg-white shadow-basic">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M71.6666 20.3327C70.6666 19.666 69.3333 19.666 68.3333 20.3327L53.6666 30.3327V23.3327C53.6666 19.666 50.6666 16.666 47 16.666H13.3333C9.66663 16.666 6.66663 19.666 6.66663 23.3327V56.666C6.66663 60.3327 9.66663 63.3327 13.3333 63.3327H46.6666C50.3333 63.3327 53.3333 60.3327 53.3333 56.666V49.666L68 59.666C68.6666 59.9994 69.3333 60.3327 70 60.3327C70.6666 60.3327 71 60.3327 71.6666 59.9994C72.6666 59.3327 73.3333 58.3327 73.3333 56.9994V23.3327C73.3333 21.9993 72.6666 20.9993 71.6666 20.3327ZM46.6666 56.666H13.3333V23.3327H46.6666V36.666V43.3327V56.666ZM66.6666 50.3327L53.3333 41.3327V38.3327L66.6666 29.3327V50.3327Z"
                                    fill="#1940F3" />
                            </svg>
                        </div>
                        <div class="mb-2">Пора принять Ваш первый звонок!</div>
                        <div class="opacity-80 text-sm text-center">
                            Если Вы еще не установили кнопку на сайт, то
                            <a class="text-accent" href="">
                                обязательно сделайте это.
                            </a>
                        </div>
                    </div>
                </template>
            </div>

            <transition name="slide">
                <ChatPopup class="absolute top-10 right-6" v-if="regNotification" @close="regNotification = false">
                    <div class="bg-salad w-6 h-6 rounded-full absolute left-4 top-4 grid place-content-center">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5.5L5.5 10L14.5 1" stroke="white" stroke-width="2" />
                        </svg>
                    </div>
                    <div class="font-bold mb-2">Регистрация завершена!</div>
                    <div class="opacity-70 font-sm">Пора начинать работу.</div>
                </ChatPopup>
            </transition>

            <transition name="slide">
                <ChatPopup class="absolute top-10 right-6" v-if="missedCallNotification"
                    @close="missedCallNotification = false">
                    <div class="bg-red w-6 h-6 rounded-full absolute left-4 top-4 grid place-content-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.66667 2C2.26667 2 2 2.26667 2 2.66667C2 8.93333 7.06667 14 13.3333 14C13.7333 14 14 13.7333 14 13.3333V11C14 10.6 13.7333 10.3333 13.3333 10.3333C12.5333 10.3333 11.6667 10.2 10.9333 9.93333C10.6667 9.86667 10.4667 9.93333 10.2667 10.0667L8.8 11.5333C6.93333 10.6 5.4 9 4.4 7.13333L5.86667 5.66667C6.06667 5.46667 6.13333 5.2 6 5C5.8 4.26667 5.66667 3.46667 5.66667 2.66667C5.66667 2.26667 5.4 2 5 2H2.66667ZM12.7333 2.33333L11.3333 3.73333L9.93333 2.33333L9 3.26667L10.4 4.66667L9 6.06667L9.93333 7L11.3333 5.6L12.7333 7L13.6667 6.06667L12.2667 4.66667L13.6667 3.26667"
                                fill="white" />
                        </svg>
                    </div>
                    <div class="font-bold mb-2">Пропущенный вызов</div>
                    <div class="opacity-70 font-sm">Безымянный Желтый Ящер</div>
                </ChatPopup>
            </transition>

            <transition name="slide">
                <ChatPopup class="absolute top-10 right-6" v-if="blacklistNotification"
                    @close="blacklistNotification = false">
                    <div class="bg-red w-6 h-6 rounded-full absolute left-4 top-4 grid place-content-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.78668 4.73022C3.08464 5.63334 2.66659 6.76818 2.66659 8.00065C2.66659 10.9462 5.0544 13.334 7.99992 13.334C9.23239 13.334 10.3672 12.9159 11.2703 12.2139L3.78668 4.73022ZM4.72949 3.78741L12.2132 11.2711C12.9152 10.368 13.3333 9.23313 13.3333 8.00065C13.3333 5.05513 10.9454 2.66732 7.99992 2.66732C6.76744 2.66732 5.63261 3.08537 4.72949 3.78741ZM1.33325 8.00065C1.33325 4.31875 4.31802 1.33398 7.99992 1.33398C11.6818 1.33398 14.6666 4.31875 14.6666 8.00065C14.6666 11.6826 11.6818 14.6673 7.99992 14.6673C4.31802 14.6673 1.33325 11.6826 1.33325 8.00065Z"
                                fill="white" />
                        </svg>
                    </div>
                    <div class="font-bold mb-2">Пользователь заблокирован</div>
                    <div class="opacity-70 font-sm">Unknown Purple Oyster</div>
                </ChatPopup>
            </transition>

            <transition name="slide">
                <ChatPopup class="absolute top-10 right-6" v-if="unblacklistNotification"
                    @close="unblacklistNotification = false">
                    <div class="bg-salad w-6 h-6 rounded-full absolute left-4 top-4 grid place-content-center">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5.5L5.5 10L14.5 1" stroke="white" stroke-width="2" />
                        </svg>
                    </div>
                    <div class="font-bold mb-2">Пользователь разблокирован</div>
                    <div class="opacity-70 font-sm">Unknown Purple Oyster</div>
                </ChatPopup>
            </transition>

            <transition name="slide">
                <ChatPopup class="absolute top-10 right-6" v-if="groupChangedNotification"
                    @close="groupChangedNotification = false">
                    <div class="bg-salad w-6 h-6 rounded-full absolute left-4 top-4 grid place-content-center">
                        <img :src="groupImg" class="w-full h-full object-cover" alt="">
                    </div>
                    <div class="font-bold mb-2">{{ selectedGroup }}</div>
                    <div class="opacity-70 font-sm">Вы сменили чат</div>
                </ChatPopup>
            </transition>
        </div>
        <RouterView v-else />

        <Overlay v-if="connectSiteModal">
            <Modal class="!max-w-md" @close="connectSiteModal = false">
                <Step4 />
            </Modal>
        </Overlay>
    </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, toRaw, watch } from 'vue'
import GroupItem from '@/components/Chat/GroupItem.vue'
import IconBtn from '@/components/Chat/IconBtn.vue'
import { unSafari } from '@/composables/unsafari'
import ChatContactItem from '@/components/Chat/ContactItem.vue'
import { useRoute, useRouter } from 'vue-router'
import ChatPopup from '../components/Chat/Popup.vue'
import ChatIcomingCall from '../components/Chat/CallNotification.vue'
import Step4 from '@/components/Modals/Reg/Step4.vue'
import Step5 from '@/components/Modals/Reg/Step5.vue'
import Modal from '@/components/Modals/Modal.vue'


import bannerimg from '@/assets/placeholder/phone.jpg'
import SearchInput from '../components/Form/SearchInput.vue'
import Messages from '../components/Chat/Messages.vue'
import type { ContactItemType, FileItemType } from '@/types/components.interface'
import { placeholderContacts } from '@/placeholderData/contacts'
import Overlay from '../components/Overlay.vue'

import groupImg from '@/assets/placeholder/group.png'

unSafari()

const route = useRoute()
const router = useRouter()

// Placeholders
const banner = {
    img: bannerimg,
    title: 'Xiaomi / Смартфон Redmi 9A 2/32Gb...',
    price: '9 093 ₽',
    discount: '15 093 ₽',
}

const groups = [
    {
        url: '',
        img: '',
        title: 'Без имени',
        description: 'The best chat in the world!',
    },
    {
        url: '',
        img: groupImg,
        title: 'New bussines',
        description: 'Here new description',
    },
]

const contacts = ref<ContactItemType[]>()

contacts.value = placeholderContacts

// Color palette
const colors = [
    {
        bg: '#1BBE49',
        text: '#fff',
    },
    {
        bg: '#DA50BB',
        text: '#fff',
    },
    {
        bg: '#F2878B',
        text: '#fff',
    },
    {
        bg: '#3694CA',
        text: '#fff',
    },
    {
        bg: '#F0AED7',
        text: '9C4D7E',
    },
    {
        bg: '#89D3FF',
        text: '#23516D',
    },
    {
        bg: '#B795FF',
        text: '#fff',
    },
    {
        bg: '#FF883C',
        text: '#fff',
    },
    {
        bg: '#CF3A3E',
        text: '#fff',
    },
    {
        bg: '#279991',
        text: '#fff',
    },
    {
        bg: '#899DA9',
        text: '9C4D7E',
    },
    {
        bg: '#91CCC8',
        text: '#2C5E5A',
    },
]

// Popup notifications
const regNotification = ref<boolean>(true)
const missedCallNotification = ref<boolean>(false)
const blacklistNotification = ref<boolean>(false)
const unblacklistNotification = ref<boolean>(false)
const groupChangedNotification = ref<boolean>(false)

const connectSiteModal = ref<boolean>(false)

// User has installed widget?
const hasWidget = ref<boolean>(true)

const selectedGroup = ref<string>('Без имени')
const searchQuery = ref<string>('')

const coloredContacts = computed(() => {
    let colorIndex = 0
    if (contacts.value) {
        return contacts.value.map((el) => {
            // Start from beginning
            if (colorIndex === colors.length - 1) {
                colorIndex = 0
            }
            // If no img - set color from palette
            if (!el.img) {
                el.color = colors[colorIndex]
                colorIndex += 1
            }

            return el
        })
    }
    return null
})

const filteredContacts = computed(() => {
    const query = searchQuery.value.toLowerCase()
    // Reset excerpt
    let contacts = coloredContacts.value?.map((el) => {
        el.excerpt = ''

        return el
    })

    if (contacts) {
        if (query) {
            // Get all matches
            contacts = contacts.filter((el) => {
                // Find by name
                if (el.name.toLowerCase().includes(query)) {
                    return true
                }
                // Find by message
                if (
                    el.history.some((el) =>
                        el.content?.toLowerCase().includes(query)
                    )
                ) {
                    return true
                }

                return false
            })

            // Generate contact for each message
            const messages: ContactItemType[] = []
            contacts.forEach((el) => {
                // Foreach message in history find matches
                const history = el.history.filter((el) => {
                    if (el.isNotification) return false
                    return el.content?.toLowerCase().includes(query)
                })

                history.forEach((historyItem) => {
                    const { content, id } = historyItem
                    const fromStart = content?.toLowerCase().indexOf(query) || 0

                    const getExcerpt = () => {
                        const maxLength = 10
                        const baseContent = content?.toLowerCase() || ''
                        let start = ''
                        let end = ''

                        start = baseContent.substring(
                            fromStart - maxLength,
                            fromStart
                        )
                        end = baseContent.substring(
                            fromStart + query.length,
                            fromStart + query.length + maxLength
                        )

                        if (start.length === maxLength) {
                            start = '...' + start
                        }

                        if (end.length === maxLength) {
                            end += '...'
                        }

                        return `${start}<b>${query}</b>${end}`
                    }

                    // Create reactive ref clone
                    const newItem = structuredClone(toRaw(el))

                    newItem.url = `${el.url}/${id}`
                    newItem.excerpt = getExcerpt()

                    messages.push(newItem)
                })
            })

            if (messages.length) contacts = messages
        }
    }

    return contacts
})

const selectedContact = computed(() => {
    const { chatId, msgId } = route.params
    if (route.name === 'messages') {
        return filteredContacts.value?.find((el) => el.url === chatId)
    }

    if (route.name === 'single-message') {
        return filteredContacts.value?.find(
            (el) => el.url === `${chatId}/${msgId}`
        )
    }

    return null
})

const isBaseChat = computed(() => {

    if (route.name === 'messages') return true
    if (route.name === 'chat') return true
    if (route.name === 'single-message') return true

    return false
})

const handleFileUpload = (e: {
    contact: string
    description: string
    file: FileItemType
}) => {
    const { contact, description, file } = e


    const contactToSend = contacts.value.find((el) => el.id === contact)

    if (contactToSend) {
        contactToSend.history.push({
            id: '100',
            file,
            date: '16:23',
            isOperatorMessage: true,
        })
    }
}

watch(
    () => searchQuery.value,
    () => {
        // return to dialogue at search reset
        nextTick(() => {
            const { msgId, chatId } = route.params
            if (!searchQuery.value && msgId && chatId)
                router.push(`/chat/${chatId}`)
        })
    }
)

watch(() => selectedGroup.value, () => {
    groupChangedNotification.value = true

    setTimeout(() => {
        groupChangedNotification.value = false
    }, 2000)
})

// Placeholder animations
onMounted(() => {
    setTimeout(() => {
        regNotification.value = false

        setTimeout(() => {
            missedCallNotification.value = true
        }, 2000)

        setTimeout(() => {
            missedCallNotification.value = false
        }, 5000)
    }, 2000)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(-300px);
}
</style>
