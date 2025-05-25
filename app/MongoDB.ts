import { error } from "console"
import { Db, MongoClient, ObjectId, WithId } from "mongodb"
import clientPromise from "../lib/db"
import { JobsData, jobType, RoleType, UserProfile, UserType, DbError, companyProfile, Credentials } from "../types/Types"


type Databases = "job-portal" | "Users"


const url = "mongodb://localhost:27017"  // url of mongod server
const client = new MongoClient(url)

const jobPortalDb = async (): Promise<Db> => {
    try {
        await clientPromise
        return client.db("job-portal" as Databases)

    }
    catch (err: any) {
        throw new Error("error connecting to database " + err.message)
    }
}
const usersDb = async (): Promise<Db> => {
    try {
        await clientPromise
        return client.db("Users" as Databases)

    }
    catch (err: any) {
        throw new Error("error connecting to database " + err.message)
    }
}

const JobsCollection = async () => {
    const db = await jobPortalDb()
    return await db.collection<jobType>("jobs")
}

const addJob = async (data: jobType) => {
    const db = await jobPortalDb()
    if (db) {
        const job = await (await JobsCollection()).insertOne(data)
        return job
    } else {
        throw error("Cannot connect Database")
    }

}



const readJobs = async (skip: number, id_existData?: number[] | null): Promise<JobsData> => {
    const db = await jobPortalDb()
    if (id_existData) {
        if (id_existData.length >= 1) {
            // filtering already fetched jobs id
            const jobs = await (await JobsCollection()).find(
                {
                    _id: {
                        // the operator remove all jobs from the given id
                        $nin: [new ObjectId(...id_existData)]
                    }
                }
            ).skip(skip).limit(10).toArray()

            return jobs.map(job => (
                {
                    ...job,
                    _id: job._id?.toString()
                }
            ))
        }
        const jobs = await (await JobsCollection()).findOne({
            _id: new ObjectId(id_existData[0])
        })
        return [jobs] as JobsData
    }
    else {
        const jobs = await (await JobsCollection()).find().skip(skip * 10).limit(10).toArray()
        return jobs.map(job => ({
            ...job,
            _id: job._id?.toString()
        }))

    }
}

const jobSearch = async (searchVal: string, skipVal: number): Promise<JobsData> => {
    // first we create index
    if (searchVal) {
        try {
            let jobs = await (await JobsCollection()).find({
                $text: {
                    $search: searchVal
                }
            }).limit(5).skip(skipVal * 5).toArray()


            return jobs
        }
        catch (err) {
            console.log(err);
            return []
        }
    } else {
        return []
    }
}


const checkUserExist = async ({ email, password }: Credentials, checkWithPassword?: boolean): Promise<UserType> => {
    const db = await usersDb()
    let cred = checkWithPassword ? { email, password } : { email }
    let user = await db.collection<UserType>('users').findOne(cred)
    return user as UserType
}



const createUser = async (email: string, password: string, role: RoleType, emailVerified: Date, name: string) => {
    const db = await usersDb()
    let user = await db.collection('users').insertOne({
        name,
        email,
        password,
        role,
        emailVerified
    })
    return user
}



const addUserProfile = async (data: UserProfile) => {
    const db = await usersDb()
    let user = await db.collection<UserProfile>('userProfile').insertOne(data)
    return user
}

const addCompanyProfile = async (data: companyProfile) => {
    const db = await usersDb();
    let user = await db.collection<companyProfile>("companyProfile").insertOne(data)
    return user
}

const createAppliedJobList = async (userId: string) => {
    const db = await jobPortalDb()
    let appliedJobList = await db.collection("appliedJobs").insertOne({
        userId: new ObjectId(userId),
        appliedJobs: [],
        saveJobs: []
    })
    return appliedJobList
}

const updateUserRole = async (id: string | undefined, role: RoleType) => {
    const db = await usersDb()
    let user = await db.collection("users").updateOne(
        {
            _id: new ObjectId(id)
        },
        {
            $set: {
                role: role
            }
        }
    )
    return user
}
// const getAppliedJobs = async (skip : number) => {
//     const db = await jobPortalDb()
//     let userProfile = await db.collection<UserProfile>("userProfile").find().skip(skip).toArray()
//     return userProfile.map(profile => ({
//         ...profile,

//     }))
// } 

const saveJobs  = async (id : string) => {
    let db = await jobPortalDb()
    let saveJob = await db.collection("appliedJobs" as Databases).updateOne({
        _id : new ObjectId(id)
    },{
        $addToSet : {
            saveJobs : "hello"
        }
    })
    return saveJob
}


export {
    saveJobs,
    readJobs,
    addJob,
    jobSearch,
    checkUserExist,
    createUser,
    addUserProfile,
    updateUserRole,
    addCompanyProfile,
    createAppliedJobList
}

