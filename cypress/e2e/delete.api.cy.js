/// <reference types="cypress" />

describe('Excluir dispositivos', () => {

    const payload_cadastro_device = require('../fixtures/cadastrar_device_sucesso.json')
    const id_not_exist = '555'
    it('Excluir um dispositivo', () => {

        cy.cadastrarDevice(payload_cadastro_device)
            .then((response_post)  => {
                expect(response_post.status).equal(200)

        cy.excluirDevice(response_post.body.id)
            .then((response_delete)  => {
                    console.log(response_delete)
                    expect(response_delete.status).equal(200)
                    expect(response_delete.body.message).equal(`Object with id = ${response_post.body.id} has been deleted.`)
                })
            })
    })

    it('Excluir um dispositivo não existente', () => {

        cy.excluirDevice(id_not_exist)
            .then((response_delete)  => {
                console.log(response_delete)
                expect(response_delete.status).equal(404)
                expect(response_delete.body.error).equal(`Object with id = ${id_not_exist} doesn't exist.`)
        })
    })

})