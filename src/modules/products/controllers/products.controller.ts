import { Controller, Get } from '@nestjs/common';
import { Product } from '../entities/product.entity';

@Controller('products')
export class ProductsController {
    @Get()
    getProducts():Product[]{
        const product: Product = new Product();
        product.$id = '2';
        product.$name = 'coca';

        return [product, product]
    }
}
