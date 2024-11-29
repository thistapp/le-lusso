import Logo from "./logo"
import menu from "../../../config/menu.json"
import Link from "next/link"

const Header = ({ }) => {
    return (
        <header className="w-full bg-[#D1C7BC] text-[#0E1D2F] p-6">
            <div className="grid grid-cols-12">
                <div className="col-start-2 ">
                    <Logo />
                </div>
                <div className="col-start-8 col-span-3 content-center">
                    <div className="w-full flex flex-wrap justify-between gap-4">
                        {menu?.map((o, i) => (
                            <div className="relative" key={i}>
                                <div className={`${o.submenu.length > 0 ? "menu-title" : "hyper-link-header"} text-xl font-cormorant-bold`}>
                                    <Link href={o.path}>
                                        {o.title}
                                    </Link>
                                </div>
                                {o.submenu.length > 0 &&
                                    <div className="absolute -left-7 w-[10em] bg-[#D1C7BC] sub-menu-div p-3 z-10">
                                        {o.submenu.map((oo, ii) => (
                                            <div className="flex" key={ii}>
                                                <Link className="hyper-link-header font-cormorant-bold" href={oo.path}>
                                                    {oo.title}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header