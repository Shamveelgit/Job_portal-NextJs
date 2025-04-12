'use server';

import { readJobs } from "@/app/(main)/MongoDB";

export async function FetchJobs(skipVal,data) {
    console.log("Fetching jobs with skip:", skipVal);
    const jobs = await readJobs(data, skipVal);
    return jobs;
}
