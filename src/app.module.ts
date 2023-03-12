import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsModule } from './modules/products/products.module';

import { Product } from './modules/products/entities/product.entity';
import { CategoriesModule } from './modules/categories/categories.module';
@Module({
  imports: [
    ProductsModule, 
    ConfigModule.forRoot({
    isGlobal: true,
    }), 
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities:[Product],
      synchronize: true
    }), 
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
