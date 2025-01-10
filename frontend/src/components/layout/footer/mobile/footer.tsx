import Image from "next/image";
import Link from "next/link";

const FooterMobile = () => {
    return (
        <div className="col-span-full self-center text-center">
            <div className="flex justify-center">
                <Image
                    src={'/logo/logo_text_white.png'}
                    alt="logo"
                    width={"150"}
                    height={"150"}
                />
            </div>
            <div className="w-full ">
                <div>
                    <span className="">23/71</span>
                    <span className="mx-2">Thung Khru ,Thung Khru Bangkok</span>
                    <span className="">10140</span>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-center gap-4 my-4">
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
            <div className="flex justify-center gap-2 mb-8">
                <Link href="privacy-policy" className="hyper-link">Privacy Policy</Link>
                •
                <Link href={"term-and-condition"} className="hyper-link">Term and Condition</Link>
            </div>
            <div className="px-6">© 2024 Le Lusso Project All Rights Reserved</div>
        </div>
    );
}

export default FooterMobile;