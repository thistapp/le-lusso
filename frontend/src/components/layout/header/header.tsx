'use client'

import { HeaderType } from '@/models/header/header'
import menu from '../../../config/menu.json'
import HeaderComponent from './component/headerComponent'
import HeaderMobile from './mobile/header'
import { useEffect, useState } from 'react'

const Header = ({}) => {
    const [showHeader, setShowHeader] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setShowHeader(false)
            } else if (window.scrollY > 100) {
                setShowHeader(true)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="w-full ">
            <div className="hidden lg:block">
                <HeaderComponent type={HeaderType.DEFAULT} menu={menu} />
                <HeaderComponent
                    type={HeaderType.SCROLLED}
                    menu={menu}
                    isScrolled={showHeader}
                />
            </div>
            <div className="block lg:hidden">
                <HeaderMobile isScrolled={showHeader} menu={menu} />
            </div>
        </header>
    )
}

export default Header
