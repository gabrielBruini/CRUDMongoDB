const app = require('../app')
const supertest = require("supertest")
const request = supertest(app)
const mongoose = require('mongoose')


let user = {
    name: "Gabriel",
    email: "gabrielteste@teste.com.br",
    password: '12345678'
}
afterAll( async () => { // Remover o usuário do banco de dados

      await mongoose.disconnect()          
 
})


describe("Cadastro de usuário", () => {
    
    test("Deve cadastrar um usuário com sucesso", () => {      

      return request.post("/create").send(user)
      .then(res => {

        expect(res.statusCode).toEqual(200)      

        

      }).catch(err => {
      
          throw Error
      })

    })

    test("Deve retornar todos os usuários cadastrados", () => {

        return request.get("/users").then( res => {
            expect(res.statusCode).toEqual(200)             
            //expect(res.body.users).toBeDefined()
            

        })
    })

test("Esse é um simples teste de rota", () => {
    return request.get("/teste").then( res => {
        expect(res.statusCode).toEqual(200)
        expect(res.body.teste).toEqual("Sucesso")
    }).catch(err => {
        throw Error
    })
})
/*
test("Deve deletar um usuário passando o e-mail", () => {
    return request.delete(`/user/${user.email}`).then( async res => {
        
    }).catch(err => {
        throw Error
    })
})*/




})