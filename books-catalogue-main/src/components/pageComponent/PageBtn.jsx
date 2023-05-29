import useBookContext from '../context/bookContext'

function PageBtn() {
  const { page, setPage, pagedBooks } = useBookContext()

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  const nextBtn = () => {
    setPage((old) => {
      let numb = old + 1
      if (numb > pagedBooks.length - 1) {
        numb = 0
      }
      return numb
    })
    scrollToTop()
  }
  const prevBtn = () => {
    setPage((old) => {
      let numb = old - 1
      if (numb < 0) {
        numb = pagedBooks.length - 1
      }
      return numb
    })
    scrollToTop()
  }

  return (
    <div className='flex justify-center flex-wrap md:mx-auto md:max-w-[700px]'>
      <button
        className='bg-transparent border-transparent font-bold capitalize tracking-widest m-2'
        onClick={prevBtn}
      >
        prev
      </button>
      {pagedBooks.map((_, index) => {
        return (
          <button
            className={`trans w-8 h-8 bg-[#d7bb3e] rounded-md m-2 ${
              index === page && 'bg-white text-[#d7bb3e]'
            }`}
            key={index}
            onClick={() => {
              setPage(index)
              scrollToTop()
            }}
          >
            {index + 1}
          </button>
        )
      })}
      <button
        className='bg-transparent border-transparent font-bold capitalize tracking-widest m-2'
        onClick={nextBtn}
      >
        next
      </button>
    </div>
  )
}
export default PageBtn
