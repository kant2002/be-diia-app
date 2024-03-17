import { ActionVersion, SessionType } from '@kant2002-diia-inhouse/types'

import { AppAction } from '../../src'

export const appAction: AppAction = {
    name: 'userActionName',
    sessionType: SessionType.User,
    handler() {},
    actionVersion: ActionVersion.V1,
    validationRules: {},
}
