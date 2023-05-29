import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

const Item = ({ book }) => {
  const { title, image, authors, date, genre, id } = book
  return (
    <article className='mb-8'>
      <Link to={`/book/${id}`}>
        <img src={image} alt={title} className='w-full max-h-96' />
        <div className='w-full max-w-[500px] bg-black/50 text-white py-4 tracking-widest h-48'>
          <div className='w-[90%] mx-auto grid text-xs'>
            <h4 className='text-center mb-4'>{title}</h4>
            <span className='mb-3'>
              By{' '}
              {authors.map((author, i) => {
                return (
                  <span key={i} className='text-black pr-3'>
                    {author}
                  </span>
                )
              })}
            </span>
            <span className='mb-3'>
              {' '}
              Date Published: <span>{dayjs(date).format('DD MMM, YYYY')}</span>
            </span>
            <span>
              Genre:{' '}
              {genre.map((gen, i) => {
                return (
                  <span key={i} className='text-black pr-3'>
                    {gen}
                  </span>
                )
              })}
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default Item
