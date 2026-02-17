import { PaginationPage } from './presentation/components/PaginationPage'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './App.css'

function App() {

  return (
    <>
    <Provider store={store} >
      <PaginationPage />
    </Provider>
    </>
  )
}

export default App
