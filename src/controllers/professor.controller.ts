import { Response } from "express";
import { inject } from "inversify";
import { controller, httpGet, httpPost, requestBody, response } from "inversify-express-utils"
import { ProfessorService } from "../services/professor.service";

@controller('/v1/professor')
export class professorController{

    private professorService: ProfessorService;

    public constructor(
        @inject(ProfessorService) professorService: ProfessorService
    ){
        this.professorService = professorService;
    }

    @httpGet('/')
    async getProfessors(@response() res: Response){

        const professors = await this.professorService.getAll();

        return res.status(200).json({
            data: professors,
            ok: true,
            message: null
        })

    }
    @httpPost('/')
    async createProfessor(@response() res: Response, @requestBody() body: any){
        const professor = await this.professorService.postProfessor(body.name);

        return res.status(200).json({
            data: professor,
            ok: true,
            message: null
        })
    }

}