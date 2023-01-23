import { Routes, Route } from 'react-router-dom';
import Home from '../Views/Home';
import Products from '../Views/Products';
import Layout from '../Components/Layout/Layout';
import Hooks from '../Views/Hooks';
import { useState } from 'react';


//*fRAGMENT ES UN CONTENEDOR QUE NO EXISTE EN EL DOM = menos consumo de memoria
const AllRoutes = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Home count={count}/>} />
                <Route path='/products' element={<Products />}/>
                <Route path='/hooks' element={<Hooks count={count} setCount={setCount}/>} />
            </Route>  
        </Routes>
    </div>
  )
}

export default AllRoutes;
