import 'dotenv/config'

import 'reflect-metadata'

import { App } from "./app"

export async function server(){
    new App().setup()
}

server()