import { useItemSelector } from '../../context/item-selector/ItemSelectorContext';
import { Item } from '../item-row/Item';

export function ItemList() {
  const { visibleItems } = useItemSelector();

  if (visibleItems.length === 0) {
    return (
      <div className="item-list">
        <p>No items found.</p>
      </div>
    );
  }

  return (
    <div className="item-list">
      {visibleItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
