const UserService = require('../services/UserService')

class UserController {

    async index (req, res) {
        res.statusCode = 200
        res.json({teste: "Sucesso"})
       
       return 

    }
    async create (req, res) {
        var {name, email, password} = req.body

        var status = await UserService.Create(name,email,password)
        if(status) {
            res.sendStatus(200)
        } else {
            console.log("Houve um erro na inserção de dados")
        }        
    }
    async read (req, res) {
        var data = await UserService.Read()
        if(data.length > 0 ){
            console.log(data[0]._id)
            res.send(data)
            return true
        } else {
            res.sendStatus(400)
            return undefined
        }
              
    }
    async update (req, res) {
        var email = req.body.email
        var resultado = await UserService.update(email)
        if(resultado) {
            
            console.log("Usuário puxado")
            res.send(resultado)
        } else {
            console.log("Houv outro erro")
          
        }

        console.log(resultado)

    }


    async delete (req, res) {
        const email = req.params.email
        var status = await UserService.Delete(email)
        if(status){
            res.sendStatus(200)
            console.log(status)

        } else {
            console.log("Erro")
            res.sendStatus(404)
        }
    }


}


module.exports = new UserController()