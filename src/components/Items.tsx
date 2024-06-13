import { Action, ActionType } from './cart/CartProvider'





type PropsType = {
    items: any,
    dispatch: React.Dispatch<Action>,
    ACTION_TYPE: ActionType
}




const Items = ({ items, dispatch, ACTION_TYPE }: PropsType) => {


    const addItemsToCart = (product: any) => {

        const { id, title, price, qty } = product;

        dispatch({ type: ACTION_TYPE.ADD, payload: { id, title, price, qty } })

    }


    return (
        <>
            {
                items.map((item: any, i: any) => (
                    <div key={i} className='flex flex-col items-center'>
                        <span className='text-green-600'>{item.title}</span>

                        <img src={item.img} className='h-[200px] xxl:h-[150px] mt-2 ml-2 rounded-[30px] xxl:rounded-[20px] sm:rounded-[10px]' />
                        <div className='flex gap-6 items-center mt-2'>
                            <>{item.price}$</>
                            <button onClick={() => addItemsToCart(item)} className='bg-slate-200 rounded-lg px-2 active:scale-95'>buy</button>

                        </div>
                    </div>
                ))
            }

        </>
    )

}

export default Items;