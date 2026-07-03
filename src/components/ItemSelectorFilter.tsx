import { Input } from '../shared/ui/input/Input';
import { Select } from '../shared/ui/dropdown/Dropdown';
import { useItemSelector } from '../context/item-selector/ItemSelectorContext';
import type { ElementNumberFilter } from '../context/item-selector/ItemSelectorTypes';
import { FILTER_OPTIONS } from '../shared/constants';

const filterOptions = [
  { label: 'No filter', value: FILTER_OPTIONS.ALL },
  { label: '> 100', value: FILTER_OPTIONS.GT_100 },
  { label: '> 2500', value: FILTER_OPTIONS.GT_2500 },
  { label: '> 10000', value: FILTER_OPTIONS.GT_10000 },
];

export function ItemSelectorFilter() {
  const {
    searchValue,
    elementNumberFilter,
    setSearchValue,
    setElementNumberFilter,
  } = useItemSelector();

  return (
    <div className="widget-filter">
      <div className="widget-filter-content">
        <div className="widget-filter-search">
          <label htmlFor="search">Search</label>
          <Input
            type="text"
            id="search"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
        <div className="widget-filter-dropdown">
          <label htmlFor="element-filter">Filter</label>
          <Select
            id="element-filter"
            options={filterOptions}
            value={elementNumberFilter}
            onChange={(event) =>
              setElementNumberFilter(event.target.value as ElementNumberFilter)
            }
          />
        </div>
      </div>
    </div>
  );
}
