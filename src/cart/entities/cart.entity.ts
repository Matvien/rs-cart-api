import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CartItems } from './cartItems.entity';

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @Column()
  status: string;

  @OneToMany(
    () => CartItems,
    cartItem => cartItem.cart,
    {
      eager: true,
      cascade: true,
    },
  )
  public items: CartItems[];
}
