import "reflect-metadata";
import { cleanUpMetadata, response } from "inversify-express-utils";
import '../../di-containers'
import { professorController } from "../../controllers/professor.controller"
import { ProfessorService } from "../../services/professor.service"
import { ProfessorRepository2 } from '../../repositories/professor.repository';
import { Database } from '../../database/datasource';
import { Response } from 'express'
import { fakeResponseInjection } from "../utils/res";

describe('test in professor Controller', () => {
    cleanUpMetadata()
    let professorControllerTest: professorController
    let professorService: ProfessorService
    let professorRepository2: ProfessorRepository2
    let database: Database

    beforeEach(async() => {
        database = new Database()
        // await database.connect()
        professorRepository2 = new ProfessorRepository2(database)
        professorService = new ProfessorService(professorRepository2)
        professorControllerTest = new professorController(professorService)
    })

    afterEach(async() => {
        // await database.disconnect()
    })

    it('Controller must return professors', async() => {
        
        const professors = [{id: 1, name: 'Andrew'}]

        jest.spyOn(professorControllerTest as any, 'getProfessors')
            .mockResolvedValueOnce(professors)
        
        const res = null;

        const prof = await professorControllerTest.getProfessors(fakeResponseInjection)
        
        expect(prof).toBe(professors)

    })

    it('Method getAll of professorService must be called one time', async() => {

        jest
            .spyOn(professorService as any, 'getAll')
            .mockImplementation(() => []);

        const res = null;

        await professorControllerTest.getProfessors(fakeResponseInjection)

        expect(professorService.getAll).toHaveBeenCalledTimes(1)
    })

})