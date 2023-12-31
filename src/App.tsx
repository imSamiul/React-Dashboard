import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Products from "./Components/Products/Products";
import Users from "./pages/users/Users";
import Navbar from "./Components/navbar/Navbar";
import Menu from "./Components/menu/Menu";
import Footer from "./Components/footer/Footer";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/User/User";
import Product from "./Components/Product/Product";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <Products /> },
        { path: "/users", element: <Users /> },
        { path: "/users/:id", element: <User /> },
        { path: "/products/:id", element: <Product /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
