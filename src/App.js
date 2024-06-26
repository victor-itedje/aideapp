import "./App.css";
import SignIn from "./pages/signin";
import SignUp from "./pages/signuppage";
import NavigationBar from "./components/navbar";
import HeroSection from "./components/hero";
import ProductSection from "./components/productssection";
import CartPage from "./pages/cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ServiceProviders from "./pages/vendors";
import ChooseUserType from "./pages/landingpage";
import SignUpProvider from "./pages/signupprov";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ChooseUserType />} />
            <Route path="products" element={<ProductSection />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signupprovider" element={<SignUpProvider />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="/vendors/:serviceId" element={<ServiceProviders />} />
            {/* Add other routes as needed */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
