import { IoIosIceCream } from 'react-icons/io'
import { TbShoppingBag } from 'react-icons/tb'



function Navbar() {
  return (
    <div className='sticky top-0 h-[70px] w-full bg-green-500 flex items-center justify-between'>
      <span className='flex items-center ml-6'>ice cream shop <IoIosIceCream className='text-[30px]' /></span>
      <button>
        <TbShoppingBag className='text-[40px] mr-3 stroke-[0.6px] active:scale-95' />
      </button>
    </div>
  )
}

export default Navbar