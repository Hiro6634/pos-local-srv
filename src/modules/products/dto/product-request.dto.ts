import{
    IsDefined
}from 'class-validator';

export class ProductRequest{
    
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly categoryId: number;
    readonly enable: boolean;
    readonly color: string;
}