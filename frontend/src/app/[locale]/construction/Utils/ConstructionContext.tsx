'use client'

import { createContext } from 'react'

type Category = {
    isCate: string
    setIsCate: React.Dispatch<React.SetStateAction<string>>
}

export const ConstrucContext = createContext<Category | undefined>(undefined)
