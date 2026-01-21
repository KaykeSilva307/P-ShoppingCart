
import { BsCartPlus } from "react-icons/bs"
import { useEffect, useState, useContext } from "react"
import { api } from "../../Services/api" // api configurada, puxando os dados

import { CartContext } from "../../Contexts/cartContext";

export interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const { addItemCart } = useContext(CartContext)
  const [products, setProducts] = useState<ProductsProps[]>([])

  useEffect(() => { // useEffect para carregar os produtos da api
    async function getProducts() { // async e await para garantir que os produtos serão carregados
      const response = await api.get('/products') // .get('ROTA') para buscar os produtos daquela rota

      setProducts(response.data)
    }

    getProducts()
  }, [])

  function handleAddCartItem( product: ProductsProps){
    addItemCart(product)
  }

  return (
    <main className=" w-full max-w-7xl px-4 mx-auto">
      <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => (
          <section key={product.id} className="w-full">
            <img
              className="w-full rounded-lg max-h-72 mb-2"
              src={product.cover}
              alt={product.title}
            />
            <p className="font-medium mt-1 mb-2">{product.title}</p>

            <div className="flex gap-3 items-center">
              <strong className="text-zinc-700/90">{product.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
              })}</strong>
              <button onClick={() => handleAddCartItem(product)} className="bg-zinc-900 p-1 rounded">
                <BsCartPlus size={20} color="#FFF" />
              </button>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}