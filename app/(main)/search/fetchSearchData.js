'use server';

import { searchData } from "../MongoDB";


export async function fetchSearchData(skipVal,data) {
    const jobs = await searchData(data, skipVal);
    return jobs;
}
