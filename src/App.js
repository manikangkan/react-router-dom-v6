import { Route, Routes } from "react-router-dom";
import { About } from "./comps/About";
import { Admin } from "./comps/Admin";
import { FeaturedProducts } from "./comps/FeaturedProducts";
import { Home } from "./comps/Home";
import { Navbar } from "./comps/Navbar";
import { NewProducts } from "./comps/NewProducts";
import { NoMatch } from "./comps/NoMatch";
import { OrderSummary } from "./comps/OrderSummary";
import { Products } from "./comps/Products";
import { UserDetail } from "./comps/UserDetail";
import { Users } from "./comps/Users";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetail />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <p className="copyright">
          Copyright 2k22 Manikangkan Das | <a href="asity.tech">asity.tech</a>
        </p>
      </div>
    </>
  );
}

export default App;
