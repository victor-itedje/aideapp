import "./App.css";
import SignIn from "./pages/signin";
import SignUp from "./pages/signuppage";
import NavigationBar from "./components/navbar";
import HeroSection from "./components/hero";
import ProductSection from "./components/productssection";
import CartPage from "./pages/cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import VendorList from "./pages/vendors";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductSection />} />
            <Route path="products" element={<ProductSection />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="vendors" element={<VendorList />} />
            {/* Add other routes as needed */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
