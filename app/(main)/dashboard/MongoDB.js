import { MongoClient } from "mongodb"

const url = "mongodb://localhost:27017"  // url of mongod server
const client = new MongoClient(url)

const AccessDB = async () => {
    try {
        await client.connect()
        const db = client.db("job-portal")
        return db
    }
    catch (err) {
        return {
            error: err.message,
            message: "Error connecting to the database"
        }
    }
}

const addJob = async (data) => {
    const db = await AccessDB()
    if (db.error) {
        return db.error
    }
    const collection = db.collection("jobs")
    const job = await collection.insertOne(dummyData)
    return job
}

const readJobs = async (data, skip) => {
    const db = await AccessDB()
    if (data) {
        if (data.length >= 1) {
            // filtering already fetched jobs id
            const id_existData = data.map(job => job._id)
            const jobs = await db.collection("jobs").find(
                {
                    _id: {
                        // the operator remove all jobs from the given id
                        $nin: id_existData
                    }
                }
            ).skip(skip).limit(10)
            return jobs
        }
        const jobs = await db.collection("jobs").findOne(data)
        return jobs

    }
    else {
        const jobs = await db.collection("jobs").find().skip(skip * 10).limit(10).toArray()
        console.log("job returned");
        console.log(jobs.length);
        return jobs.map(job => ({
            ...job,
            _id: job._id.toString()
        }))

    }
}

const searchData = async (searchVal, skipVal) => {
    // first we create index
    const db = await AccessDB()
    if (searchVal) {
        try {
            let jobs = await db.collection("jobs").find({
                $text: {
                    $search: searchVal
                }
            }).limit(5).skip(skipVal * 5).toArray()
            return jobs.map((job) => ({
                ...job,
                _id: job._id.toString()
            }))
        }
        catch (err) {
            console.log(err);
            return err
        }
    }
}

    const checkUserExist = async (email,password,verifyPassword) => {
        const db = await AccessDB()
        let user = await db.collection('users').findOne({
            email
        })
        
        return user ? {
            ...user,
            _id : user?._id.toString()
        } : null
    }


    const createUser = async (email,password,role,emailVerified) => {
        const db = await AccessDB()
        let user = await db.collection('users').insertOne({
            email,
            password,
            role,
            emailVerified
        })
        return user
    }

export {
    readJobs,
    addJob,
    searchData,
    checkUserExist,
    createUser
}

