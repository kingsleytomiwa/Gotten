import Filter from '../pageComponent/Filter'
import useBookContext from '../context/bookContext'
import Loading from '../Layout/Loading'
import AllBooks from '../pageComponent/AllBooks'

const Home = () => {
  const { loading, pagedBooks } = useBookContext()

  if (loading) {
    return <Loading />
  }

  return (
    <section className='my-6 w-[90%] max-w-5xl mx-auto'>
      <Filter />
      {pagedBooks.length < 1 ? (
        <h2 className='text-center py-20'>No Books Found</h2>
      ) : (
        <AllBooks />
      )}
    </section>
  )
}

export default Home
