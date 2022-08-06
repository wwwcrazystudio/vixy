export interface VideoItemType {
    id: string
    title: string
    duration: string
    img: string
    removed: boolean
}

export interface FileItemType {
    file: File
    description: string
    url: string
}

export interface HistoryItemType {
    id?: string
    content?: string
    date?: string
    isOperatorMessage?: boolean
    isNotification?: boolean
    isBlackListNotification?: boolean,
    unreaded?: boolean
    call?: {
        type: string
        duration: string
    }
    file?: FileItemType
}

export interface ContactItemType {
    id: string
    img?: string
    name: string
    history: Array<HistoryItemType>
    color?: {
        text: string
        bg: string
    } | string
    operator: {
        img: string
        name: string
    }
    url: string
    excerpt: string
}

export interface ChatAdminType {
    name: string
    img: string
    job: string
}

export interface SettingMenuItemType {
    icon: string
    title: string
    url: string
}

export interface GroupItemType {
    icon: string
    title: string
    url: string
}

export interface BannerType {
    img?: string
    title: string
    price: string
    discount: string
}

export interface PersonItemType {
    name: string
    online: boolean
    img: string
    tel: string
}

export interface VideoChatMessageType {
    unreaded?: boolean
    author?: string
    date: string
    content: string
}

export interface SelectOption {
    label: string
    value: string
}