import PaginationPage from './presentation/components/PaginationPage'
import ProductDetail from './presentation/components/ProductDetail'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
    <>
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaginationPage />} />
            <Route path="/detail" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
