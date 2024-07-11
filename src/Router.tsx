import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { PaymentMethod } from "./pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<PaymentMethod />} />
      </Route>
    </Routes>
  );
};
