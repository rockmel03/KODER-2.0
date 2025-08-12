import { CartList } from "@/components/cart/CartList";
import { CartSummary } from "@/components/cart/CartSummary";

export default function CartPage() {
  return (
    <div className="container mx-auto p-6 grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <CartList />
      </div>
      <CartSummary />
    </div>
  );
}
