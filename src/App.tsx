import Navbar from './components/Navbar';
import Cart from './components/cart/Cart'
import FilteredWords from "./components/FilteredWords/FilteredWords";
import Products from './components/data/data'
import useCart from "./components/hook/useCart"
import { ACTION_TYPE } from "./components/cart/CartProvider";
import Items from './components/Items';
import Footer from './components/Footer';


const App = () => {
  const { dispatch } = useCart();

  return (

    <>
      <Navbar />

      <div className='grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 justify-items-center mt-12 gap-10'>
        <Items items={Products}
          dispatch={dispatch}
          ACTION_TYPE={ACTION_TYPE}
        />
      </div>

      <div className='mt-20'>
        <FilteredWords />
      </div>
      <Cart />
      <Footer />


    </>
  )


}



export default App;


