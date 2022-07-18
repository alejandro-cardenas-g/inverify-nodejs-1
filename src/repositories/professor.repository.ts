import { Professor } from "../models/professor.entity";
import { container } from '../di-containers';
import { Database } from '../database/datasource';
import { Repository } from 'typeorm';
import { inject, injectable } from "inversify";

// export const ProfessorRepository = container.get(Database).getDataSource().getRepository(Professor).extend({

//     getAll(){
//         return this.createQueryBuilder('p')
//             .getMany()
//     }

// })

@injectable()
export class ProfessorRepository2{

    readonly context: Repository<Professor>

    // constructor(private db: Database){
    //     this.context = db.getDataSource().getRepository(Professor)
    // }

    constructor(
        @inject(Database) database: Database
    ){
        // this.context = database.getDataSource().getRepository(Professor);
        this.context = database.getRepository(Professor);
    }
    
    getAllByNone(): Promise<Professor[]>{
        return this.context.createQueryBuilder('p')
            .getMany()
    }

}