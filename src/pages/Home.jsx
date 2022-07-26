import axios from "axios";

import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaCard } from "../components/PizzaBlock";
import { PlaceHolder } from "../components/PizzaBlock/PlaceHolder";
import { Pagination } from "../components/Pagination/Pagination";

import { useState, useEffect, useContext } from "react";
import { searchContext } from "../App";

export function Home(props) {
  const { searchValue } = useContext(searchContext);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryTab, setCategoryTab] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности (по убыванию)",
    sort: "rating",
    order: "desc",
  });

  useEffect(() => {
    async function pizzaFetch() {
      try {
        setIsLoading(true);
        const [pizzaRes] = await Promise.all([
          axios.get(
            `https://62b9c7c041bf319d22855607.mockapi.io/pizzas?page=${currentPage}&limit=3${
              categoryTab > 0 ? `&category=${categoryTab}` : ``
            }&sortBy=${sortType.sort}&search=${searchValue}&order=${
              sortType.order
            } `
          ),
        ]);
        setIsLoading(false);

        setPizzas(pizzaRes.data);
      } catch (error) {
        console.error(error);
      }
    }
    pizzaFetch();
    window.scrollTo(0, 0);
  }, [categoryTab, sortType, searchValue, currentPage]);

  const pizzasCards = pizzas.map((el) => (
    <PizzaCard
      key={el.id}
      title={el.title}
      price={el.price}
      imageUrl={el.imageUrl}
      sizes={el.sizes}
      types={el.types}
    />
  ));

  const placeHolder = [...new Array(6)].map((_, index) => (
    <PlaceHolder key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryTab}
          onClickCategory={(tab) => setCategoryTab(tab)}
        />
        <Sort value={sortType} onClickSort={(sortId) => setSortType(sortId)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? placeHolder : pizzasCards}
      </div>
      <Pagination onChangePage={(num) => setCurrentPage(num)} />
    </div>
  );
}
