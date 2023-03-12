import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ProductRequest } from '../dto/product-request.dto';
import { Product } from '../entities/product.entity';

@Controller('products')
export class ProductsController {

    constructor(
        private readonly productService: ProductService
    ){}
    @Get()
    async getProducts():Promise<ProductRequest[]>{
        return await this.productService.getPorducts();
    }

    @Post()
    async addProduct(@Body() product: Product):Promise<Product>{
         return await this.productService.addProduct(product);
    }
}
