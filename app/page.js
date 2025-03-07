import { Miriam_Libre, Roboto, Roboto_Serif } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import SearchBtn from "./SearchBtn";
import SearchIcon from "./svg/Search";
import LocationSvg from "./svg/Location";

const MiriamLibreFont = Miriam_Libre({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`bg-background w-full min-h-screen flex gap-12 flex-col`}>
      <div className="flex flex-col gap-6">
      <header className="flex items-center justify-between p-6">
        <div className="">
          <h1
            className={`text-title uppercase text-lg ${MiriamLibreFont.className} `}
          >
            JOB <span className=" text-primary">Portal</span>
          </h1>
        </div>
        <nav className=" md:flex items-center justify-center hidden">
          <ul className="flex justify-center text-sm gap-11 text-center *:opacity-75 *:hover:opacity-100 text-primary capitalize items-center">
            <li>
              <Link href="#" className="">
                dahsboard
              </Link>
            </li>
            <SearchBtn>
              <li>Search</li>
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
              <SearchIcon width={30} height={30} color={"white"} />
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
      <SearchBar />
      </div>

      <main className="flex flex-col gap-10 capitalize">
        <section className="w-full items-center justify-center flex flex-col gap-5">
          <div className="w-11/12">
            <h1 className="text-text font-bold">Recent Jobs</h1>
          </div>
          <div className="w-full flex items-start  justify-start">
            <div className="w-full flex items-center justify-center">
              <div className=" max-w-full max-sm:p-3 *:shadow-lg *:bg-secondaryColor *:rounded-lg flex flex-wrap *:w-72 *:max-sm:w-96 *:max-lg:w-80 *:max-xl:w-80 *:h-64 gap-5 justify-center items-center">
                {/* JOb cards */}

                <div
                  data-container={"Job cards"}
                  className=" flex flex-col overflow-hidden px-4 justify-center gap-2.5 capitalize"
                >
                  <div
                    data-container={"card heading"}
                    className="flex items-center justify-between gap-1"
                  >
                    <div>
                      <h2 className="text-sm text-gray-700">Company name</h2>
                      <h1 className=" text-sm font-semibold max-h-5/6 line-clamp-2">Senior Frontend fevsank</h1>
                    </div>
                    <div>
                      <Image
                        height={50}
                        width={50}
                        className="rounded-full min-w-[40px] "
                        alt=""
                        src={
                          "https://lh3.googleusercontent.com/a/ACg8ocKWES-QsWR0WlymRMsed03YHdtTCmFdp1Don9SmCHKUCytNZPA=s432-c-no"
                        }
                      ></Image>
                    </div>
                  </div>
                  <div
                    data-container={"card price"}
                    className=" w-full flex flex-col gap-1"
                  >
                    <div className="text-sm font-semibold text-green-600">$21000 - 31000</div>
                    <p className="text-xs font-extralight text-justify line-clamp-3 overflow-hidden">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam fugit provident ea tempora sapiente voluptatibus,
                      mollitia vitae. Laboriosam expedita quam dolor! Accusamus
                      non doloremque maxime nam minus fuga ducimus quia.
                    </p>
                  </div>
                      <div className=" text-sm font-semibold">Location,india</div>
                  <div data-container={"card buttons"} className=" flex flex-col gap-3">
                    <div className=" flex justify-between *:px-4 py-1 *:h-8 *:rounded-md">
                      <button className=" border border-green-600">On-site</button>
                      <button className="bg-green-600 border border-green-600 text-background font-semibold cursor-pointer">Apply</button>
                    </div>
                  </div>
                </div>

                {/* JObs cards ending */}

                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full items-center justify-center flex flex-col gap-5">
          <div className="w-11/12">
            <h1 className="text-text font-bold">Applied Jobs</h1>
          </div>
          <div className="w-full min-h-96 flex items-start  justify-start">
            <div className="w-full flex items-center justify-center">
              <div className=" max-w-full max-sm:p-3 *:animate-pulse *:shadow-lg *:bg-secondaryColor *:rounded-md flex flex-wrap *:w-72 *:max-sm:w-96 *:max-lg:w-80 *:max-xl:w-80 *:h-64 gap-5 justify-center items-center">
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
