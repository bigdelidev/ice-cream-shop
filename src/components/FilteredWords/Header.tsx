import { IoClose } from "react-icons/io5";




type PropsType = {
  words: string[],
  removeWords: any,
  clearAll: any
}


const Header = ({ words, removeWords, clearAll }: PropsType) => {
  return (
    <div className="flex flex-wrap gap-6 border-[4px] border-green-900 w-[80%] sm:w-[90%] rounded-full p-4 justify-between">

      {words.map((item, i) => {
        return (
          <div key={i} className='flex items-center rounded-full bg-green-700 px-3 gap-2'>
            <span className='text-[30px] xl:text-[20px] md:text-[15px] sm:text-[7px] text-white'>{item}</span>
            <button onClick={() => removeWords(item)} className=''>
              <IoClose className='text-[40px] xl:text-[30px] md:text-[20px] text-white mt-2 md:mt-1 hover:text-black' />
            </button>
          </div>
        );
      })}
      {
        words.length == 0 && (<>please select at least one option</>)
      }
      <button onClick={() => clearAll()} className='text-red-800 text-[18px] md:text-[12px]'>
        clear all
      </button>

    </div>
  );
};

export default Header;
