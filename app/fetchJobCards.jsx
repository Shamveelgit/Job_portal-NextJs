'use server';

import { readJobs, searchData } from "./MongoDB";

export async function FetchJobs(skipVal) {
    console.log("Fetching jobs with skip:", skipVal);
    const jobs = await readJobs(null, skipVal);
    return jobs;
}
