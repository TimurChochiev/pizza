import { memo } from "react";

type CategoriesProps = {
  value: number;
  onClickCategory: (tabNum: number) => void;
};
const categories = [
  "Все",
  "Мясные",
  "Вегетарианские",
  "Грилль",
  "Острые",
  "Закрытые",
];

export const Categories: React.FC<CategoriesProps> = memo((props) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((tab, tabNum) => (
          <li
            onClick={() => props.onClickCategory(tabNum)}
            className={props.value === tabNum ? "active" : ""}
            key={tabNum}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
});
