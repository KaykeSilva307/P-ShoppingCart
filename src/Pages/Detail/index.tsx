
import { useContext } from "react"
import { CartContext } from "../../Contexts/cartContext"

export function Detail() {
  const { cart } = useContext(CartContext)

  // Em processo de construção

  return (
    <>
      {cart.map((item) => (
        <section key={item.id}>
          <div><img className="w-24 h-24" src={item.cover} alt="Imagem do produto" /></div>
          <div>teste</div>
        </section>))}
    </>
  )


}