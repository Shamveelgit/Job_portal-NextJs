
import RecentJobs from "../../../FirstPage/RecentJobs";
import { JobsData } from "../../../types/Types";
import { readJobs } from "../../MongoDB";

export default async function Home() {

  let jobs = await readJobs(0)

  return (


    <main className="flex flex-col gap-10 capitalize">
      <section className="w-full items-center justify-center flex flex-col lg:p-5 gap-5">
        <div className="w-full pl-10">
          <h1 className="text-text font-bold">Recent Jobs</h1>
        </div>
        <div className="w-full flex items-start  justify-start">
          <div className="w-full flex items-center justify-center">
            <div className=" w-full *:shadow-lg *:bg-secondaryColor *:rounded-lg grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-3 2xl:grid-cols-5 overflow-hidden *:h-72 gap-8 px-5 lg:px-6">
              <RecentJobs jobs={jobs as JobsData} />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full items-center justify-center flex flex-col lg:p-5 gap-5">
        <div className="w-full pl-10">
          <h1 className="text-text font-bold">applied Jobs</h1>
        </div>
        <div className="w-full flex items-start  justify-start">
          <div className="w-full flex items-center justify-center">
            <div className=" w-full *:shadow-lg *:bg-secondaryColor *:rounded-lg grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-3 2xl:grid-cols-5 overflow-hidden *:h-72 gap-8 px-5 lg:px-6">
              {
                Array.from({ length: 4 }).map((val, index) => (
                  <div key={index} className=" animate-pulse"></div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
