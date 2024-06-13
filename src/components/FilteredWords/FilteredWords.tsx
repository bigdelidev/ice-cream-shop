import { useState } from 'react'
import FilteredData from './FilteredData'
import { Special } from '../../components/data/data'
import Header from './Header'


function FilteredWords() {

  const [filteredWords, setFilteredWords]: any = useState([])


  const deleteKeyword = (data: any) => {
    const newWords = filteredWords.filter((item: any) => item !== data);
    setFilteredWords(newWords);
  };

  const clearAll = () => {
    setFilteredWords([]);
  };


  const addFilterWords = (item: any) => {
    if (!filteredWords.includes(item)) {
      setFilteredWords([...filteredWords, item])
    }

  }

  return (
    <>
      <div className='text-center text-[30px] text-green-600'>special</div>

      <div className='flex justify-center mt-4'>
        <Header
          words={filteredWords}
          removeWords={deleteKeyword}
          clearAll={clearAll}
        />
      </div>
      <div className='flex flex-col items-center gap-10 mt-10'>
        <FilteredData
          data={Special}
          add={addFilterWords}
          keyWords={filteredWords}
        />

      </div>
    </>
  )
}

export default FilteredWords;