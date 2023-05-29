import React, { useContext, useState, useEffect } from 'react'
import { searchAuthors, searchGenres } from '../../utils/utils'

const BooksContext = React.createContext()

export function BooksProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState([])
  const [singleLoading, setSingleLoading] = useState(true)
  const [singleBook, setSingleBook] = useState(null)
  const [page, setPage] = useState(0)
  const [pagedBooks, setPagedBooks] = useState([])
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('all')

  const fetchBooks = async () => {
    const res = await fetch('/data/books.json')
    const data = await res.json()
    return data.map((item, i) => {
      const id = `${item.title
        .slice(0, 15)
        .replace(/ /g, '-')
        .toLowerCase()}-${i}`
      return { id, ...item }
    })
  }

  const storeBooks = async () => {
    setLoading(true)
    const data = await fetchBooks()
    setBooks(data)
    setPagedBooks(paginate(data))
    setLoading(false)
  }

  const fetchSingleBook = async (id) => {
    setSingleLoading(true)
    const data = await fetchBooks()
    const single = data.find((item) => item.id === id)
    setSingleBook(single)
    setSingleLoading(false)
  }

  const paginate = (data) => {
    const perPage = 10
    const allPages = Math.ceil(data.length / perPage)
    return Array.from({ length: allPages }, (_, index) => {
      const start = index * perPage
      return data.slice(start, start + perPage)
    })
  }

  const handleSearch = (value) => {
    setSearch(value)
    setGenre('all')
    setPage(0)
  }

  const searchBooks = () => {
    setLoading(true)
    setGenre('all')
    const newBooks = books.filter((book) => {
      return (
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        searchAuthors(book.authors, search)
      )
    })
    setPagedBooks(paginate(newBooks))
    setLoading(false)
  }

  const searchGenre = (value) => {
    setLoading(true)
    const newBooks =
      value.toLowerCase() === 'all'
        ? books
        : books.filter((book) => searchGenres(book.genre, value))
    setPagedBooks(paginate(newBooks))
    setSearch('')
    setLoading(false)
  }

  useEffect(() => {
    storeBooks()
  }, [])

  return (
    <BooksContext.Provider
      value={{
        loading,
        singleBook,
        singleLoading,
        fetchSingleBook,
        pagedBooks,
        page,
        setPage,
        handleSearch,
        searchBooks,
        searchGenre,
        search,
        genre,
        setSearch,
        setGenre,
        books,
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}

function useBookContext() {
  return useContext(BooksContext)
}

export default useBookContext
