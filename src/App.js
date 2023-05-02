import "./App.css";
import AppBarNavigation from "./components/AppBarNavigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Showcase from "./components/Showcase";
import SubscribePage from "./components/SubscribePage";
import CartPage from "./components/CartPage";
function App() {
  return (
    <div className="App">
      <Router>
        <AppBarNavigation />

        <Routes>
          <Route path="/" element={<Showcase />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SubscribePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
