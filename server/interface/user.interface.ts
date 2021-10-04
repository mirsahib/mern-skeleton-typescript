export interface User{
    name:string,
    email:string,
    hashed_password:string,
    salt:string,
    updated:Date,
    created:{
        type:Date,
        default:Date
    }
}