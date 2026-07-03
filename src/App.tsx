import { ItemSelectorTable } from './components/item-selector-table/ItemSelectorTable';
import { ItemsSummery } from './components/selected-items-summary/ItemsSummery';
import './styles/global.css';
import { useItemSelector } from './context/item-selector/ItemSelectorContext';

function App() {
  const { isOpen } = useItemSelector();

  return (
    <main className="app">
      <ItemsSummery />
      {isOpen && <ItemSelectorTable />}
    </main>
  );
}

export default App;
