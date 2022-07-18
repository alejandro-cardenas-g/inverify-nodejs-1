import { Container } from 'inversify';
import './controllers/professor.controller'
import { Database } from './database/datasource';
// import { ProfessorRepository2 } from './repositories/professor.repository';
// import { ProfessorService } from './services/professor.service';
import * as repositories from './repositories'
import * as services from './services'

export const container = new Container({
    defaultScope: 'Singleton',
    autoBindInjectable: true
});

container.bind(Database).toSelf();

type reposTypes = keyof typeof repositories;
type servicesTypes = keyof typeof services;

// for (let repo of Object.keys(repositories)){
//     container.bind(repositories[repo as reposTypes]).toSelf().inSingletonScope();
// }

// for (let service of Object.keys(services)){
//     container.bind(services[service as servicesTypes]).toSelf().inSingletonScope();
// }

// container.bind(ProfessorRepository2).toSelf();
// container.bind(ProfessorService).toSelf();
