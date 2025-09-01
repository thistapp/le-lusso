'use client'

import { createContext } from 'react'

type Category = {
    isCate: string
    setIsCate: React.Dispatch<React.SetStateAction<string>>
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const PortContext = createContext<Category | undefined>(undefined)
