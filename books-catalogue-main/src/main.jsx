import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BooksProvider } from './components/context/bookContext'
import Layout from './components/Layout/Layout'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BooksProvider>
      <Layout>
        <App />
      </Layout>
    </BooksProvider>
  </React.StrictMode>
)
