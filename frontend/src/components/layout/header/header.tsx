import Logo from "./logo"
import menu from "../../../config/menu.json"

const Header = () => {

    return (
        <header className="w-full bg-[#D1C7BC] text-[#0E1D2F] p-6">
            <div className="grid grid-cols-12">
                <div className="col-start-2 ">
                    <Logo />
                </div>
                <div className="col-start-8 col-span-3 content-center">
                    <div className="w-full flex flex-wrap justify-between gap-4">
                        {menu?.map((o, i) => (
                            <div className={"hyper-link-header text-xl font-cormorant-bold"} key={i}>
                                {o.title}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header