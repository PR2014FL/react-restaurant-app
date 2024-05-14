import { useState } from 'react';
import './App.css';
import { MENU_ITEMS } from './data/menu';
import MenuPage from './components/MenuPage';
import MenuItemPage from './components/MenuItemPage';

function App() {

  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  return (
    <div className="App">
      <MenuPage menuItems={MENU_ITEMS} setMenuItem={setSelectedMenuItem}/>
      <MenuItemPage menuItem={selectedMenuItem}/>
    </div>
  );
}

export default App;
