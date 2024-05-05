import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';

import { Cart as CartModel } from '../models';
import { Cart as CartEntity } from '../entities/cart.entity';
import { CartItems } from '../entities/cartItems.entity';
import { entityToModel } from '../entityToModel';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private cartRepository: Repository<CartEntity>,
  ) {}

  async findByUserId(userId: string) {
    const cartEntity = await this.cartRepository.findOne({
      where: {
        userId,
        status: 'OPEN',
      },
    });

    if (cartEntity === undefined) return null;

    return entityToModel(cartEntity);
  }

  async createByUserId(userId: string) {
    const id = v4(v4());
    const initItems = [];

    const cartEntity = new CartEntity();
    cartEntity.id = id;
    cartEntity.userId = userId;
    cartEntity.createdAt = new Date();
    cartEntity.updatedAt = cartEntity.createdAt;
    cartEntity.status = 'OPEN';
    cartEntity.items = initItems;

    await this.cartRepository.save(cartEntity);

    return entityToModel(cartEntity);
  }

  async findOrCreateByUserId(userId: string) {
    const userCart = await this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    return this.createByUserId(userId);
  }

  async updateByUserId(userId: string, { items }: CartModel) {
    const { id } = await this.findOrCreateByUserId(userId);

    const cartEntity = await this.cartRepository.findOne({
      where: {
        id,
      },
    });

    cartEntity.updatedAt = new Date();
    cartEntity.items = items.map(
      item =>
        ({
          cartId: id,
          productId: item.product.id,
          count: item.count,
        } as CartItems),
    );

    await this.cartRepository.save(cartEntity);

    return entityToModel(cartEntity);
  }

  async removeByUserId(userId) {
    const cart = await this.findByUserId(userId);

    if (cart === null) return;

    const cartEntity = await this.cartRepository.findOne({
      where: {
        id: cart.id,
      },
    });

    await this.cartRepository.remove(cartEntity);
  }
}
