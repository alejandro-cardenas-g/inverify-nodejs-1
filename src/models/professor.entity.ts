import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('professors')
export class Professor{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

}
