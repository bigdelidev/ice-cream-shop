import useCart from "../../components/hook/useCart"
import CartItems from "./CartItems"
import { ACTION_TYPE } from "./CartProvider"
import { MdDelete } from 'react-icons/md'


const Cart = () => {

    const { dispatch, totalItems, totalPrice, cart } = useCart()


    const onRemove = (product: any) => {

        const { id, title, price, qty } = product;

        dispatch({ type: ACTION_TYPE.REMOVE, payload: { id, title, price, qty } })

    }

    return (
        <div className='mt-28 '>
            <div className='text-center text-[50px] text-green-600'>cart</div>
            <div className='grid grid-cols-4 gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center mt-20'>
                {cart.map(item => {
                    return (
                        <div key={item.id}>
                            <CartItems
                                item={item}
                                dispatch={dispatch}
                                ACTION_TYPE={ACTION_TYPE}
                            />
                            <button onClick={() => onRemove(item)}>
                                <MdDelete className='text-[25px] text-slate-500' />
                            </button>
                        </div>
                    )
                })}
            </div>
            <div className='flex justify-around text-green-600 text-[30px] sm:text-[20px]'>
                <p>Total Items: {totalItems}</p>
                <p>Total Price: {totalPrice}$</p>
            </div>





        </div>
    )


}
export default Cart