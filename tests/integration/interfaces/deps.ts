import { CryptoDeps } from '@kant2002-diia-inhouse/crypto'
import { DatabaseService } from '@kant2002-diia-inhouse/db'
import { QueueDeps } from '@kant2002-diia-inhouse/diia-queue'
import { HealthCheck } from '@kant2002-diia-inhouse/healthcheck'
import { RedisDeps } from '@kant2002-diia-inhouse/redis'
import TestKit from '@kant2002-diia-inhouse/test'

import { AppConfig } from './config'

export type AppDeps = {
    config: AppConfig
    healthCheck: HealthCheck
    database: DatabaseService
    testKit: TestKit
} & QueueDeps &
    RedisDeps &
    CryptoDeps
