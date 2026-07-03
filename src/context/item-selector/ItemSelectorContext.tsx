import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react';
import { items } from './Items';
import { itemSelectorReducer } from './ItemSelectorReducer';
import type {
  ItemSelectorContextValue,
  ItemSelectorState,
} from './ItemSelectorTypes';

const initialState: ItemSelectorState = {
  isOpen: true,
  items,
  selectedItemIds: [5, 51],
  draftSelectedItemIds: [5, 51],
  isMaxItemsSelected: false,
  searchValue: '',
  elementNumberFilter: 'all',
};

const ItemSelectorContext = createContext<ItemSelectorContextValue | null>(
  null
);

type ItemSelectorProviderProps = {
  children: ReactNode;
};

export function ItemSelectorProvider({ children }: ItemSelectorProviderProps) {
  const [state, dispatch] = useReducer(itemSelectorReducer, initialState);

  const selectedItems = useMemo(
    () => state.items.filter((item) => state.selectedItemIds.includes(item.id)),
    [state.items, state.selectedItemIds]
  );

  const draftSelectedItems = useMemo(
    () =>
      state.items.filter((item) =>
        state.draftSelectedItemIds.includes(item.id)
      ),
    [state.items, state.draftSelectedItemIds]
  );

  const visibleItems = useMemo(() => {
    const normalizedSearchValue = state.searchValue.trim().toLowerCase();

    return state.items.filter((item) => {
      const matchesSearch = item.label
        .toLowerCase()
        .includes(normalizedSearchValue);

      const matchesElementNumberFilter =
        state.elementNumberFilter === 'all' ||
        (state.elementNumberFilter === 'gt-100' && item.id > 100) ||
        (state.elementNumberFilter === 'gt-2500' && item.id > 2500) ||
        (state.elementNumberFilter === 'gt-10000' && item.id > 10000);

      return matchesSearch && matchesElementNumberFilter;
    });
  }, [state.items, state.searchValue, state.elementNumberFilter]);

  const value = useMemo<ItemSelectorContextValue>(
    () => ({
      isOpen: state.isOpen,
      items: state.items,
      visibleItems,
      selectedItems,
      draftSelectedItems,
      selectedItemIds: state.selectedItemIds,
      draftSelectedItemIds: state.draftSelectedItemIds,
      isMaxItemsSelected: state.isMaxItemsSelected,
      searchValue: state.searchValue,
      elementNumberFilter: state.elementNumberFilter,

      openWidget: () => dispatch({ type: 'OPEN_WIDGET' }),
      closeWidget: () => dispatch({ type: 'CLOSE_WIDGET' }),
      toggleDraftItem: (itemId) =>
        dispatch({ type: 'TOGGLE_DRAFT_ITEM', payload: itemId }),
      removeSelectedItem: (itemId) =>
        dispatch({ type: 'REMOVE_SELECTED_ITEM', payload: itemId }),
      setSearchValue: (value) =>
        dispatch({ type: 'SET_SEARCH_VALUE', payload: value }),
      setElementNumberFilter: (filter) =>
        dispatch({ type: 'SET_ELEMENT_NUMBER_FILTER', payload: filter }),
      saveSelection: () => dispatch({ type: 'SAVE_SELECTION' }),
      cancelSelection: () => dispatch({ type: 'CANCEL_SELECTION' }),
    }),
    [
      state.isOpen,
      state.items,
      visibleItems,
      selectedItems,
      draftSelectedItems,
      state.selectedItemIds,
      state.draftSelectedItemIds,
      state.isMaxItemsSelected,
      state.searchValue,
      state.elementNumberFilter,
    ]
  );

  return (
    <ItemSelectorContext.Provider value={value}>
      {children}
    </ItemSelectorContext.Provider>
  );
}

export const useItemSelector = () => useContext(ItemSelectorContext);
