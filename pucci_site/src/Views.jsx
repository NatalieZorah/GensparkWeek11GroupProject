import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Adidogs from "./components/pages/Adidogs";
import Bag from "./components/pages/Bag";
import Checkout from "./components/bag/Checkout";

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
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        {/* <Route path="/admin" element={<Admin />} />*/}
      </Routes>
    </>
  );
};

export default Views;
