import { useContext } from "react"
import CartContext from "../cart/CartProvider"
import { UseCartContextType } from "../cart/CartProvider"

const useCart = (): UseCartContextType => {
    return useContext(CartContext)
}

export default useCart;