import React from 'react'

function MenuCategoryRow({category}) {
    return (
        <tr>
          <th colSpan="2">
            {category}
          </th>
        </tr>
      );
}

export default MenuCategoryRow