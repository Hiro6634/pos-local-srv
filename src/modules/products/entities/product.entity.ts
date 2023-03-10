import { Entity, Column, PrimaryGeneratedColumn  } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    categoryId: number;

    @Column()
    price: number;

    @Column()
    enable: boolean;

    @Column()
    color: string;
}