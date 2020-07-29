import React from "react";

export default function Categories({ items, onClick }) {
  const [activeElement, setActiveElement] = React.useState(null);

  const onSelectItem = (select) => {
    setActiveElement(select)
      }

  return (
    <div className="categories">
      <ul>
        <li className={activeElement === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
        {items && items.map((item, index) => (
          <li className={activeElement === index ? 'active' : ''} 
          onClick={() => onSelectItem(index)} key={`${item}_${index}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
