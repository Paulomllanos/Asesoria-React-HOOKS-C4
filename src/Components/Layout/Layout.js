import Navigation from "../../Routes/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";


const Layout = () => {
  return (
    <div>
        <Navigation />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout