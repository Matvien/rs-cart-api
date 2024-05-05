import axios from 'axios';

import { Cart as CartEntity } from './entities/cart.entity';
import { CartItem, Cart as CartModel } from './models';

export async function entityToModel(entity: CartEntity) {
  const cartItems = await Promise.all(
    entity.items.map(item =>
      axios
        .get(
          `https://9w25sbrllh.execute-api.eu-central-1.amazonaws.com/products/${item.productId}`,
        )
        .then(
          r =>
            ({
              product: {
                id: r.data.id,
                title: r.data.title,
                description: r.data.description,
                price: r.data.price,
              },
              count: item.count,
            } as CartItem),
        ),
    ),
  );

  return {
    id: entity.id,
    items: cartItems,
  } as CartModel;
}
