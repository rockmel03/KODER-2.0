import { CartItem } from "./CartItem";
import { useCartContext } from "../../context/CartContext";

export function CartList() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartContext();

  return (
    <div className="flex flex-col gap-4">
      {cart.length === 0 ? (
        <p className="text-muted-foreground">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.product.id}
            {...item.product}
            quantity={item.quantity}
            onIncrease={() => increaseQuantity(item.product.id)}
            onDecrease={() => decreaseQuantity(item.product.id)}
            onRemove={() => removeFromCart(item.product.id)}
          />
        ))
      )}
    </div>
  );
}
