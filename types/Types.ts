import { ObjectId, WithId } from "mongodb"

export interface UserProfile {
    _id? : string | ObjectId
    name: string,
    title? : string,
    email?: string
    image? : string
    phone?: string
    location?: string,
    cv? : string,
    skills?: []
    experience?: number
    education?: {
        degree?: string
        university?: string
        year?: number
    }
}
export type companyProfile  = {
    name : string ,
    description? : string 
    email? : string,
    image? : string ,
    phone? : string,
    location? : string ,
    jobPosts?  : string[] 
}

export type jobType = {
    _id : ObjectId | string,
    title: string 
    description: string
    company: string
    salary?: number
    type: "remote" | "hybrid" | "onsite"
    location?: string
    skills?: string | []
    experience?: number
}

export type JobsData = jobType[] | []

export type UserType = {
    _id? : WithId<Document> | undefined | ObjectId | string,
    email: string,
    password?: string,
    role: RoleType,
    image? : string,
    name? : string
    id? : string | undefined
}
export type Credentials = {
    name? : string,
    email  : string  ,
    password? : string ,
    role? : RoleType 
    checkWithPassword? : boolean
}


export type RoleType = "employee" | "company"

export type DbError = {
    error : any,
    message : string
}