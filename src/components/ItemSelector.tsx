import { ItemSelectorHeader } from './ItemSelectorHeader';
import { ItemSelectorFooter } from './ItemSelectorFooter';
import { ItemSelectorFilter } from './ItemSelectorFilter';
import { ItemSelectorList } from './ItemSelectorList';

export function ItemSelector() {
  return (
    <div className="widget">
      <ItemSelectorHeader />
      <ItemSelectorFilter />
      <ItemSelectorList />
      <ItemSelectorFooter />
    </div>
  );
}
