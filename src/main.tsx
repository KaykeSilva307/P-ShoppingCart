import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './App.tsx'
// Importa as rotas (Home, Cart, Sobre ...)
import { RouterProvider } from 'react-router-dom'
// Cria de fato o elemento responsavel pelas rotas

import CartProvider from './Contexts/cartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
