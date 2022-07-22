import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { Sort } from "./components/Sort";
import { PizzaCard } from "./components/PizzaCard";
import { useEffect, useState } from "react";

import "./scss/app.scss";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    try {
      async function pizzaFetch() {
        await fetch("https://62b9c7c041bf319d22855607.mockapi.io/pizzas")
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            setPizzas(res);
          });
      }
      pizzaFetch();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            {/* <Categories /> */}
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((el) => (
              <PizzaCard
                key={el.id}
                title={el.title}
                price={el.price}
                imageUrl={el.imageUrl}
                sizes={el.sizes}
                types={el.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
