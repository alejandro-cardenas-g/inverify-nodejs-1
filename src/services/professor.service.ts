import { inject, injectable } from "inversify";
import { Professor } from "../models/professor.entity";
import { ProfessorRepository2 } from "../repositories/professor.repository";

@injectable()
export class ProfessorService{

    private professorRepository: ProfessorRepository2;

    public constructor(
        @inject(ProfessorRepository2) professorRepository: ProfessorRepository2
    ){
        this.professorRepository = professorRepository;
    }

    async getAll(): Promise<Professor[]>{
        return await this.professorRepository.getAllByNone();
    }

    async postProfessor(name: string): Promise<Professor>{
        return await this.professorRepository.context.save({
            name
        });
    }

}