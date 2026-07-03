import { memo } from 'react';
import type { Item } from '../shared/types/item';
import { Checkbox } from '../shared/ui/checkbox/Checkbox';
import { useItemSelector } from '../context/item-selector/ItemSelectorContext';

export const ItemSelectorRow = memo(function ItemSelectorRow({
  item,
}: {
  item: Item;
}) {
  const { toggleDraftItem, draftSelectedItemIds, isMaxItemsSelected } =
    useItemSelector();

  const isDisabled =
    isMaxItemsSelected && !draftSelectedItemIds.includes(item.id);

  const isChecked = draftSelectedItemIds.includes(item.id);

  return (
    <div className={`widget-item${isDisabled ? ' widget-item--disabled' : ''}`}>
      <Checkbox
        label={item.label}
        checked={isChecked}
        onChange={() => toggleDraftItem(item.id)}
        disabled={isDisabled}
      />
    </div>
  );
});
