import React, { memo, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setSortType, sortTypeSelector } from "../redux/slices/filterSlice";

type SortTypeItem = {
  id: number;
  name: string;
  sortBy: "title" | "price" | "rating";
  order: "desc" | "asc";
};

export const sortTypes: SortTypeItem[] = [
  {
    id: 0,
    name: "популярности (по убыванию)",
    sortBy: "rating",
    order: "desc",
  },
  {
    id: 1,
    name: "популярности (по возрастанию)",
    sortBy: "rating",
    order: "asc",
  },
  { id: 2, name: "цене (по убыванию)", sortBy: "price", order: "desc" },
  { id: 3, name: "цене (по возрастанию)", sortBy: "price", order: "asc" },
  { id: 4, name: "алфавиту (по убыванию)", sortBy: "title", order: "desc" },
  { id: 5, name: "алфавиту (по возрастанию)", sortBy: "title", order: "asc" },
];

export const Sort: React.FC = memo(() => {
  const dispatch = useDispatch();
  const sortType = useSelector(sortTypeSelector);
  const sortRef = useRef<HTMLDivElement>(null);

  const [sortIsOpen, setSortIsOpen] = useState(false);

  const openHandler = () => {
    setSortIsOpen(!sortIsOpen);
  };

  const onClickSort = (obj: SortTypeItem) => {
    dispatch(setSortType(obj));
  };

  useEffect(() => {
    const outsideClickHandler = (event: MouseEvent) => {
      const _event = event as MouseEvent & {
        path: Node[];
      };
      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setSortIsOpen(false);
      }
    };
    document.body.addEventListener("click", outsideClickHandler);

    return () => {
      document.body.removeEventListener("click", outsideClickHandler);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={openHandler}>{sortType.name}</span>
      </div>
      {sortIsOpen && (
        <div className="sort__popup">
          <ul onClick={openHandler}>
            {sortTypes.map((el, i) => (
              <li
                key={i}
                onClick={() => onClickSort(el)}
                className={sortType.name === el.name ? "active" : ""}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
