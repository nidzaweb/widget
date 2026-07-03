import { Chip } from '../shared/ui/chip/Chip';
import type { Item } from '../shared/types/item';

interface ChipListProps {
  items: Item[];
  action: (itemId: number) => void;
}

export function ChipList({ items, action }: ChipListProps) {
  return (
    <div className="selected-chips">
      {items.map((item) => (
        <Chip key={item.id} removable itemId={item.id} onRemove={action}>
          {item.label}
        </Chip>
      ))}
    </div>
  );
}
