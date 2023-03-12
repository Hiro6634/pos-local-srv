import { Controller, Get } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';

@Controller('products')
export class ProductsController {

    constructor(
        private readonly productService: ProductService
    ){}
    @Get()
    async getProducts():Promise<Product[]>{
        return await this.productService.getPorducts();
    }
}
