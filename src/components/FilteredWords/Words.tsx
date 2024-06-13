const Words = (x: any) => {
  const {
    size,
    sauce,
    flavors

  } = x.objValues;


  const keywords = [sauce, ...flavors, size]




  return (
    <>



      {
        keywords.map((item, i) => (

          <button onClick={() => x.setWords(item)} key={i} className='bg-green-600 rounded-xl px-2 text-white hover:bg-black xl:text-[10px] sm:text-[6px]'>{item}</button>


        ))
      }

    </>
  )

}

export default Words;