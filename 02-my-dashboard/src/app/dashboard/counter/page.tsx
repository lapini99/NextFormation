import { CartCounter } from "@/shoppingCart";
import { useState } from "react";

export const metadata = {
  title: 'Shopping Cart',
  description: 'Simple contador',
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <span>Productos en el carrito</span>
      <CartCounter />
    </div>
  );
}