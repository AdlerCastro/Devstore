'use client'

import { useCart } from '@/contexts/cart-context'

export interface ButtonAddToCartProps {
  productId: number
}

export function ButtonAddToCart({ productId }: ButtonAddToCartProps) {
  const { addToCart } = useCart()

  function handleAddProduct() {
    addToCart(productId)
  }

  return (
    <button
      className="mt-8 flex h-12 items-center justify-center rounded-full font-semibold bg-emerald-600 text-white"
      type="button"
      onClick={handleAddProduct}
    >
      Adicionar ao carrinho
    </button>
  )
}
