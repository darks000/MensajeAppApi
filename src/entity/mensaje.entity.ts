import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mensaje {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nick:String;

    @Column()
    mensaje:String;
}
