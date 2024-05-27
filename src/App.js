import './App.css';
import SignUpProvider from './pages/signin';
import SignUp from './pages/signuppage';
import NavigationBar from './components/navbar';
import HeroSection from './components/hero';
import ProductSection from './components/productssection';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <ProductSection />
    </div>
  );
}

export default App;
