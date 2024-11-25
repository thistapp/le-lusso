import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="w-full fixed bottom-0 bg-[#0D1E2F] text-[#D1C7BC] p-6">
            <div className="grid grid-cols-12">
                <div className="col-start-2 col-span-5">
                    <div className="flex flex-col gap-4">
                        <div className="">
                            <Image
                                src={'/logo/logo_text_white.png'}
                                alt="logo"
                                width={"200"}
                                height={"200"}
                            />
                        </div>
                        <div className="px-6">© 2024 Le Lusso Project All Rights Reserved</div>
                    </div>
                </div>
                <div className="col-span-5">
                    <div className="flex flex-col justify-between gap-4 text-xl">
                        <div className="w-full flex flex-wrap text-right justify-end">
                            <span className="font-infant">23/71</span> Thung Khru ,Thung Khru Bangkok 10140
                        </div>
                        <div className="w-full flex flex-wrap justify-end gap-4">
                            <Link href={"https://www.facebook.com/profile.php?id=61565474234203"} target="_blank">
                                <Image
                                    src={"/social/facebookIcon.png"}
                                    alt=""
                                    width={"35"}
                                    height={"35"}
                                />
                            </Link>
                            <Link href={"https://www.instagram.com/lelusso.official/"} target="_blank">
                                <Image
                                    src={"/social/IGIcon.png"}
                                    alt=""
                                    width={"35"}
                                    height={"35"}
                                />
                            </Link>
                            <Link href={"https://lin.ee/RkpqHbe"} target="_blank">
                                <Image
                                    src={"/social/LineIcon.png"}
                                    alt=""
                                    width={"35"}
                                    height={"35"}
                                />
                            </Link>
                            <Link href={"https://www.tiktok.com/@lelusso.project"} target="_blank">
                                <Image
                                    src={"/social/tiktokIcon.png"}
                                    alt=""
                                    width={"30"}
                                    height={"35"}
                                />
                            </Link>
                        </div>
                        <div className="flex justify-end gap-2">
                            <Link href="privacy-policy" className="hyper-link">Privacy Policy</Link>
                            •
                            <Link href={"term-and-condition"} className="hyper-link">Term and Condition</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer 