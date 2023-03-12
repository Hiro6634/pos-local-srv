import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { ProductRequest } from '../dto/product-request.dto';
@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ){}
    getPorducts = async () : Promise<ProductRequest[]> => {
        return this.productRepository.find();
    }

    addProduct = async (product: Product) : Promise<Product> => {
        return await this.productRepository.save(product);
    }
}
