'use server';

import { DbError, JobsData } from "../../../../types/Types";
import { jobSearch } from "../../../MongoDB";


export async function fetchSearchData(skipVal : number,data : string) {
    const jobs  = await jobSearch(data, skipVal);
    return jobs;
}
