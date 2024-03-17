import { IdentifierService } from '@kant2002-diia-inhouse/crypto'
import TestKit, { mockInstance } from '@kant2002-diia-inhouse/test'
import { AppValidator, ValidationSchema } from '@kant2002-diia-inhouse/validators'

import MoleculerValidator from '../../../src/moleculer/moleculerValidator'

describe(`${MoleculerValidator.constructor.name}`, () => {
    const identifierService = new IdentifierService({ salt: 'salt' })
    const testKit = new TestKit(identifierService)

    const validator = mockInstance(AppValidator)

    const moleculerValidator = new MoleculerValidator(validator)

    describe(`method ${MoleculerValidator.prototype.validate.name}`, () => {
        it('should successfully execute validation process', () => {
            const params = { code: testKit.session.getUserSession().user.identifier }
            const schema: ValidationSchema = { code: { type: 'string' } }

            jest.spyOn(validator, 'validate').mockReturnValue(true)

            expect(moleculerValidator.validate(params, schema)).toBeTruthy()
            expect(validator.validate).toHaveBeenCalledWith(params, schema)
        })
    })
})
