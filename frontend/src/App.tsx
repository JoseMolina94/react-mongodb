import MainPage from './pages/main';
import ProductManageContextProvider from './contexts/ProductManageContext';

import './App.css';
import './styles/index.css'

function App() {
  return (
    <ProductManageContextProvider>
      <MainPage />
    </ProductManageContextProvider>
  )
}

export default App;
