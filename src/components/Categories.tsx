type CategoriesProps = {
  value: number;
  onClickCategory: (tabNum: number) => void;
};

export const Categories: React.FC<CategoriesProps> = (props) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Грилль",
    "Острые",
    "Закрытые",
  ];

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
};
