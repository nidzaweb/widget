import { WidgetHeader } from '../item-selector-header/WidgetHeader';
import { WidgetFooter } from '../item-selector-footer/WidgetFooter';
import { FilterBar } from '../item-selector-filter/FilterBar';
import { ItemList } from '../item-list/ItemList';

export function ItemSelectorTable() {
  return (
    <div className="widget">
      <WidgetHeader />
      <FilterBar />
      <ItemList />
      <WidgetFooter />
    </div>
  );
}
