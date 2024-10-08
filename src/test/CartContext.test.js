import {render, screen} from "@testing-library/react"
import { CartProvider } from "../context/CartContext"
import { ProducstList } from "../components/ProducstList"
import { Cart } from "../components/Cart"

describe( "pruebas de funciones en CartContext", () => {
    test(' la lista de productos se renderiza ', () => {
      render(
        <CartProvider>
            <ProducstList/>
        </CartProvider>
      )

      const productList = screen.getByText(/productos/i)
      expect(productList).toBeInTheDocument()

    })

    test('Muestra inicialmente mensaje carrito vacio ', () => {
        render(
            <CartProvider>
                <Cart/>
            </CartProvider>
          )

          const emptyMessage = screen.getByText(/No items in cart/i)
          expect(emptyMessage).toBeInTheDocument()
     })
    
    
} )