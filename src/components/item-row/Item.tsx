import type { Item } from '../../shared/types/item';
import { Checkbox } from '../../shared/ui/checkbox/Checkbox';
import { useItemSelector } from '../../context/item-selector/ItemSelectorContext';

export function Item({ item }: { item: Item }) {
  const { toggleDraftItem, draftSelectedItemIds, isMaxItemsSelected } =
    useItemSelector();

  // const isDisabled = useMemo(() => first, [second])

  const isDisabled =
    isMaxItemsSelected && !draftSelectedItemIds.includes(item.id);

  const isChecked = draftSelectedItemIds.includes(item.id);

  return (
    <div className={`item ${isDisabled ? 'disabled' : ''}`}>
      <Checkbox
        checked={isChecked}
        onChange={() => toggleDraftItem(item.id)}
        disabled={isDisabled}
      />
      {item.label}
    </div>
  );
}
