import express from 'express'
import morgan from 'morgan'

import { InversifyExpressServer } from 'inversify-express-utils'

import { container } from './di-containers'

import { Database } from './database/datasource'

export class App{

    async setup(){

        const db = container.get(Database);

        await db.connect();

        const server = new InversifyExpressServer(container, null, {
            rootPath: '/api/professors'
        })

        server.setConfig(app => {
            const logger = morgan('combined')
            app.use(logger)
            app.use(express.json())

        })

        const app = server.build()

        app.listen(8000, () => console.log('server is listening'))

    }

}