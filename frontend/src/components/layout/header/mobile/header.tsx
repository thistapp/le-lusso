/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Logo from '../logo';
import Link from 'next/link';

interface Props {
    config: any
}

const HeaderMobile: React.FC<Props> = ({ config }) => {
    const [open, setOpen] = useState(false);
    // const [subMenus, setSetMenus] = useState<{ [key: number]: boolean }>();

    // const openSubmenu = (index: number) => {

    // }
    // console.log(config)
    return (
        <>
            <div className="col-start-1 col-span-2 w-full relative">
                <Logo />
            </div>
            <div className="col-start-12">
                <div className="z-50">
                    <span
                        className={`material-symbols-outlined ${open ? "open-mobile " : "close-mobile absolute"} `}
                        onClick={() => setOpen(!open)}
                    >
                        close
                    </span>
                    <span
                        className={`material-symbols-outlined ${open ? "close-mobile absolute" : "open-mobile"}`}
                        onClick={() => setOpen(!open)}
                        style={{
                            right: "17px"
                        }}
                    >
                        menu
                    </span>
                </div>
                {open &&
                    <div className={`z-40 modal-overlay show-modal relative`}>
                        <span
                            className={`material-symbols-outlined close-mobile absolute right-0 `}
                            onClick={() => setOpen(!open)}
                        >
                            close
                        </span>
                        <div className="nav-content">
                            {config?.map((o: any, i: number) => (
                                <div className="text-white" key={i}>
                                    <div className={`text-2xl`}>
                                        {o.submenu.length > 0 ?
                                            <div className='flex flex-wrap justify-center'>
                                                <p>
                                                    {o.title}
                                                </p>
                                                <span
                                                    className={`material-symbols-outlined my-auto ${open ? "open-mobile " : "close-mobile absolute"} `}
                                                    onClick={() => setOpen(!open)}
                                                >
                                                    keyboard_arrow_down
                                                </span>
                                            </div>
                                            : <Link
                                                href={o.path}
                                            // className={`${o.submenu.length > 0 ? "menu-title" : "hyper-link-header"} w-auto `}
                                            >
                                                {o.title}
                                            </Link>
                                        }

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>

        </>
    )
}

export default HeaderMobile;