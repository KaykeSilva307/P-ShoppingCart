import { CartContext } from "../../Contexts/cartContext"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"

import { ProductsProps } from "../Home"

export function Cart() {
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext)
  const [products, setProducts] = useState<ProductsProps[]>([])

  return (
    <div className=" w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium">Ops seu carrinho está vazio...</p>
          <Link
            className="bg-slate-600 my-3 px-3 p-1 text-white font-medium rounded"
            to='/'>Acessar produtos</Link>
        </div>
      )}

      {cart.map((item) => (
        <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-300">
          <img
            className="w-28 "
            src={item.cover}
            alt={item.title}
          />

          <strong>Preço: R$ {item.price}</strong>
          <div className="flex gap-3 items-center justify-center">
            <button
              onClick={() => removeItemCart(item)}
              className="bg-slate-600 px-2.5 rounded text-white font-medium flex items-center justify-center cursor-pointer"
            >
              -
            </button>
            {item.amount}
            <button
              onClick={() => addItemCart(item)}
              className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center cursor-pointer"
            >
              +
            </button>
          </div>

          <strong className="float-right">
            SubTotal: {item.total.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </strong>
        </section>
      ))}

      {cart.length !== 0 && <p className="font-bold mt-4">Total: {total}</p>}

    </div>
  )
}