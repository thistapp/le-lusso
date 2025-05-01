/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Logo from './logo'
import menu from '../../../config/menu.json'
import HeaderMobile from './mobile/header'
import Link from 'next/link'
import { useEffect } from 'react'

const Header = ({}) => {
    useEffect(() => {
        window.onscroll = function () {
            let header: any = document.querySelector('header')
            if (window.scrollY > 0) {
                header.classList.add('on-scroll')
            } else {
                header.classList.remove('on-scroll')
            }
        }
    }, [])

    return (
        <header className="w-full fixed nav-bar text-[#0E1D2F] p-2 lg:p-6 z-50">
            <div className="hidden lg:grid grid-cols-12">
                <div className="col-start-2 col-span-7 content-center">
                    <div className="w-full flex flex-wrap gap-7">
                        {menu?.map((o, i) => (
                            <div className="relative" key={i}>
                                <div
                                    className={`${
                                        o.submenu.length > 0
                                            ? 'menu-title'
                                            : 'hyper-link-header'
                                    } text-lg text-[#714E39] font-bold capitalize tracking-wider`}
                                >
                                    <Link href={o.path}>{o.title}</Link>
                                </div>
                                {o.submenu.length > 0 && (
                                    <div className="absolute -rigth-7 w-[14em] bg-[#D1C7BC] sub-menu-div px-5 py-2 gap-2 z-10 flex flex-col">
                                        {o.submenu.map((oo, ii) => (
                                            <div
                                                className="flex uppercase font-bold"
                                                key={ii}
                                            >
                                                <Link
                                                    className="hyper-link-header text-base text-[#714E39]"
                                                    href={oo.path}
                                                >
                                                    {oo.title}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-start-11 relative">
                    <Logo />
                </div>
            </div>
            <div className="grid lg:hidden grid-cols-12">
                <HeaderMobile config={menu} />
            </div>
        </header>
    )
}

export default Header
