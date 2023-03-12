import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
    private products: Product[] = [{
        id: 1,
        name: 'Gaseosa',
        price: 500,
        categoryId: 1,
        color: 'yellow',
        enable: true
    },
    {
        id: 2,
        name: 'Bondiola',
        price: 1000,
        categoryId: 1,
        color: 'cyan',
        enable: true
    },
    ]
    getPorducts = async () : Promise<Product[]> => {
        return this.products;
    }
}
