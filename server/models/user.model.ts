
import { model, Schema } from 'mongoose'
import { User } from '../interface/user.interface'

const UserSchema = new Schema<User>({
    name: { type: String, 
        required: true, 
        trim: true },
    email: { 
        type: String,
        required: true,
        trim: true, 
        unique: true, 
        match: [/.+\@.+\..+/, 'Please fill a valid email address'], 
        lowercase: true },
    hashed_password: { 
        type: String, 
        required: true },
    salt: String,
    updated: Date,
    created: { 
        type: Date, 
        default: Date.now() 
    }
})

const UserModel = model<User>('User', UserSchema);
