import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./MainLayout/Layout";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import  { SignupForm } from "./Pages/Add";
import NotFound from "./Pages/NotFound";

import WishList from "./Pages/WishList";
import { Updateeee } from "./Pages/Updateeee";
import Basket from "./Pages/Basket";


function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="addadmin" element={<SignupForm />} />
          <Route path="basket" element={<Basket />} />
          <Route path="whislist" element={<WishList />} />
          <Route path="update/:id" element={<Updateeee />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
