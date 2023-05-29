import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='min-h-[calc(100vh-150px)]'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
