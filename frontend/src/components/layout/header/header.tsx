'use client'

import menu from '../../../config/menu.json'
import HeaderComponent, { HeaderType } from './component/headerComponent'
import HeaderMobile from './mobile/header'
import { useEffect, useState } from 'react'

const Header = ({}) => {
    const [showHeader, setShowHeader] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 768) {
                if (window.scrollY === 0) {
                    setShowHeader(false)
                } else if (window.scrollY > 100) {
                    setShowHeader(true)
                }
            } else {
                setShowHeader(false) // Ensure it's false on mobile
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="w-full ">
            <div className="hidden lg:block">
                <HeaderComponent type={HeaderType.DEFAULT} />
                <HeaderComponent
                    type={HeaderType.SCROLLED}
                    isScrolled={showHeader}
                />
            </div>
            <div className="block lg:hidden">
                <HeaderMobile config={menu} />
            </div>
        </div>
    )
}

export default Header
