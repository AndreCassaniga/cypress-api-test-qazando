/// <reference types="cypress" />

describe('Alterar dispositivos', () => {

    const payload_cadastro_device = require('../fixtures/cadastrar_device_sucesso.json')
    const payload_altera_device = require('../fixtures/alterar_device_sucesso.json')
    const id_not_exist = '555'
    const dataAtual = new Date().toISOString().slice(0, 16)

    it('Alterar um dispositivo', () => {
  
        cy.cadastrarDevice(payload_cadastro_device)
            .then((response_post)  => {
                expect(response_post.status).equal(200)
                expect(response_post.body.name).equal(payload_cadastro_device.name)
                //fazer put
        cy.alterarDevice(response_post.body.id, payload_altera_device )
            .then((response_put)  => {
                console.log(response_put)
                expect(response_put.status).equal(200)
                expect(response_put.body.name).equal(payload_altera_device.name)
                expect(response_put.body.updatedAt.slice(0, 16)).equal(dataAtual)
            })
        })
    })

    it('Alterar um dispositivo inexistente', () => {
  
        cy.alterarDevice(id_not_exist, payload_altera_device )
            .then((response_put)  => {
                console.log(response_put)
                expect(response_put.status).equal(404)
                expect(response_put.body.error).equal(`The Object with id = ${id_not_exist} doesn't exist. Please provide an object id which exists or generate a new Object using POST request and capture the id of it to use it as part of PUT request after that.`)

            })
        })
    })

