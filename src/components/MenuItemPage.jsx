import React from 'react'

function MenuItemPage({menuItem}) {

    const styleMenuPage = {
        border: '2px solid #a52a2a',
        padding: '0 5px 5px 5px',
        marginLeft: '2.5px',
        height: '773.3px',
        backgroundColor: '#a52a2a30'
      };

      function render() {
        if (menuItem) {
            return (
                <div className="menu-container">
                    <div className="menu-item">
                        <h2>{menuItem.name}</h2>
                        <h3>Price</h3>
                        <p>{menuItem.price}</p>
                        <h3>Description</h3>
                        <p>{menuItem.description}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <h1>Select an item from menu on the left.</h1>
            )

        }
      }
  return (
    <section style={styleMenuPage}>
        {render()}

    </section>
  )
}

export default MenuItemPage