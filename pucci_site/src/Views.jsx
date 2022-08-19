import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Adidogs from "./components/Adidogs/Adidogs";
import Bag from "./components/Bag/Bag";
import Checkout from "./components/Checkout/Checkout";
import OrderSettings from "./components/OrderSettings/OrderSettings";
import ProductSettings from "./components/ProductsSettings/ProductSettings";
import UserSettings from "./components/UserSettings/UserSettings";


const Views = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/adidogs" element={<Adidogs />} />
        <Route path="/page-not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} component={<NotFound />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/ordersettings" element={<OrderSettings />} />
        <Route path="/productsettings" element={<ProductSettings />} />
        <Route path="/usersettings" element={<UserSettings />} />
      </Routes>
    </>
  );
};

export default Views;
