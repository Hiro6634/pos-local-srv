import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
    getPorducts = async () : Promise<Product[]> => {
        
        
        return null;
    }
}
