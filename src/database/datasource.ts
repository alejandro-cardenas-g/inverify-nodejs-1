import { injectable } from "inversify";
import path from "path";
import { DataSource, Entity, EntityManager, EntityTarget } from 'typeorm';
import { Model } from "../types/model.types";
import { Professor } from '../models/professor.entity';

@injectable()
export class Database{

    private connection: DataSource;

    constructor(){
        this.connection = new DataSource({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "admin",
            password: "admin",
            database: "typeorm-crud-express",
            synchronize: true,
            logging: false,
            entities: [path.join(__dirname, '..', 'models/*.entity.ts')],
            subscribers: [],
            migrations: [],
        })
    };

    async connect(){
        await this.connection.initialize();
        console.log('Database is connected');
    }

    async disconnect(){
        await this.connection.destroy();
    }

    getDataSource(){
        return this.connection
    }

    getRepository(model: EntityTarget<Model>){
        return this.connection.getRepository<Model>(model);
    }

}

