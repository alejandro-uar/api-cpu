import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cpu{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('varchar')
    brand: string

    @Column('varchar')
    model: string

    @Column('integer')
    core: number
    
    @Column('varchar')
    cache: string

    @Column('varchar')
    frecuency: string

}