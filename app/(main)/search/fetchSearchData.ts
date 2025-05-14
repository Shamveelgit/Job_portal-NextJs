'use server';

import { DbError, JobsData } from "../../../types/Types";
import { searchData } from "../../MongoDB";


export async function fetchSearchData(skipVal : number,data : string) {
    const jobs  = await searchData(data, skipVal);
    return jobs;
}
