import app from './express'
import mongoose, { mongo } from 'mongoose'

//Connection URL

// mongoose.Promise = global.Promise
// mongoose.connect('')
// mongoose.connection.on('error',()=>{
//     throw new Error(`unable to connect to database`)
// })

app.listen(5000,()=>{
    console.log('Server started on port %s.',5000)
})