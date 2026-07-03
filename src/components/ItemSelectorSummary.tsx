import { useItemSelector } from '../context/item-selector/ItemSelectorContext';
import { Button } from '../shared/ui/button/Button';
import { ChipList } from './ChipList';

export function ItemSelectorSummary() {
  const { selectedItems, openWidget, removeSelectedItem } = useItemSelector();

  return (
    <div className="items-summary">
      <h2>Select items</h2>
      <p>You currently have {selectedItems.length} selected items</p>
      <ChipList items={selectedItems} action={removeSelectedItem} />
      <Button variant="primary" size="md" onClick={openWidget}>
        Change my choice
      </Button>
    </div>
  );
}
