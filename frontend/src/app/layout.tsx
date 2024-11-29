import type { Metadata } from "next";
import "../../public/styles/globals.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";

export const metadata: Metadata = {
  title: "Le Lusso",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <div className="flex flex-col justify-between">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>

    </html>
  );
}
