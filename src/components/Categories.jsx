import { useState } from "react";

export function Categories() {
  const [activeTab, setActiveTab] = useState(0);

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
            onClick={() => setActiveTab(tabNum)}
            className={activeTab === tabNum ? "active" : ""}
            key={tabNum}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
}
