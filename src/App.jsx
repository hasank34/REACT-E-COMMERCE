import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageContainer from "./containers/PageContainer";
import Navbar from "./components/navbar/Navbar";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </div>
  );
};

export default App;
