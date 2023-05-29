import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='w-[90%] max-w-md grid items-center justify-center mx-auto'>
      <h2 className='text-center py-20'>this page cannot be found</h2>
      <Link
        to='/'
        className='trans bg-[#d7bb3e] p-2 text-center rounded-md text-white text-lg hover:bg-[#d7bb3e]/70'
      >
        Back Home
      </Link>
    </section>
  )
}

export default Error
