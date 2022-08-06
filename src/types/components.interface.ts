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
    }
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