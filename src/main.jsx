import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import{
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'
import { Home } from './pages/Home';
import { Account } from './pages/Account';
import { Detail } from './pages/Detail';
import { Shop } from './pages/Shop';
import { CheckOut } from './pages/CheckOut';
import Billing from './components/Cart/Billing';
import { BillingDetails } from './pages/BillingDetails';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/profile',
    element: <Account/>
  },
  {
    path:'/detail',
    element: <Detail/>
  },
  {
    path:'/shopnow',
    element: <Shop/>
  },
  {
    path:'/cart',
    element: <CheckOut/>
  },
  {
    path:'/checkout',
    element: <BillingDetails/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
