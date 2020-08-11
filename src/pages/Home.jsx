import React from "react";
import { Categories, Sortmenu,ProductBLock } from "../components";

export default function Home({items}) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={["Шаурма", "Бургеры", "Хот-доги", "Сэндвичи"]} />
        <Sortmenu items={[{name: "популярности", type: "popular"},{name: "цене", type: "price"}]} />
      </div>
      <h2 className="content__title">Вкусная еда</h2>
      <div className="content__items">
        {
          items.map(obj => <ProductBLock key={obj.id} obj={obj}/>)
        }
        </div>
    </div>
  );
}
