import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Adidogs from "./components/Adidogs/Adidogs";
import Bag from "./components/Bag/Bag";

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
        {/* <Route path="/admin" element={<Admin />} />*/}
      </Routes>
    </>
  );
};

export default Views;
