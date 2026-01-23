
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col mt-16">
      <h1 className="font-bold text-2xl">Erro 404!</h1>
      <h2 className="font-medium">Página não encontrada</h2>
      <Link
        className="bg-slate-600 my-3 px-3 p-1 text-white font-medium rounded"
        to='/'>
        Acessar produtos
      </Link>
    </div>
  )
}