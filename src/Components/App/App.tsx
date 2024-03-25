import './App.module.scss'
import Header from "../Header/Header.tsx";
import Product from "../Product/Product.tsx";
import style from './App.module.scss'
function App() {


	return (
		<main className={style.app}>
      <Header/>
      <Product/>
    </main>
)
}

export default App
