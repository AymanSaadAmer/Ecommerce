import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componets/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './componets/Layout/Layout'
import About from './componets/About/About'
import Brands from './componets/Brands/Brands';
import Cart from './componets/Cart/Cart';
import Categories from './componets/Categories/Categories';
import Login from './componets/Login/Login';
import Footer from './componets/Footer/Footer';
import Prodects from './componets/Prodects/Prodects';
import Register from './componets/Register/Register';
import Notfound from './componets/Notfound/Notfound';
import { UserContextProvider } from './Context/CounterContext'
import ProtectedRoute from './componets/protectedRoute/protectedRoute'
import ProdectDetails from './componets/ProdectDetails/ProdectDetails'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { CartContextProvider } from './Context/CartContext'
import toast, { Toaster } from 'react-hot-toast';


let Query =new QueryClient();

let x= createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element: <ProtectedRoute><Home/></ProtectedRoute>},
    {path:'About',element:<ProtectedRoute><About/></ProtectedRoute> },
    {path:'Brands',element:<ProtectedRoute><Brands/></ProtectedRoute> },
    {path:'Cart',element:<ProtectedRoute> <Cart/></ProtectedRoute>},
    {path:'Categories',element:<ProtectedRoute><Categories/></ProtectedRoute> },
    {path:'Login',element:<Login/>},
    {path:'Prodects',element:<ProtectedRoute><Prodects/></ProtectedRoute> },
    {path:'ProdectDetails/:id/:category',element:<ProtectedRoute><ProdectDetails/></ProtectedRoute> },
    {path:'Register',element:<Register/>},
    {path:'Footer',element:<Footer/>},
    {path:'*',element:<Notfound/>}
  ]}
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CartContextProvider>
    <QueryClientProvider client={Query}>
      <UserContextProvider>
          <RouterProvider router={x}></RouterProvider>
          <Toaster/>
          <ReactQueryDevtools/>
      </UserContextProvider>
    </QueryClientProvider>
    </CartContextProvider>
    </>
  )
}

export default App
