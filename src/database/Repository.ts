import { inject, injectable } from "inversify";
import { Database } from "./datasource";
import { Repository } from 'typeorm';
import { Professor } from "../models/professor.entity";

@injectable()
class RepositoryT<T>{

    repository: Repository<T>
    database: Database;

    constructor(
        @inject(Database) database: Database
    ){
        this.database = database;
    }

    public getRepository(){
        return this.database.getRepository;
    }

}