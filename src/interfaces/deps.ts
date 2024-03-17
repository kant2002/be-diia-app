import { AsyncLocalStorage } from 'async_hooks'

import { MetricsService } from '@kant2002-diia-inhouse/diia-metrics'
import { EnvService } from '@kant2002-diia-inhouse/env'
import { AlsData, Logger } from '@kant2002-diia-inhouse/types'
import { AppValidator } from '@kant2002-diia-inhouse/validators'

import ActionFactory from '../actionFactory'
import { GrpcClientFactory } from '../grpc/grpcClient'
import MoleculerService from '../moleculer/moleculerWrapper'

import { BaseConfig } from './config'

export interface ExternallyRegisteredDeps {
    config: BaseConfig
    logger: Logger
}

export interface InternallyRegisteredDeps {
    serviceName: string
    envService: EnvService
    asyncLocalStorage: AsyncLocalStorage<AlsData>
    moleculer?: MoleculerService
    validator: AppValidator
    actionFactory: ActionFactory
    metrics: MetricsService
    grpcClientFactory: GrpcClientFactory
}

export type BaseDeps = ExternallyRegisteredDeps & InternallyRegisteredDeps
