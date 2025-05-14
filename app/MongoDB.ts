import { error } from "console"
import { Db, MongoClient, ObjectId, WithId } from "mongodb"
import clientPromise from "../lib/db"
import { JobsData, jobType, RoleType, UserProfile, UserType, DbError, companyProfile, Credentials } from "../types/Types"




const url = "mongodb://localhost:27017"  // url of mongod server
const client = new MongoClient(url)

const AccessDB = async (): Promise<Db> => {
    try {
        await clientPromise
        return client.db("job-portal")

    }
    catch (err: any) {
        throw new Error("error connecting to database " + err.message)
    }
}

const JobsCollection = async () => {
    const db = await AccessDB()
    return await db.collection<jobType>("jobs")
}

const addJob = async (data: jobType) => {
    const db = await AccessDB()
    if (db) {
        const job = await (await JobsCollection()).insertOne(data)
        return job
    } else {
        throw error("Cannot connect Database")
    }

}



const readJobs = async (skip: number, id_existData?: number[] | null): Promise<JobsData> => {
    const db = await AccessDB()
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
            return jobs
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

const searchData = async (searchVal: string, skipVal: number): Promise<JobsData> => {
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


const checkUserExist = async ({ email, password, checkWithPassword }: Credentials ): Promise<UserType>=> {
    const db = await AccessDB()
    let cred = checkWithPassword ? { email, password } : { email }
    let user = await db.collection<UserType>('users').findOne(cred)
    return user as UserType
}



const createUser = async (email: string, password: string, role: RoleType, emailVerified: Date, name: string) => {
    const db = await AccessDB()
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
    const db = await AccessDB()
    let user = await db.collection<UserProfile>('userProfile').insertOne(data)
    return user
}

const addCompanyProfile = async ({ jobPosts, name, description, email, image, location, phone }: companyProfile) => {
    const db = await AccessDB();
    let user = await db.collection<companyProfile>("companyProfile").insertOne({
        name,
        jobPosts,
        description,
        email,
        image,
        location,
        phone
    })
    return user
}

const updateUserRole = async (id: string | undefined, role: RoleType) => {
    const db = await AccessDB()
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
export {
    readJobs,
    addJob,
    searchData,
    checkUserExist,
    createUser,
    addUserProfile,
    updateUserRole,
    addCompanyProfile
}

