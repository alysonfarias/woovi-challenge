import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} />
    </Routes>
  );
};
