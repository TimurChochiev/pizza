import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

import "./scss/app.scss";
import { MainLayout } from "./layout/MainLayout";

const Cart = lazy(() => import("./pages/Cart"));
const FullPizza = lazy(() => import("./pages/FullPizza"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div> Загрузка!... </div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizzas/:id"
          element={
            <Suspense fallback={<div>Питсы пока нет</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
