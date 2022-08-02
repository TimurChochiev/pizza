import { useSelector, useDispatch } from "react-redux";

import {
  filterSelector,
  setCategoryTab,
  setCurrentPage,
} from "../redux/slices/filterSlice";
import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaCard } from "../components/PizzaBlock";
import { PlaceHolder } from "../components/PizzaBlock/PlaceHolder";
import { Pagination } from "../components/Pagination/Pagination";

import { useEffect } from "react";

import { fetchPizzas } from "../redux/slices/pizzasSlice";

export function Home() {
  const { categoryTab, sortType, currentPage, searchValue } =
    useSelector(filterSelector);
  const { pizzas, status } = useSelector((state) => state.pizzas);

  const dispatch = useDispatch();

  const onClickCategory = (id) => {
    dispatch(setCategoryTab(id));
  };

  const onChangePage = (tabId) => {
    dispatch(setCurrentPage(tabId));
  };

  async function getPizzas() {
    dispatch(fetchPizzas({ categoryTab, sortType, searchValue, currentPage }));
    window.scroll(0, 0);
  }

  useEffect(() => {
    getPizzas();
  }, [categoryTab, sortType, searchValue, currentPage]);

  const pizzasCards = pizzas.map((el) => <PizzaCard key={el.id} {...el} />);

  const placeHolder = [...new Array(6)].map((_, index) => (
    <PlaceHolder key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryTab} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === "loading" ? placeHolder : pizzasCards}
      </div>
      <Pagination value={currentPage} onChangePage={onChangePage} />
    </div>
  );
}
