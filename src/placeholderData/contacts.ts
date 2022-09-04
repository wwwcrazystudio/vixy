import operatorImg from '@/assets/placeholder/person.jpg'
import type { ContactItemType } from '@/types/components.interface'

export const placeholderContacts:ContactItemType[] = [
    {
        id: '1',
        img: '',
        name: 'Безымянный Желтый Ящер',
        operator: {
            name: 'Дмитрий',
            img: operatorImg,
        },
        color: '',
        url: '123',
        excerpt: '',
        history: [
            {
                isNotification: true,
                content: 'Дмитрий взял пользователя, сегодня',
            },
            {
                id: '1',
                content: '1234',
                date: '16:23',
                isOperatorMessage: true,
            },
            {
                id: '2',
                date: '16:23',
                call: {
                    type: 'incoming',
                    duration: '14 мин.',
                },
            },
            {
                id: '3',
                date: '16:23',
                call: {
                    type: 'incoming',
                    duration: '14 мин.',
                },
            },
            {
                id: '4',
                content:
                    'Да, у нас есть еще дополнительные модули полезные для вашего бизнеса с ними вы можете',
                date: '16:23',
                isOperatorMessage: true,
            },
            {
                id: '5',
                date: '16:23',
                call: {
                    type: 'incoming',
                    duration: '14 мин.',
                },
            },
            {
                isNotification: true,
                content: 'Дмитрий передал пользователя Мирослава, сегодня',
            },
            {
                isNotification: true,
                isBlackListNotification: true,
                content:
                    'Пользователь заблокирован Дмитрием. <button class="text-accent underline">Разблокировать</button>.',
            },
        ],
    },
    {
        id: '2',
        img: '',
        name: 'Волосатый Синий Змей',
        operator: {
            name: 'Дмитрий',
            img: operatorImg,
        },
        color: '',
        url: '1234',
        excerpt: '',
        history: [
            {
                id: '6',
                content: 'Спасибо за файл, это круто. Файл мне ок.',
                date: '16:23',
                isOperatorMessage: true,
            },
            {
                id: '7',
                date: '16:23',
                call: {
                    type: 'incoming',
                    duration: '14 мин.',
                },
            },
            {
                id: '8',
                content: 'Класс! Отправила вам класс вам сообщение...',
                date: '16:23',
                isOperatorMessage: true,
            },
        ],
    },
    {
        id: '3',
        img: '',
        name: 'Безымянный Желтый Ящер',
        operator: {
            name: 'Дмитрий',
            img: operatorImg,
        },
        color: '',
        url: '12345',
        excerpt: '',
        history: [
            {
                id: '9',
                content: 'Тестовое сообщение для поиска',
                date: '16:23',
                isOperatorMessage: true,
            },
            {
                id: '10',
                date: '16:23',
                call: {
                    type: 'incoming',
                    duration: '14 мин.',
                },
                unreaded: false,
            },
            {
                id: '11',
                content: 'Спасибо, это круто. мне ок.',
                date: '16:23',
                isOperatorMessage: true,
                unreaded: true,
            },
            {
                id: '12',
                content: 'Привет! Спасибо!',
                date: '16:23',
            },
            {
                id: '13',
                content: '123',
                date: '16:23',
                isOperatorMessage: true,
            },
            {
                id: '14',
                date: '16:23',
                call: {
                    type: 'incoming',
                    duration: '14 мин.',
                },
                unreaded: false,
            },
            {
                id: '15',
                content: 'Спасибо, это круто. мне ок.',
                date: '16:23',
                isOperatorMessage: true,
                unreaded: true,
            },
            {
                id: '16',
                content: 'Привет! Спасибо!',
                date: '16:23',
            },
            {
                id: '17',
                content: '123',
                date: '16:23',
                isOperatorMessage: true,
            },
            {
                id: '18',
                date: '16:23',
                call: {
                    type: 'incoming',
                    duration: '14 мин.',
                },
                unreaded: false,
            },
            {
                id: '19',
                content: 'Спасибо, это круто. мне ок.',
                date: '16:23',
                isOperatorMessage: true,
                unreaded: true,
            },
            {
                id: '20',
                content: 'Привет! Спасибо!',
                date: '16:23',
            },
        ],
    },
      {
        id: '3',
        img: '',
        name: 'Безымянный Желтый Ящер',
        operator: {
            name: 'Дмитрий',
            img: operatorImg,
        },
        color: '',
        url: '12345',
        excerpt: '',
        history: [
            {
                id: '9',
                content: 'Тестовое сообщение для поиска',
                date: '16:23',
                isOperatorMessage: true,
            },
            {
                id: '10',
                date: '16:23',
                call: {
                    type: 'incoming',
                    duration: '14 мин.',
                },
                unreaded: false,
            },
            {
                id: '11',
                content: 'Спасибо, это круто. мне ок.',
                date: '16:23',
                isOperatorMessage: true,
                unreaded: true,
            },
            {
                id: '12',
                content: 'Привет! Спасибо!',
                date: '16:23',
            },
            {
                id: '13',
                content: '123',
                date: '16:23',
                isOperatorMessage: true,
            },
            {
                id: '14',
                date: '16:23',
                call: {
                    type: 'incoming',
                    duration: '14 мин.',
                },
                unreaded: false,
            },
            {
                id: '15',
                content: 'Спасибо, это круто. мне ок.',
                date: '16:23',
                isOperatorMessage: true,
                unreaded: true,
            },
            {
                id: '16',
                content: 'Привет! Спасибо!',
                date: '16:23',
            },
            {
                id: '17',
                content: '123',
                date: '16:23',
                isOperatorMessage: true,
            },
            {
                id: '18',
                date: '16:23',
                call: {
                    type: 'incoming',
                    duration: '14 мин.',
                },
                unreaded: false,
            },
            {
                id: '19',
                content: 'Спасибо, это круто. мне ок.',
                date: '16:23',
                isOperatorMessage: true,
                unreaded: true,
            },
            {
                id: '20',
                content: 'Привет! Спасибо!',
                date: '16:23',
            },
        ],
    },
]