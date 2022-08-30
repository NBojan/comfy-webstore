import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { About, Cart, Checkout, ErrorPage, Homepage, Products, SingleProduct, AuthWrapper, PrivateRoute } from "./pages";
import {Navbar, Footer, Sidebar} from "./components";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="about" element={<About />}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="products" element={<Products />}/>
          <Route path="products/:id" element={<SingleProduct />}/>
          <Route path="checkout" element={<PrivateRoute><Checkout /></PrivateRoute>}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
