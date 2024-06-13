import { useEffect, useState } from 'react'
import Words from './Words'
import useCart from '../../components/hook/useCart';
import { ACTION_TYPE } from '../cart/CartProvider';


type PropsType = {
  data: any,
  add: any,
  keyWords: string[]
}

function FilteredData({ data, add, keyWords }: PropsType) {

  const [filteredData, setFilteredData] = useState([]);



  const { dispatch } = useCart();



  const addItemsToCart = (product: any) => {

    const { id, title, price, qty } = product;

    dispatch({ type: ACTION_TYPE.ADD, payload: { id, title, price, qty } })

  }

  const filteringData = () => {
    if (keyWords) {
      const newData = data.filter((d: any) => {
        return keyWords.every((item) => {
          return (
            d.size === item ||
            d.sauce === item ||
            d.flavors.includes(item)
          )
        })
      })
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  }

  useEffect(() => {
    filteringData();
  }, [keyWords])


  return (

    <>
      {filteredData.map((d: any, i) => {
        return (
          <div key={i} className=' w-[70%] md:w-[90%] bg-green-400 rounded-[30px] p-3'>
            <div className='flex justify-between items-center'>

              <div className='flex items-center gap-5'>
                <img src={d.img} className='h-[100px] xl:h-[80px] md:h-[60px] rounded-[30px] xxl:rounded-[20px] sm:rounded-[10px]' />
                <span className='text-[20px] xl:text-[15px] md:text-[10px] sm:text-[7px]'>{d.title}</span>

              </div>

              <div className='flex gap-2 mr-8 lg:mr-0'>
                <Words objValues={d} setWords={add} />
              </div>
            </div>

            <div className='flex justify-center gap-3 xl:text-[13px] sm:text-[10px]'>
              <div className='bg-slate-400 text-white rounded-xl px-2'>{d.price}$</div>
              <button onClick={() => addItemsToCart(d)} className='text-white bg-slate-700 rounded-xl px-2 active:scale-95' >buy</button>
            </div>


          </div>
        )
      })}

    </>
  )

}
export default FilteredData;