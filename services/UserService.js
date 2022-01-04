const mongoose = require('mongoose')
const UserModel = require('../models/User')
const bcrypt = require('bcrypt')
var User = mongoose.model("User", UserModel)

mongoose.connect("mongodb://localhost:27017/mongocrud")

class UserServices {

    async Create (name, email, password) {
        var salt = await bcrypt.genSalt(10)
        var hash = await bcrypt.hash(password, salt)
        const userdata = new User({
            name, email, password: hash
        })
        try {

            await userdata.save()            
            return true
        } catch (err) {
            console.log(err)
            return false
        }

    }
    async Read () {
        try {
            var status = await User.find()
            return status

        } catch {
            throw Error
        }
    }
    async ReadOne(email) {
        try {
            var user = await User.findOne({"email": email})
            return user

        } catch (err) {
            console.log(err)

        }
        

    }

    async update (email) {
        var result = await this.ReadOne(email)
        if(result) {            
            return result
        } else {
            console.log("Houve um erro")
            return false
        }

    }

    async Delete (email) {
        try {
            await User.deleteOne({"email": email})
            return true
            

        } catch (err) {
            return false

        }

    }

}
module.exports = new UserServices()

