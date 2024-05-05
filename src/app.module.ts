import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';

import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { Cart } from './cart/entities/cart.entity';
import { CartItems } from './cart/entities/cartItems.entity';

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST,
      port: Number(DB_PORT),
      username: DB_USER,
      password: DB_PASS,
      database: DB_NAME,
      entities: [Cart, CartItems],
      ssl: {
        rejectUnauthorized: false,
      },
      logging: true,
    }),
    AuthModule,
    CartModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
