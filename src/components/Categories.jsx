import React from "react";

// export default class Categories extends React.Component {
//   state = {
//     activeElement: 3,
//   };

//   onSelectItem = (select)=> {
//     this.setState({
//         activeElement: select,
//     })
//   }

//   render() {
//     const { items, onClick } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li>Все</li>
//           {items.map((item, index) => (
//             <li className={this.state.activeElement === index ? 'active' : ''}
//             onClick={() => this.onSelectItem(index)} key={`${item}_${index}`}>
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

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
