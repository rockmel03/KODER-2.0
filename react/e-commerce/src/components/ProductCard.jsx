import React from "react";
import { Link } from "react-router";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Circle } from "lucide-react";

const ProductCard = ({ product, onAddToCart }) => {
  const {
    id,
    title,
    image,
    price,
    description,
    brand,
    model,
    color,
    category,
    discount,
  } = product;

  const discountedPrice = discount
    ? (price - (price * discount) / 100).toFixed(2)
    : price;

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <Link to={`/products/${id}`}>
          <div className="w-full aspect-square">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent>
        <CardTitle>
          <Link to={`/products/${id}`} className="hover:underline">
            {title.length > 50 ? title.slice(0, 50) + "..." : title}
          </Link>
        </CardTitle>
        <CardDescription>
          {description.length > 80
            ? description.slice(0, 80) + "..."
            : description}
        </CardDescription>
        <div className="mt-2 flex items-center gap-2">
          <p className=" opacity-80 capitalize font-semibold text-sm bg-zinc-200 w-fit py-0.5 px-2 rounded">
            {category}
          </p>
          <Circle fill={color} />
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full flex items-center gap-2 justify-between flex-wrap">
          <p className="text-2xl font-semibold">${discountedPrice}</p>

          <CardAction>
            <Button onClick={onAddToCart}>
              <span>
                <ShoppingCart />
              </span>
              <span>Add to cart</span>
            </Button>
          </CardAction>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
