import Image from "next/image"
import Link from "next/link"

const Logo = () => {
    return (
        <>
            <Link href={"/"}>
                <Image
                    src={"/logo/logo_black.png"}
                    alt=""
                    width={"50"}
                    height={"50"}
                    className="mx-6"
                />
            </Link>
        </>
    )
}

export default Logo;