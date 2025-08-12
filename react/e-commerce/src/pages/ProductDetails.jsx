import React, { useEffect, useState } from "react";
import { useProductContext } from "../context/ProductContext";
import { useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { products, fetchProductById } = useProductContext();
  const { addToCart } = useCartContext();
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const product = products.find((product) => product.id === id);
    if (product) setProduct(product);
    else {
      fetchProductById(id).then((res) => {
        console.log(res);
        setProduct(res.product);
      });
    }
  }, [id]);

  const discountedPrice = product
    ? (product.price - (product.price * product.discount) / 100).toFixed(2)
    : 0;

  return (
    product && (
      <div className="container mx-auto p-6 grid md:grid-cols-2 gap-8">
        {/* Left: Product Image */}
        <Card className="flex justify-center items-center p-6">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[400px] object-contain"
          />
        </Card>

        {/* Right: Product Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>

          <div className="flex items-center gap-3">
            <span className="text-3xl font-semibold text-primary">
              ₹{discountedPrice}
            </span>
            {product.discount > 0 && (
              <span className="line-through text-muted-foreground">
                ₹{product.price}
              </span>
            )}
            {product.discount > 0 && (
              <span className="text-green-600 font-medium">
                {product.discount}% OFF
              </span>
            )}
          </div>

          <Separator />

          <div className="text-sm text-muted-foreground space-y-1">
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Model:</strong> {product.model}
            </p>
            <p>
              <strong>Color:</strong> {product.color}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
          </div>

          <Separator />

          <p className="text-sm whitespace-pre-line">{product.description}</p>

          <Separator />

          <div className="flex gap-3">
            <Button className="w-full" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
