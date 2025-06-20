'use client'

import { createContext } from 'react'

type Category = {
    isCate: string
    setIsCate: React.Dispatch<React.SetStateAction<string>>
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    setIsGalleryIMG: React.Dispatch<React.SetStateAction<any>>
}

export const PortContext = createContext<Category | undefined>(undefined)
