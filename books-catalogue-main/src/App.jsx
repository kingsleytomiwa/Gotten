import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './components/pages/Error'
import Home from './components/pages/Home'
import SingleBook from './components/pages/SingleBook'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book/:slug' element={<SingleBook />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
