import { useReducer, createContext, ReactElement } from 'react'



export type ItemType = {
  id: number,
  title: string,
  price: number,
  qty: number
}


type CartType = {
  cart: ItemType[]
}


const initialState: CartType = {
  cart: []
}



export const ACTION_TYPE = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  QUANTITY: 'QUANTITY'
}


export type ActionType = typeof ACTION_TYPE;


export type Action = {
  type: string,
  payload?: ItemType
}




const reducer = (state: CartType, action: Action): CartType => {

  switch (action.type) {

    case ACTION_TYPE.ADD: {

      if (!action.payload) {
        throw new Error('adding error')
      }

      const { id, title, price } = action.payload;

      const filteredCart: ItemType[] = state.cart.filter(item => item.id !== id);
      const itemExists: ItemType | undefined = state.cart.find(item => item.id === id);
      const qty = itemExists ? itemExists.qty + 1 : 1;

      return { ...state, cart: [...filteredCart, { id, title, price, qty }] }

    }




    case ACTION_TYPE.REMOVE: {

      if (!action.payload) {
        throw new Error('removing error')
      }
      const { id } = action.payload;
      const filteredCart = state.cart.filter(item => item.id !== id)


      return { ...state, cart: [...filteredCart] }

    }





    case ACTION_TYPE.QUANTITY: {

      if (!action.payload) {
        throw new Error('quantity error')
      }
      const { id, qty } = action.payload;

      const itemExists: ItemType | undefined = state.cart.find(item => item.id === id);

      if (!itemExists) {
        throw new Error('itemExists error')
      }

      const updatedItem: ItemType = { ...itemExists, qty };

      const filteredCart: ItemType[] = state.cart.filter(item => item.id !== id);

      return { ...state, cart: [...filteredCart, updatedItem] }
    }

    default: {
      throw new Error('default error')
    }

  }



}




const useCartContext = (initialState: CartType) => {

  const [state, dispatch] = useReducer(reducer, initialState);



  const totalItems = state.cart.reduce((acc, current) => {

    return acc + current.qty
  }, 0)

  const totalPrice = state.cart.reduce((acc, current) => {
    return acc + (current.qty * current.price)
  }, 0)

  const cart = state.cart.sort((a, b) => {

    const itemA = a.id;
    const itemB = b.id;

    return itemA - itemB
  })


  return { dispatch, totalItems, totalPrice, cart }

}




export type UseCartContextType = ReturnType<typeof useCartContext>;




const initCartContextState: UseCartContextType = {
  dispatch: () => { },
  totalItems: 0,
  totalPrice: 0,
  cart: []
}




const CartContext = createContext<UseCartContextType>(initCartContextState);



type ChildrenType = { children?: ReactElement | ReactElement[] }



export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initialState)}>

      {children}

    </CartContext.Provider>
  )
}


export default CartContext