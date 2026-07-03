import { Input } from '../../shared/ui/input/Input';
import { Select } from '../../shared/ui/dropdown/Dropdown';
import { useItemSelector } from '../../context/item-selector/ItemSelectorContext';
import type { ElementNumberFilter } from '../../context/item-selector/ItemSelectorTypes';
import { useEffect } from 'react';

const filterOptions = [
  { label: 'No filter', value: 'all' },
  { label: '> 100', value: 'gt-100' },
  { label: '> 2500', value: 'gt-2500' },
  { label: '> 10000', value: 'gt-10000' },
];

export function FilterBar() {
  const {
    searchValue,
    elementNumberFilter,
    setSearchValue,
    setElementNumberFilter,
  } = useItemSelector();

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  return (
    <div className="widget-filter">
      <div className="widget-filter-content">
        <div className="filter-search">
          <label htmlFor="search">Search</label>
          <Input
            type="text"
            id="search"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
        <div className="filter-dropdown">
          <label htmlFor="search">Filter</label>
          <Select
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
