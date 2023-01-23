import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/hooks'>Hooks</NavLink>
    </div>
  )
}


export default Navigation;