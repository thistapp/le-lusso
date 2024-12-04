import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Logo = () => {
    
    return (
        <>
            <Link href={"/"} className="absolute -top-[30px]">
                <Image
                    src={"/logo/logo_black.png"}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="mx-6"
                    style={{
                        width: "100%",
                        height: "auto"
                    }}
                />
            </Link>
        </>
    )
}

export default Logo;