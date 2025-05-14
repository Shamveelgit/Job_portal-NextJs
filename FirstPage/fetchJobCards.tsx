'use server';

import { readJobs } from "../app/MongoDB";

export async function FetchJobs(skipVal : number,data? : number[] ) {
    console.log("Fetching jobs with skip:", skipVal);
    const jobs = await readJobs(skipVal, data);
    return jobs;
}
