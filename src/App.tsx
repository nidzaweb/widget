import { ItemSelector } from './components/ItemSelector';
import { ItemSelectorSummary } from './components/ItemSelectorSummary';
import { useItemSelector } from './context/item-selector/ItemSelectorContext';
import './styles/global.css';

function App() {
  const { isOpen } = useItemSelector();

  return (
    <main className="app">
      <ItemSelectorSummary />
      {isOpen && <ItemSelector />}
    </main>
  );
}

export default App;
