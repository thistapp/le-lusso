/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import Logo from '../logo'
import Link from 'next/link'

interface SubMenuItem {
    path: string
    title: string
}

interface MenuItem {
    path: string
    title: string
    submenu: SubMenuItem[]
}

interface Props {
    config: MenuItem[]
}

const HeaderMobile: React.FC<Props> = ({ config }) => {
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
                        {config?.map((o: MenuItem, i: number) => (
                            <div className="relative" key={i}>
                                <div
                                    className={`text-lg text-[#714E39] font-bold capitalize tracking-wider uppercase`}
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
                                        <Link href={o.path}>{o.title}</Link>
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
                                                    className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 capitalize"
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
