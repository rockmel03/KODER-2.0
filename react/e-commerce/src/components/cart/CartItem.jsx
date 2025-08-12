// components/cart/CartItem.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";

export function CartItem({
  name,
  price,
  quantity,
  image,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  return (
    <Card className="flex items-center flex-row gap-4 p-4">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 object-cover rounded-md"
      />
      <CardContent className="flex-1 p-0">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">₹{price.toFixed(2)}</p>
        <div className="flex items-center gap-2 mt-2">
          <Button variant="outline" size="icon" onClick={onDecrease}>
            <Minus className="w-4 h-4" />
          </Button>
          <span>{quantity}</span>
          <Button variant="outline" size="icon" onClick={onIncrease}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
      <Button variant="destructive" size="icon" onClick={onRemove}>
        <Trash2 className="w-4 h-4" />
      </Button>
    </Card>
  );
}
