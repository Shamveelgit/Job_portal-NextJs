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
        if(data.length >= 1) {
            const id_existData = data.map(job => job._id)
            const jobs = await db.collection("jobs").find(
                {
                    _id : {
                        $nin : id_existData
                    }
                }
            ).skip(skip).limit(10)
            return jobs
        }
        const jobs = await db.collection("jobs").findOne(data)
        return jobs
    }
    else {
        const jobs = await db.collection("jobs").find().skip(skip * 5).limit(5).toArray()
        console.log("job returned");
        console.log(jobs.length);
        return jobs.map(job => ({
            ...job,
            _id: job._id.toString()
        }))

    }
}

const searchData = async (searchVal) => {
    const db = await AccessDB()
    if (searchVal) {
        let jobs = await db.collection("jobs").aggregate([
            {
                $search: {
                    index: "default",
                    Text: {
                        query: searchVal.toString(),
                        path: 'title'
                    },
                    $project: {
                        title : 1,
                        description : 1,
                        company : 1,
                        salary : 1,
                        type  : 1,
                        location : 1,
                        skills : 1,
                        experience : 1
                    }
                }
            }
        ]).toArray()
        return jobs
    }
}

export {
    readJobs,
    addJob,
    searchData
}

