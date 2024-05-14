import React from 'react'
import MenuRow from './MenuRow';
import MenuCategoryRow from './MenuCategoryRow';

function MenuTable({menuItems, setter}) {
    const rows = [];
    let lastCategory = null;

    menuItems.forEach((item) => {
        if (item.category !== lastCategory) {
        rows.push(
            <MenuCategoryRow
            category={item.category}
            key={item.category}
            />
        );
    }
    rows.push(
        <MenuRow
        product={item}
        key={item.name}
        setter={setter}
        />
    );
    lastCategory = item.category;
    });

    return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
}

export default MenuTable