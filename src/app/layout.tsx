import type { Metadata } from "next";
import { satoshiRegular } from "@/fonts/font";
import { Provider } from "@/components/Provider";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import Scroll from "@/components/Scroll";

export const metadata: Metadata = {
  title: "Enzo Castro - Portfolio ",
  description:
    "Ce portfolio met en avant les compétences d'Enzo Castro, étudiant en BTS SIO option SISR, en administration des systèmes et des réseaux, ainsi que ses connaissances en technologies informatiques, démontrant sa capacité à gérer des projets techniques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${satoshiRegular.className} scrollbar scrollLight dark:scrollDark duration-300 bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText
              `}
        suppressHydrationWarning
      >
        <LenisScroll>
          <Scroll>
            <Provider>
              <div>{children}</div>
            </Provider>
          </Scroll>
        </LenisScroll>
      </body>
    </html>
  );
}
