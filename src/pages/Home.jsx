import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { setCategoryTab } from "../redux/slices/filterSlice";
import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaCard } from "../components/PizzaBlock";
import { PlaceHolder } from "../components/PizzaBlock/PlaceHolder";
import { Pagination } from "../components/Pagination/Pagination";

import { useState, useEffect, useContext } from "react";
import { searchContext } from "../App";

export function Home() {
  const categoryTab = useSelector((state) => state.filter.categoryTab);
  const sortType = useSelector((state) => state.filter.sortType);

  const dispatch = useDispatch();

  const { searchValue } = useContext(searchContext);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const onClickCategory = (id) => {
    dispatch(setCategoryTab(id));
  };

  useEffect(() => {
    async function pizzaFetch() {
      try {
        setIsLoading(true);
        const [pizzaRes] = await Promise.all([
          axios.get(
            `https://62b9c7c041bf319d22855607.mockapi.io/pizzas?page=${currentPage}&limit=3${
              categoryTab > 0 ? `&category=${categoryTab}` : ``
            }&sortBy=${sortType.sortBy}&search=${searchValue}&order=${
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
        <Categories value={categoryTab} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? placeHolder : pizzasCards}
      </div>
      <Pagination onChangePage={(num) => setCurrentPage(num)} />
    </div>
  );
}
