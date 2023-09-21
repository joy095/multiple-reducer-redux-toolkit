import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import ProductList from "./pages/products/ProductList";
import UserProfile from "./pages/users/UserProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Index />} />
        <Route path="users">
          <Route index element={<UserProfile />} />
        </Route>
        <Route path="products">
          <Route index element={<ProductList />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
