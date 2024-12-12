import Image from "next/image";
import Link from "next/link";
import FooterMobile from "./mobile/footer";

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-[#0D1E2F] text-[#D1C7BC] p-2 lg:p-6">
                <div className="hidden lg:grid grid-cols-12">
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
                    <div className="col-span-5 content-end">
                        <div className="flex flex-col justify-end text-xl gap-2">
                            <div className="w-3/12 flex flex-wrap text-right self-end">
                                <div>
                                    <span className="">23/71</span>
                                    <span className="mx-2">Thung Khru ,Thung Khru Bangkok</span>
                                    <span className="">10140</span>
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap justify-end gap-4 my-2">
                                <Link href={"https://www.facebook.com/profile.php?id=61565474234203"} target="_blank">
                                    <Image
                                        src={"/social/facebookIcon.png"}
                                        alt="facebook-icon"
                                        width={"35"}
                                        height={"35"}
                                    />
                                </Link>
                                <Link href={"https://www.instagram.com/lelusso.official/"} target="_blank">
                                    <Image
                                        src={"/social/IGIcon.png"}
                                        alt="ig-icon"
                                        width={"35"}
                                        height={"35"}
                                    />
                                </Link>
                                <Link href={"https://lin.ee/RkpqHbe"} target="_blank">
                                    <Image
                                        src={"/social/LineIcon.png"}
                                        alt="line-icon"
                                        width={"35"}
                                        height={"35"}
                                    />
                                </Link>
                                <Link href={"https://www.tiktok.com/@lelusso.project"} target="_blank">
                                    <Image
                                        src={"/social/tiktokIcon.png"}
                                        alt="tiktok-icon"
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
                <div className="grid lg:hidden grid-cols-12 grid-flow-col">
                    <FooterMobile />
                </div>
            </footer>
        </>
    )
}

export default Footer 