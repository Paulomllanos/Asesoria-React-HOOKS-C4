import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



//* useState => React => solamente sirven para los componentes creado con funciones
//* => variable de estados => el mismo componente es dueño de su propio estado 
//* Sintaxis !!   const [state, setState] = useState(tipo de dato)
//!               const  [estado actual, Funcion Actualizadora] = estado inicial



//* useEffect => React => se ejecuta despues de haber renderizado el componente
//todo:    useEffect(() => {}, [])    [] = dependencias    [] = se ejecuta una sola vez || [users] =  se ejecuta cada vez que cambie users (la dependencia señalada)
//!        useEffect(funcion, dependencias)


const Hooks = ({count, setCount}) => {

  const [image, setImage] = useState('')

  const [users, setUsers] = useState({
    name: 'Diana',
    age: 22,
    phone: 74671234
  })

  const images = [
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80'
  ]
    
    // const navigate = useNavigate()
    // CLICK NOS REDIRIJA A OTRA PAGINA Y EN LA OTRA PAGINA VEAMOS EL VALOR DEL COUNT
  
    const handleCount = () => {
      setCount(count + 1)
      // prev => prev + 1 (estado anterior + 1)
    }

    useEffect(() => {
      setImage(images[count])
    }, [count])

    
    const handleUser = () => {
      setUsers({
        ...users,
        name: 'Fernando',
        age: 27,
        phone: 45993322,
        email: 'f@gmail.com'
      })

    }

    

    
    


    console.log(count)

  return (
    <div>
        <h1>Super Contador de CLicks</h1>
        <h3>LLevas {count} clicks</h3>
        <h2>Nombre: {users.name}, Edad: {users.age}, Telefono: +569 {users.phone}, email: {users.email}</h2>
        <img src={image} alt='...' />
        <button onClick={handleCount}>Click me!</button>
        <button onClick={handleUser}>Actualizar Datos!</button>
    </div>
  )
}

export default Hooks;