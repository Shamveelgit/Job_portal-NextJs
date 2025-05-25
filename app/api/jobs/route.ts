import { NextRequest, NextResponse } from "next/server"
import { readJobs } from "../../MongoDB"
import { URL } from "url";

export async function GET(req: NextRequest, res: Response) {
    let params = new URL(req.url).searchParams
    let skipValue = Number(params.get("skip"))
    let jobs = await readJobs(skipValue ? skipValue : 0,null)
    return NextResponse.json(jobs)
}