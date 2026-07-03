import { Chip } from '../../shared/ui/chip/Chip';
import type { Item } from '../../shared/types/item';

interface SelectedItemsProps {
  items: Item[];
  action: (itemId) => void;
}

function SelectedItems({ items, action }: SelectedItemsProps) {
  const removeItem = (itemId: number) => {
    action(itemId);
  };

  return (
    <div className="selected-chips">
      {items.map((item) => (
        <Chip key={item.id} removeable itemId={item.id} onRemove={removeItem}>
          {item.label}
        </Chip>
      ))}
    </div>
  );
}

export default SelectedItems;
