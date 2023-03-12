import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity('Categories')
export class Category {
    @PrimaryGeneratedColumn()
    private id: number;
    @Column()
    private name: string;
    @Column()
    private color: string;
    @Column()
    private order: number;
}
