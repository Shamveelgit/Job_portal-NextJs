import { Geist, Geist_Mono, Miriam_Libre } from "next/font/google";
import "./globals.css";
import StoreProvider from "./storeProvider";
import Link from "next/link";
import SearchBtn from "./search/SearchBtn";
import SearchIcon from "./svg/Search";
import Image from "next/image";
import SearchBar from "./search/SearchBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const MiriamLibreFont = Miriam_Libre({
  subsets: ["latin"],
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {



  return (
    <html lang="en" webcrx="true">
      <head>
        <link rel="icon" href="https://lh3.googleusercontent.com/a/ACg8ocKWES-QsWR0WlymRMsed03YHdtTCmFdp1Don9SmCHKUCytNZPA=s432-c-no" ></link>
      </head>
      <StoreProvider>
        <body>
          <div className={`bg-background w-full min-h-screen flex flex-col gap-10`}>
            <header className="flex items-center justify-between p-6">
              <div className="">
                <Link href={"/"}>
                  <h1
                    className={`text-title uppercase text-lg ${MiriamLibreFont.className} `}
                  >
                    JOB <span className=" text-primary">Portal</span>
                  </h1>
                </Link>
              </div>
              <nav className=" md:flex items-center justify-center hidden">
                <ul className="flex justify-center text-sm gap-11 text-center *:opacity-75 *:hover:opacity-100 text-primary capitalize items-center">
                  <li>
                    <Link href="/" className="">
                      dahsboard
                    </Link>
                  </li>
                  <SearchBtn>
                    <Link href={"/search"}>
                      <li>Search</li>
                    </Link>
                  </SearchBtn>
                  <li>
                    <Link href="#" className="">
                      applied jobs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="">
                      applied jobs
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center justify-center w-20">
                <div className={`max-sm:block hidden`}>
                  <SearchBtn>
                    <Link href={"/search"}>
                      <SearchIcon width={30} height={30} color={"white"} />

                    </Link>
                  </SearchBtn>
                </div>
                <div className=" rounded-full bg-primary w-12 h-12 outline-2 outline-title border-2 border-background ">
                  <Image
                    src={
                      "https://lh3.googleusercontent.com/a/ACg8ocKWES-QsWR0WlymRMsed03YHdtTCmFdp1Don9SmCHKUCytNZPA=s432-c-no"
                    }
                    alt=""
                    width={50}
                    height={50}
                    className="w-full h-full rounded-full overflow-hidden"
                  ></Image>
                </div>
              </div>
            </header>
            {children}
          </div>
        </body>
      </StoreProvider>
    </html>
  );
}
