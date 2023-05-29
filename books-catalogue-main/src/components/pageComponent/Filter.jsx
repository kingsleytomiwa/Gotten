import { useEffect } from 'react'
import useBookContext from '../context/bookContext'
import { uniqueValues } from '../../utils/utils'

const Filter = () => {
  const {
    books,
    searchBooks,
    searchGenre,
    search,
    setSearch,
    genre,
    setGenre,
  } = useBookContext()

  useEffect(() => {
    searchBooks(search)
  }, [search])
  useEffect(() => {
    searchGenre(genre)
  }, [genre])

  return (
    <section className='my-4 grid items-center justify-center'>
      {/* Filter by author or title */}
      <div className='w-full'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Enter title or author'
            className='bg-transparent border border-[#d7bb3e] px-2 py-1 w-[90%] mx-auto'
          />
        </form>
      </div>
      {/* Filter by genre */}

      <div className='my-4'>
        <h3 className='my-2 font-semibold text-center'>Select a Genre</h3>
        <div className='flex flex-wrap gap-x-2 gap-y-1'>
          {uniqueValues(books).map((item, index) => {
            return (
              <button
                className={`block border border-[#d7bb3e] px-2 py-1 mb-2 rounded-md capitalize tracking-wider ${
                  item === genre && 'bg-[#d7bb3e] text-white'
                }`}
                key={index}
                onClick={(e) => setGenre(e.target.textContent)}
              >
                {item}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Filter
