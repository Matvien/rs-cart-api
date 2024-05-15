import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { Cart } from './cart.entity';

@Entity('cart_items')
export class CartItems {
  @PrimaryColumn({ name: 'cart_id' })
  public cartId: string;

  @PrimaryColumn({ name: 'product_id' })
  public productId: string;

  @Column({ name: 'count' })
  public count: number;

  @ManyToOne(
    () => Cart,
    cart => cart.items,
  )
  @JoinColumn({ name: 'cart_id' })
  public cart: Cart;
}
