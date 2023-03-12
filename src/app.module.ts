import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [
    ProductsModule, 
    ConfigModule.forRoot({
    isGlobal: true,
    }), 
    CategoriesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
