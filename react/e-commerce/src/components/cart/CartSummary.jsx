import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCartContext } from "../../context/CartContext";

export function CartSummary() {
  const { cart } = useCartContext();

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const checkout = () => {
    console.log("Proceeding to checkout...");
  };

  return (
    <Card className="p-4">
      <CardContent>
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={checkout}>
          Checkout
        </Button>
      </CardFooter>
    </Card>
  );
}
