/// <reference types="cypress" />

describe('Buscar dispositivos', () => {

    it('Buscar um dispositivo específico', () => {

        const device_id = '7'
        cy.buscarDeviceEspecifico(device_id)
            .then((response)=> {
                //console.log('STATUS CODE:' , response.status)
                console.log(response)
                expect(response.status).equal(200)
                expect(response.body).not.empty
                expect(response.body.id).equal(device_id)
                expect(response.body.name).equal('Apple MacBook Pro 16')
                expect(response.body.data.year).equal(2019)
                expect(response.body.data['CPU model']).not.empty
                expect(response.body.data['CPU model']).equal('Intel Core i9')
                expect(response.body.data['Hard disk size']).not.empty
                expect(response.body.data['Hard disk size']).equal('1 TB')
                
            })
    })

    it('Buscar um dispositivo inexistente', () => {

        const device_id = '567'
        cy.buscarDeviceEspecifico(device_id)
            .then((response)=> {
                expect(response.status).equal(404)
                expect(response.body.error).equal(`Oject with id=${device_id} was not found.`)
                
            })
    })
})