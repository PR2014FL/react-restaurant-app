import React from 'react'

function MenuRow({product, setter}) {
    const name = product.available ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr onClick={() => setter({...product})}>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default MenuRow