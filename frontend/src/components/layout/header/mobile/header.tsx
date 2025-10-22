/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useState } from 'react'
import Logo from '../logo'
import Link from 'next/link'
import { HeaderType, MenuItem, SubMenuItem } from '@/models/header/header'

interface Props {
    menu: MenuItem[]
    type?: HeaderType
    isScrolled?: boolean
}

const HeaderMobile: React.FC<Props> = ({ menu, isScrolled = false }) => {
    const [open, setOpen] = useState(false)
    const [openSubmenus, setOpenSubmenus] = useState<string>('')

    const toggleSubmenu = (label: string, submenu: SubMenuItem[]) => {
        if (submenu.length === 0) return
        if (openSubmenus === label) {
            setOpenSubmenus('')
            return
        }
        setOpenSubmenus(label)
    }

    return (
        <div className="relative">
            <div className="w-full nav-bar flex flex-row justify-between relative py-2 px-4">
                <div className="object-center">
                    <span
                        className={`material-symbols-outlined`}
                        onClick={() => setOpen(!open)}
                    >
                        menu
                    </span>
                </div>
                <div className="w-[6rem] relative -mt-3 -mr-3">
                    <Logo />
                </div>
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 transition-all duration-300 z-40 ${
                        open ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onClick={() => setOpen(!open)}
                />
            </div>
            <div
                className={`${
                    isScrolled
                        ? `w-full nav-bar fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out flex flex-row justify-between py-2 px-4 ${
                              isScrolled ? 'translate-y-0' : '-translate-y-full'
                          }`
                        : 'hidden'
                }`}
            >
                <div className="object-center">
                    <span
                        className={`material-symbols-outlined`}
                        onClick={() => setOpen(!open)}
                    >
                        menu
                    </span>
                </div>
                <div className="w-[6rem] relative -mt-3 -mr-3">
                    <Logo />
                </div>
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 transition-all duration-300 z-40 ${
                        open ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onClick={() => setOpen(!open)}
                />
            </div>

            <nav
                className={`fixed top-0 left-0 w-80 max-w-full h-full bg-[#D1C7BC] shadow-xl transition-transform duration-300 z-40 ${
                    open ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex flex-col items-start p-3 gap-10">
                    <span
                        className={`material-symbols-outlined px-2`}
                        onClick={() => setOpen(!open)}
                    >
                        close
                    </span>
                    <div className="flex flex-col w-full px-3 gap-3">
                        {menu?.map((o: MenuItem, i: number) => (
                            <div className="relative" key={i}>
                                <div
                                    className={`text-lg text-[#714E39] font-bold tracking-wider uppercase`}
                                >
                                    {o.submenu.length > 0 ? (
                                        <div
                                            className="flex flex-row justify-between items-center transform"
                                            onClick={() =>
                                                toggleSubmenu(
                                                    o.title,
                                                    o.submenu
                                                )
                                            }
                                        >
                                            <p>{o.title}</p>
                                            <p
                                                className={`material-symbols-outlined transition duration-300 ease-in-out ${
                                                    openSubmenus === o.title
                                                        ? 'rotate-180'
                                                        : ''
                                                }`}
                                            >
                                                keyboard_arrow_down
                                            </p>
                                        </div>
                                    ) : (
                                        <Link
                                            href={o.path}
                                            onClick={() => setOpen(!open)}
                                        >
                                            {o.title}
                                        </Link>
                                    )}
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        openSubmenus === o.title
                                            ? 'max-h-[30rem] opacity-100'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <ul className="ml-4 mt-2 space-y-1 flex flex-col gap-4">
                                        {o.submenu?.map((si: SubMenuItem) => (
                                            <li key={si.title}>
                                                <Link
                                                    href={si.path}
                                                    className="block text-sm text-[#714E39] rounded-lg transition-colors duration-200 uppercase"
                                                    onClick={() =>
                                                        setOpen(!open)
                                                    }
                                                >
                                                    {si.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderMobile
