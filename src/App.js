
import {  useState } from 'react';
import './App.css';
import Header from './layout/Header';
import Product from './Products/Product';
import Cart from './Cart/Cart';
import Cartprovider from './Store/CartProvider';
import {  RouterProvider, createBrowserRouter,  } from 'react-router-dom';
import Homepage from './Pages/Home/Home';
import AboutPage from './Pages/About/About';
import RootLayout from './Root';
import Footer from './Components/Footer/Footer';
// const routeDefinitions = createRoutesFromElements(

//   // <Route>
//   //   <Route path="/Home" elements={<Homepage />} />
//   //   <Route path="/Abouts" element={<AboutPage />} />


//   // </Route>
// )

// const router = createBrowserRouter(routeDefinitions)

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/Home', element: <Homepage /> },
      { path: '/Abouts', element: <AboutPage /> },
    ],
  },
]);


function App() {

  const [cartIsShown, setCartIsShown] = useState(false)
  const ShowCartHandler = () => {
    setCartIsShown(true)
  }

  function HideCartHandler() {
    setCartIsShown(false)
  }
  return (
    <>

      <Cartprovider>

        {cartIsShown && <Cart onClose={HideCartHandler} />}

        <Header onShowCart={ShowCartHandler} /> <br /><br /><br />
        <RouterProvider router={router} />

        <main>
          <Product onClick={ShowCartHandler} />
        </main>
        <Footer/>
      </Cartprovider>
    </>

  );
}

export default App;