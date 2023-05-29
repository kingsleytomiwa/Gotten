import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useBookContext from '../context/bookContext'
import Loading from '../Layout/Loading'
import dayjs from 'dayjs'

const SingleBook = () => {
  const { fetchSingleBook, singleLoading, singleBook } = useBookContext()

  const { slug } = useParams()

  useEffect(() => {
    fetchSingleBook(slug)
  }, [slug])

  if (singleLoading) {
    return <Loading />
  }

  if (!singleBook) {
    return (
      <section className='w-[90%] max-w-md grid items-center justify-center mx-auto'>
        <h2 className='text-center py-20'>this book cannot be found</h2>
        <Link
          to='/'
          className='trans bg-[#d7bb3e] p-2 text-center rounded-md text-white text-lg hover:bg-[#d7bb3e]/70'
        >
          Back Home
        </Link>
      </section>
    )
  }

  const { title, image, desc, authors, genre, date } = singleBook

  return (
    <main className='w-[90%] max-w-4xl mx-auto py-20'>
      <Link
        to='/'
        className='trans bg-[#d7bb3e] px-3 py-2 uppercase text-base text-white tracking-wider rounded-md hover:bg-black'
      >
        back to HomePage
      </Link>
      <div className='md:grid md:grid-cols-2 md:gap-16 md:items-center my-12'>
        <div className='mb-6'>
          <img
            src={image}
            alt={title}
            className='w-full h-[300px] sm:h-[600px] md:h-[500px] rounded-md'
          />
        </div>
        <section>
          <h2 className='tracking-wider font-bold mb-4'>{title}</h2>
          <p className='text-black/70 mb-4'>{desc}</p>

          <p className='mb-6  grid grid-cols-[125px_1fr] capitalize'>
            <span className='font-semibold'> Authors</span>
            <span className='flex flex-wrap'>
              {authors.map((author, i) => {
                return (
                  <span key={i} className='pr-3'>
                    {author}
                  </span>
                )
              })}
            </span>
          </p>
          <p className='mb-6 w-[600px] grid grid-cols-[125px_1fr] capitalize'>
            <span className='font-semibold'>Date Published</span>
            {dayjs(date).format('DD MMM, YYYY')}
          </p>
          <p className='mb-6 w-[600px] grid grid-cols-[125px_1fr] capitalize'>
            <span className='font-semibold'>Genre</span>
            <span>
              {genre.map((gen, i) => {
                return (
                  <span key={i} className='pr-3'>
                    {gen}
                  </span>
                )
              })}
            </span>
          </p>

          <hr className='border-black/20' />
        </section>
      </div>
    </main>
  )
}

export default SingleBook
