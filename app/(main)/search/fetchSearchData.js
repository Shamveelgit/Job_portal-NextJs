'use server';

import { searchData } from "../dashboard/MongoDB";


export async function fetchSearchData(skipVal,data) {
    const jobs = await searchData(data, skipVal);
    return jobs;
}
