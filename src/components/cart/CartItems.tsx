import { ChangeEvent, ReactElement } from "react"
import { ItemType } from "./CartProvider"
import { Action } from "./CartProvider"
import { ActionType } from "./CartProvider"


type PropsType = {
    item: ItemType,
    dispatch: React.Dispatch<Action>,
    ACTION_TYPE: ActionType,
}

const CartItems = ({ item, dispatch, ACTION_TYPE }: PropsType) => {



    const totalPrice: number = (item.qty * item.price)

    const lastOption: number = 40 > item.qty ? 40 : item.qty

    const optionValues: number[] = [...Array(lastOption).keys()].map(i => i + 1)


    const options: ReactElement[] = optionValues.map(val => {
        return <option key={val} value={val}>{val}</option>
    })

    const onChangeQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: ACTION_TYPE.QUANTITY,
            payload: { ...item, qty: Number(e.target.value) }
        })
    }


    return (
        <div className='bg-slate-300 p-6 rounded-[30px]'>
            <div>{item.title}</div>
            <div>price : {item.price}$</div>

            <div className='flex gap-3'>
                <span>
                    Item Quantity :
                </span>
                <select
                    value={item.qty}
                    onChange={onChangeQuantity}
                    className='rounded-full bg-slate-100'
                >{options}</select>
            </div>

            <div >
                total price : {totalPrice}$
            </div>

        </div>

    )



}

export default CartItems